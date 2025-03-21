import styled from "styled-components"

export const MainContainer = styled.main`
  grid-area: ${(props) => props.$area};
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.primary};

`
