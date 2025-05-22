import styled, { keyframes } from "styled-components"

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const LoaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8); /* semi-transparent bg */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .spinner {
    width: 64px;
    height: 64px;
    border: 8px solid #ccc;
    border-top-color: #007bff;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #333;
  }
`
