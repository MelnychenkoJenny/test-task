import styled from 'styled-components';

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  min-height: 40px;
  padding: 5px;
  border: 1px solid ${({ theme: { colors } }) => colors.accent};
  border-radius: 10px;
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
  svg {
    fill: ${({ theme: { colors } }) => colors.accentDark};
  }

  ${props =>
    props.disabled && `background-color: lightgrey; cursor: not-allowed	;`}
`;
