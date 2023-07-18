import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { BsFillSuitHeartFill } from 'react-icons/bs';

export const MainTitle = styled.h1`
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 3px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 30px 15px;
  text-align: center;
  background: linear-gradient(
    to bottom,
    ${({ theme: { colors } }) => colors.white} 50%,
    ${({ theme: { colors } }) => colors.background}
  );
`;

export const Logo = styled(Link)`
  svg {
    width: 50px;
    height: 50px;
    color: ${({ theme: { colors } }) => colors.accent};
    transition: scale 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  transition: scale 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover svg {
    scale: 1.2;
  }
`;

const heartbeat = keyframes`
0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.25);
  }
  40% {
    transform: scale(1.5);
  }
`;

export const HeartIcon = styled(BsFillSuitHeartFill)`
  animation: ${heartbeat} 1s infinite;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 30px 15px;
  background: linear-gradient(
    to bottom,
    ${({ theme: { colors } }) => colors.background} 20%,
    ${({ theme: { colors } }) => colors.accentDark}
  );
`;

export const Social = styled(Link)`
  svg {
    width: 20px;
    height: 20px;
    transition: scale 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  transition: scale 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover svg {
    scale: 1.3;
  }
`;
