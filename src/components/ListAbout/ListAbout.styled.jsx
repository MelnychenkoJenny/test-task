import styled from 'styled-components';

export const ListStyleAbout = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 15px;
  li span {
    font-weight: 500;
    margin-right: 5px;
  }
  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    gap: 29px;
  }
`;
