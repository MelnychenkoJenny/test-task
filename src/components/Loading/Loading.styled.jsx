import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;

export const LoadingBackdrop = styled.div`
position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme: { colors } }) => colors.backdrop};
`

export const LoadingStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  border: 10px solid ${({ theme: { colors } }) => colors.white};
  border-top: 10px solid ${({ theme: { colors } }) => colors.accent};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
