import { Loading } from 'components/Loading';
import { RecipeList } from 'components/RecipeList';
import { useEffect, useRef } from 'react';
import useStore from 'store/recipes/store';

const Recipes = () => {
  const fetchRecipes = useStore(state => state.fetchRecipes);
  const loading = useStore(state => state.loading);

  const recipes = useStore(state => state.recipes);
  const currentPage = useStore(state => state.currentPage);
  const totalPages = useStore(state => state.totalPages);
  const nextPage = useStore(state => state.nextPage);
  const prevPage = useStore(state => state.prevPage);
  const listRef = useRef(null);

  useEffect(() => {
    fetchRecipes(currentPage);
  }, [fetchRecipes, currentPage]);

  useEffect(() => {
    // Scroll to top when changing page
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <div>Recipes page</div>
      <div ref={listRef}>
        <RecipeList />
        {!recipes.length && <p>You have already viewed all the recipes.</p>}
      </div>
      {loading && <Loading />}
      <button onClick={prevPage} disabled={currentPage <= 1}>
        Previous
      </button>
      <button
        onClick={nextPage}
        disabled={currentPage >= totalPages || !recipes.length}>
        Next
      </button>
    </>
  );
};

export default Recipes;
