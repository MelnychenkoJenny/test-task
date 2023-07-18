import { Loading } from 'components/Loading';
import { useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {
  selectGetRecipeById,
  selectLoading,
  selectRecipeDetails,
} from 'store/recipes/selectors';

import useStore from 'store/recipes/store';
import {
  BackBtn,
  DetailContainer,
  DetailInfo,
  Image,
} from './RecipesDetails.styled';

import { ListAbout } from 'components/ListAbout/ListAbout';
import { ListIngredients } from 'components/ListIngredients/ListIngredients';
import emptyImg from '../components/Error/imagesEmpty.png'

const RecipesDetails = () => {
  const getRecipeById = useStore(selectGetRecipeById);
  const recipeDetails = useStore(selectRecipeDetails);
  const loading = useStore(selectLoading);
  const { id } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const { image_url, name, tagline, first_brewed, description } = recipeDetails;

  useEffect(() => {
    getRecipeById(id);
  }, [getRecipeById, id]);

  return (
    <>
      <BackBtn to={backLinkLocationRef.current}>Go back</BackBtn>
      {loading ? (
        <Loading />
      ) : (
        <>
          <DetailContainer>
            <Image src={image_url || emptyImg} alt={name} width="80"></Image>

            <DetailInfo>
              <h2 style={{ textAlign: 'center' }}>{name}</h2>
              <p style={{ textAlign: 'center' }}>{tagline}</p>
              <p style={{ textAlign: 'center' }}>
                First-brewed: {first_brewed}
              </p>
              <p>{description}</p>
              <ListAbout />
              <ListIngredients />
            </DetailInfo>
          </DetailContainer>
        </>
      )}
    </>
  );
};

export default RecipesDetails;
