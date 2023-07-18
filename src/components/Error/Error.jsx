import { BackBtn } from 'page/RecipesDetails.styled';
import { ContainerError } from './Error.styled';

import errorImg from './errorImg.png';

export const Error = ({ error }) => {
  return (
    <ContainerError>
      <p style={{ textAlign: 'center' }}>
        Oops... Something went wrong. {error} Try again later. 🙄
      </p>
      <BackBtn to="/">Home Page</BackBtn>
      <img
        src={errorImg}
        alt="emptyImageCat"
        style={{
          width: '170px',
        }}
      />
    </ContainerError>
  );
};
