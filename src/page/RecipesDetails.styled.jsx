import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100px;
  height: 30px;
  padding: 5px;
  border: 1px solid ${({ theme: { colors } }) => colors.accent};
  border-radius: 10px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme: { colors } }) => colors.accentDark};
  font-weight: 600;
  background-color: ${({ theme: { colors } }) => colors.white};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    scale: 1.1;
    box-shadow: ${({ theme: { colors } }) => colors.shadow};
  }
`;

export const DetailContainer = styled.div`
  padding: 15px;
  background-color: ${({ theme: { colors } }) => colors.backgroundCard};
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;
  }
`;

export const DetailInfo = styled.div`
  margin-top: 15px;
  text-align: justify;
`;

export const Image = styled.img`
margin: 0 auto;
@media screen and (min-width: 768px) {
  margin: 0;
  width: 100px;
`;
