import styled from "styled-components"
import { ResetList } from "../../styled/Mixins.styled"

export const NavBarStyled = styled.nav`
  grid-area: ${(props) => props.$area};
  background: #fff;
  border-right: 1px solid #e4e4e4;
  position: relative;

  .burger {
    display: none;
    flex-direction: column;
    gap: 5px;
    width: 30px;
    margin: 1rem;
    cursor: pointer;
    z-index: 1101; /* 💡 højere end menuen */
    position: absolute;
    top: 10px;
    right: 10px;

    span {
      height: 3px;
      background: ${(props) => props.theme.colors.light};
      width: 100%;
    }

    .close {
      font-size: 2rem;
      color: white;
      background: black;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
    }    

    @media (max-width: ${({ theme }) => theme.grid.breakpoints.l}) {
      display: flex;
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  ul.nav {
    ${ResetList};
    padding: 2rem 1rem;


    li {
      margin-bottom: 1rem;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.dark};

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }

    @media (max-width: ${({ theme }) => theme.grid.breakpoints.l}) {
      background: ${({ theme }) => theme.colors.dark};
      color: ${({ theme }) => theme.colors.light};
      position: fixed;
      top: 0;
      right: 0;
      width: 70%;
      height: 100vh;
      padding: 4rem 2rem;
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
      z-index: 1000;

      a {
        color: ${({ theme }) => theme.colors.light};
      }

      &.open {
        transform: translateX(0);
      }
    }
  }
`
