import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background-color: var(--colorPrimary);
    border: 2px solid transparent;
    outline: none;
    width: 150px;
    padding: 10px;
    display: inline;
    margin-bottom: 0.4rem;
    color: #000;
    font-weight: bold;
    font-size: 18px;
    border-radius: 0.2rem;
    text-align: center;

    &:hover {
      color: var(--colorPrimary);
      background-color: #000;
      border: 2px solid var(--colorPrimary);
    }
  }
`;
