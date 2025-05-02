import styled from "styled-components"

export const HeaderContainer = styled.header`
  grid-area: ${props => props.$area};
  background-color: ${props => props.theme.colors.dark};
  display: flex;
  align-items: center;    /* Lodret centrering */
  padding: 0rem 2rem;
  min-height: 80px;

  img {
    width: 187px;
  }

  a {
    text-decoration: none;
  }
`
