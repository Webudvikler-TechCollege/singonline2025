import styled from 'styled-components'

export const ProfileStyled = styled.div`
.user-profile {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  font-family: sans-serif;
}

.user-name {
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.section {
  margin-bottom: 1rem;
}

.section-button {
  width: 100%;
  text-align: left;
  font-weight: bold;
  padding: 0.5rem 0.75rem;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.section-button:hover {
  background-color: #e0e0e0;
}

.section-content {
  padding: 0.5rem 1rem;
  margin-top: 0.25rem;
  background-color: #fafafa;
  border-left: 3px solid #ccc;
  font-size: 0.9rem;
}

`