import { Button } from 'page/Recipes.styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 10px;
  text-align: center;
  
`;

export const ListItem = styled.li`
  display: flex;
  flex-basis: calc((100% - 20px));
  padding: 15px;
  background-color: ${({ theme: { colors } }) => colors.backgroundCard};
  border-radius: 10px;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  transition: scale 300ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    scale: 1.05;
  }
  @media screen and (min-width: 555px) {
    flex-basis: calc((100% - 20px) / 3);
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 4);
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 20px) / 5);
  }
  @media screen and (min-width: 1300px) {
    flex-basis: calc((100% - 20px) / 6);
  }

  ${props => props.selected && `border: 2px solid red;`}
`;
export const ListItemLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ButtonDelete = styled(Button)`
position: fixed;
top: 3%;
left: 65%;
}
@media screen and (min-width: 768px) {
    left: 80%;
  }
  @media screen and (min-width: 1200px) {
    top: 10%;
    left: 85%;
  }
${props => props.unvisible && `display: none;`}
`;

export const Info = styled.div`
display: flex;
gap: 10px;
flex-direction: column;
font-size: 12px;
text-align: left;
h3 {
    font-size: 16px;
}

}
`;
export const InfoText = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  font-size: 12px;
  text-align: left;
`;

export const InfoUse = styled.p`
  color: ${({ theme: { colors } }) => colors.infoRed};
  font-size: 10px;
`;
