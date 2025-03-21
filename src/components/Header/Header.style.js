import styled from "styled-components"

export const HeaderContainer = styled.header`
  grid-area: ${props => props.$area};

  a {
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts[0]};
    font-size: ${props => props.theme.fontsizes.xl};
    text-decoration: none;
    font-weight: bold;
  }
`
