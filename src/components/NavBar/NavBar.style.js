import styled from "styled-components"
import { ResetList } from "../../Styled/Mixins.style"

export const NavBarContainer = styled.nav`
  grid-area: ${(props) => props.$area};

  .navMenu {
    width: 25px;
    height: 25px;
    cursor: pointer;
    position: relative;
    margin-top: 1rem;

    div {
      position: absolute;
      width: 100%;
      height: 12%;
      background-color: ${(props) => props.theme.colors.primary};
      transition: 0.2s ease-in-out;

      &:first-child {
        top: 0;
        left: 0;
      }

      &:nth-child(2) {
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }

      &:last-child {
        top: 90%;
        left: 0;
      }
    }

    @media screen and (min-width: ${props => props.theme.grid.breakpoints.m}) {
		  display: none;
    }
  }

  .burgerMenuActive div {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 12%;
    background-color: white;
    transition: 0.2s ease-in-out;

    &:first-child {
      top: 50%;
      left: 0;
      transform: translateY(-50%) rotate(45deg);
    }

    &:nth-child(2) {
      top: 50%;
      left: 0;
      transform: translateY(-50%) rotate(45deg);
    }

    &:last-child {
      top: 50%;
      left: 0;
      transform: translateY(-50%) rotate(-45deg);
    }
  }

  .burgerMenuActive ~ ul {
    ${ResetList};
    position: fixed;
    z-index: 0;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    transition: 0.2s ease-in-out;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: rgba(33, 33, 33, 0.9);
    padding: 2rem 2rem;

    li {
      width: 90%;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.light};
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
  }

  ul {
    display: none;

    @media screen and (min-width: ${(props) => props.theme.grid.breakpoints.m}) {
      display: flex;
      ${ResetList};
      vertical-align: bottom;
      height: 50px;
      flex-direction: row;
      justify-content: end;
      align-items: end;

      li {
        margin-left: 1.2rem;
      }

      a {
        font-family: ${(props) => props.theme.fonts[0]};
        color: ${(props) => props.theme.colors.primary};
        text-decoration: none;
        font-size: ${(props) => props.theme.fontsizes.m};
        white-space: nowrap;

        &:hover {
          color: ${(props) => props.theme.colors.quaternary};
        }
      }
    }
  }
`
