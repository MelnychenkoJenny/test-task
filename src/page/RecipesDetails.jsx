import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useStore from 'store/recipes/store';

const RecipesDetails = () => {
    const {id} = useParams();

    const getRecipeById = useStore(state => state.getRecipeById);
    const recipeDetails = useStore(state => state.recipeDetails);
   console.log(recipeDetails);
   
    useEffect(() => {
        getRecipeById(id);
      }, [getRecipeById, id]);

    return (
        <>
        <div>RecipesDetails !!! page</div>
        <h3>
                {recipeDetails.id}
                {recipeDetails.name}
              </h3>
              <p>{recipeDetails.tagline}</p>
        </>
    )
}

export default RecipesDetails;