import { Container } from "components/App/App.styled";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerError = styled(Container)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
min-height: calc(100vh - 110px);
padding: 30px;
width: 50%;
background-color: ${({ theme: { colors } }) => colors.bgAlfa};
`
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
  color: ${({ theme: { colors } }) => colors.accentDark};
  font-weight: 600;
  background-color: ${({ theme: { colors } }) => colors.backgroundBtn};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    scale: 1.1;
    box-shadow: ${({ theme: { colors } }) => colors.shadow};
  }
`;