import { Loading } from 'components/Loading';
import { RecipeList } from 'components/RecipeList';
import { useEffect, useRef } from 'react';
import { selectCurrentPage, selectFetchRecipes, selectIsPageLoaded, selectLoading, selectNextPage, selectPageForVisible, selectPrevPage, selectVisibleRecipes } from 'store/recipes/selectors';
import useStore from 'store/recipes/store';
import { Button, ButtonBox } from './Recipes.styled';

const Recipes = () => {
  const fetchRecipes = useStore(selectFetchRecipes);
  const loading = useStore(selectLoading);
  const visibleRecipes = useStore(selectVisibleRecipes);
  const currentPage = useStore(selectCurrentPage);
  const nextPage = useStore(selectNextPage);
  const prevPage = useStore(selectPrevPage);
  const pageForVisible = useStore(selectPageForVisible);
  const isPageLoaded = useStore(selectIsPageLoaded);

  const listRef = useRef(null);
  useEffect(() => {
    if (isPageLoaded) return;
    fetchRecipes(currentPage);
  }, [fetchRecipes, currentPage, isPageLoaded]);

  useEffect(() => {
    // Scroll to top when changing page
    window.scrollTo(0, 0);
  }, [currentPage, pageForVisible]);


  return (
    <>
      <div ref={listRef}>
        <RecipeList />
        {!visibleRecipes.length && (
          <p>You have already viewed all the recipes.</p>
        )}
      </div>
      {loading && <Loading />}
      <ButtonBox>
        <Button type="button" onClick={prevPage} disabled={pageForVisible <= 1}>
          Previous
        </Button>
        <Button type="button" onClick={nextPage} disabled={!visibleRecipes.length}>
          Next
        </Button>
      </ButtonBox>
    </>
  );
};

export default Recipes;
