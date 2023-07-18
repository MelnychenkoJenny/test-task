import styled from 'styled-components';

export const IngredientsContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  @media screen and (min-width: 590px) {
    display: flex;
    justify-content: space-around;
  }
`;
export const IngredientsList = styled.ul`
  text-align: center;
  margin-bottom: 15px;
  @media screen and (min-width: 590px) {
    text-align: left;
  }
`;
export const IngredientsTitle = styled.h3`
  text-align: center;
  margin-bottom: 8px;
`;

export const Tips = styled.p`
  padding: 8px;
  border: 1px solid ${({ theme: { colors } }) => colors.accent};
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${({ theme: { colors } }) => colors.accentDark};
  font-weight: 600;
  background-color: ${({ theme: { colors } }) => colors.white};
`;
