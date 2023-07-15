import styled from "styled-components";

export const ListItem = styled.li`
${(props) =>
    props.selected && `border: 2px solid red;`
}
`