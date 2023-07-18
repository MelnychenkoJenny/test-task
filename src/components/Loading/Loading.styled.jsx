import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;

export const LoadingStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  border: 10px solid ${({ theme: { colors } }) => colors.loadingBorder};
  border-top: 10px solid ${({ theme: { colors } }) => colors.accent};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
