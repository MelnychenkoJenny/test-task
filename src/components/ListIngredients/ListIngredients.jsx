import { selectRecipeDetails } from 'store/recipes/selectors';
import useStore from 'store/recipes/store';
import {
  IngredientsContainer,
  IngredientsList,
  IngredientsTitle,
  Tips,
} from './ListIngredients.styled';

export const ListIngredients = () => {
  const recipeDetails = useStore(selectRecipeDetails);
  const { ingredients, food_pairing, brewers_tips, contributed_by } = recipeDetails;
    
  return (
    <>
      <IngredientsContainer>
        <div>
          <IngredientsTitle>Malt</IngredientsTitle>
          <IngredientsList>
            {ingredients?.malt.map((malt, index) => (
              <li key={index}>
                <span>{malt.name}</span> - {malt.amount.value} {malt.amount.unit}
              </li>
            ))}
          </IngredientsList>
        </div>
        <div>
          <IngredientsTitle>Hops</IngredientsTitle>
          <IngredientsList>
            {ingredients?.hops.map((hop, index) => (
              <li key={index}>
                <span>{hop.name}</span> - {hop.amount.value} {hop.amount.unit} (
                {hop.add}, {hop.attribute})
              </li>
            ))}
          </IngredientsList>
        </div>
        <div>
          <IngredientsTitle>Food pairing</IngredientsTitle>
          <IngredientsList>
            {food_pairing.map((pair, index) => (
              <li key={index}>{pair}</li>
            ))}
          </IngredientsList>
        </div>
      </IngredientsContainer>
      <div style={{ textAlign: 'center' }}>
        <h3>Yeast</h3>
        <div>{ingredients?.yeast}</div>
        <div>
          <Tips>Brewers tips: {brewers_tips}</Tips>
          <p>Contributed by: {contributed_by}</p>
        </div> 
       </div>
    </>
  );
};
