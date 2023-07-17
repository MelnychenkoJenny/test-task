import { Container } from "components/App/App.styled";
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
