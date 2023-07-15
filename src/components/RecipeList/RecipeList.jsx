import { selectRecipes } from 'store/recipes/selectors';
import { useEffect, useRef } from 'react';
import useStore from 'store/recipes/store';
import { ListItem } from './RecipeList.styled';
import { Link, useLocation } from 'react-router-dom';

export const RecipeList = () => {
  const recipes = useStore(selectRecipes);
  const visibleRecipes = useStore(state => state.visibleRecipes);
  const selectRecipe = useStore(state => state.selectRecipe);
  const selectedRecipes = useStore(state => state.selectedRecipes);
  const deleteButtonVisible = useStore(
		(state) => state.deleteButtonVisible
	);
  const deleteSelectedRecipes = useStore(
		(state) => state.deleteSelectedRecipes
	);
  const containerRef = useRef(null);
  const location = useLocation();
    

  useEffect(() => {
    const containerRefCurrent = containerRef.current;
    const handleContextMenu = event => {
      event.preventDefault();
      const selectedRecipeId = event.target.closest('li').dataset.recipeId;
      const selectedRecipe = recipes.find(
        recipe => recipe.id.toString() === selectedRecipeId
      );
      selectRecipe(selectedRecipe);
    };
    containerRefCurrent.addEventListener('contextmenu', handleContextMenu);

    return () => {
      containerRefCurrent.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [recipes, selectRecipe]);

  const handleDelete = () => {
		deleteSelectedRecipes();
	};

  // console.log(`all`,recipes);
  // console.log(`visible array`, visibleRecipes);
  return (
    <div ref={containerRef}>
      <ul>
        {visibleRecipes.map(recipe => (
          <ListItem
            key={recipe.id}
            data-recipe-id={recipe.id}
            selected={selectedRecipes.includes(recipe)}
          >
            <Link to={`${recipe.id}`} state={{from: location}}>
              <h3>
                {recipe.id}
                {recipe.name}
              </h3>
              <p>{recipe.tagline}</p>
              {recipe.id}
              {recipe.name}
            </Link>
          </ListItem>
        ))}
      </ul>
       {deleteButtonVisible && <button type='button' onClick={handleDelete}>DELETE</button>}
    </div>
  );
};
