import {
  selectDeleteButtonVisible,
  selectDeleteSelectedRecipes,
  selectGetVisibleRecipes,
  selectPageForVisible,
  selectRecipes,
  selectSelectedRecipes,
  selectSelectRecipe,
  selectVisibleRecipes,
} from 'store/recipes/selectors';
import { useEffect, useRef } from 'react';
import useStore from 'store/recipes/store';
import {
  ButtonDelete,
  Info,
  InfoText,
  InfoUse,
  List,
  ListItem,
  ListItemLink,
} from './RecipeList.styled';
import { useLocation } from 'react-router-dom';
import { RiDeleteBin5Line } from 'react-icons/ri';
import emptyImg from '../Error/imagesEmpty.png'

export const RecipeList = () => {
  const recipes = useStore(selectRecipes);
  const visibleRecipes = useStore(selectVisibleRecipes);
  const selectRecipe = useStore(selectSelectRecipe);
  const selectedRecipes = useStore(selectSelectedRecipes);
  const deleteButtonVisible = useStore(selectDeleteButtonVisible);
  const getVisibleRecipes = useStore(selectGetVisibleRecipes);
  const deleteSelectedRecipes = useStore(selectDeleteSelectedRecipes);
  const pageForVisible = useStore(selectPageForVisible);
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const containerRefCurrent = containerRef.current;

    const handleContextMenu = event => {
      event.preventDefault();
      const listItem = event.target.closest('li');

      if (listItem) {
        const selectedRecipeId = listItem.dataset.recipeId;
        const selectedRecipe = recipes.find(
          recipe => recipe.id.toString() === selectedRecipeId
        );

        selectRecipe(selectedRecipe);
        return;
      }
    };
    containerRefCurrent.addEventListener('contextmenu', handleContextMenu);
    return () => {
      containerRefCurrent.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [recipes, selectRecipe, selectedRecipes]);

  useEffect(() => {
    getVisibleRecipes(pageForVisible);
  }, [getVisibleRecipes, pageForVisible]);

  const handleDelete = () => {
    deleteSelectedRecipes();
    getVisibleRecipes(pageForVisible);
  };

  return (
    <div ref={containerRef}>
      <List>
        {visibleRecipes.map(recipe => {
          return (
            <ListItem
              key={recipe.id}
              data-recipe-id={recipe.id}
              selected={selectedRecipes.includes(recipe)}
            >
              <ListItemLink to={`${recipe.id}`} state={{ from: location }}>
                <img src={recipe.image_url || emptyImg} alt={recipe.name} width="40"></img>
                <Info>
                  <h3>{recipe.name}</h3>

                  <InfoText>
                    <p>{recipe.tagline}</p>
                    <p>First brewed: {recipe.first_brewed}</p>
                    <p>Attenuation level: {recipe.attenuation_level}</p>
                  </InfoText>
                  <InfoUse>
                    Right click to select and delete. If you are using a phone,
                    press it.
                  </InfoUse>
                </Info>
              </ListItemLink>
            </ListItem>
          );
        })}
      </List>
      {deleteButtonVisible && (
        <ButtonDelete
          type="button"
          onClick={handleDelete}
          unvisible={selectedRecipes.length === 0}
        >
          DELETE {selectedRecipes.length}
          <RiDeleteBin5Line/>
        </ButtonDelete>
      )}
    </div>
  );
};
