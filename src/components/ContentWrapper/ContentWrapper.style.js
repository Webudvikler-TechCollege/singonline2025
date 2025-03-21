import styled from "styled-components"

export const ContentWrapperContainer = styled.div`
  //border: solid 1px #000;

  h1 {
    margin-top: 0;
    margin-block-start: 0%;
  }

  .button {
    display: inline-block;
    margin-left: 0.5rem;
  }

  section {
    display: grid;
    grid-template-columns: 6fr 6fr;

    div:last-child {
      text-align: right;
    }
    @media print {
      grid-template-columns: 12fr;

      div:last-child * {
        display: none;
      }
    }
  }
`
