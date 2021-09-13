import styled from 'styled-components'

export const Button = styled.button`
  font: 400 1rem "Inter", sans-serif;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: none;
  width: 10rem;
  margin: 0.5rem;

  &.primary {
    background-color:  #ff57b2;
  }

  &.secondary {
    background-color: transparent;
    border: 1px solid  #ff57b2;
    color: #f8f8f8;
  }
`;