import { Loading } from 'components/Loading';
import { useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { selectGetRecipeById, selectLoading, selectRecipeDetails } from 'store/recipes/selectors';

import useStore from 'store/recipes/store';
import { BackBtn, DetailContainer } from './RecipesDetails.styled';

import styled from "styled-components";

const RecipeCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  width: 400px;
`;

const RecipeTitle = styled.h2`
  grid-column: 1 / span 2;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const RecipeImage = styled.img`
  grid-column: 1 / span 2;
  // width: 100%;
  // height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const RecipeDescription = styled.p`
  grid-column: 1 / span 2;
  font-size: 14px;
  text-align: justify;
`;

const RecipeDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;

const RecipeDetailLabel = styled.span`
  font-weight: bold;
`;

const RecipeDetailValue = styled.span``;

const RecipesDetails = () => {
  const getRecipeById = useStore(selectGetRecipeById);
  const recipeDetails = useStore(selectRecipeDetails);
  const loading = useStore(selectLoading);

  const { id } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  
  useEffect(() => {
    getRecipeById(id);
  }, [getRecipeById, id]);

  return (
    <>
      <BackBtn to={backLinkLocationRef.current}>Go back</BackBtn>
      {loading ? <Loading/> : <>
      <DetailContainer>
        {/* <img src={recipeDetails.image_url} alt={recipeDetails.name} width="100" style={{margin: '0 auto'}}></img>
    
          <DetailInfo>
            <h3>
              {recipeDetails.name}
            </h3>
            <p>{recipeDetails.tagline}</p>
            <p>First-brewed: {recipeDetails.first_brewed}</p>
            <p>{recipeDetails.description}</p>
            
          </DetailInfo> */}

<RecipeCardContainer>
      <RecipeTitle>{recipeDetails.name}</RecipeTitle>
      <RecipeImage src={recipeDetails.image_url} alt={recipeDetails.name} width="100"/>
      <RecipeDescription>{recipeDetails.description}</RecipeDescription>
      <RecipeDetails>
        <RecipeDetailLabel>ABV:</RecipeDetailLabel>
        <RecipeDetailValue>{recipeDetails.abv}</RecipeDetailValue>
        <RecipeDetailLabel>IBU:</RecipeDetailLabel>
        <RecipeDetailValue>{recipeDetails.ibu}</RecipeDetailValue>
        <RecipeDetailLabel>EBC:</RecipeDetailLabel>
        <RecipeDetailValue>{recipeDetails.ebc}</RecipeDetailValue>
        <RecipeDetailLabel>SRM:</RecipeDetailLabel>
        <RecipeDetailValue>{recipeDetails.srm}</RecipeDetailValue>
      </RecipeDetails>
    </RecipeCardContainer>
      </DetailContainer>
      </>}
    </>
  );
};

export default RecipesDetails;
