import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-right: 30px;
  margin-bottom: 15px;

  input {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid var(--colorPrimary);
    outline: none;
    width: 100%;
    display: inline;
    margin-bottom: 0.4rem;
    color: var(--colorPrimary);
  }

  input::placeholder {
    color: var(--colorPrimary);
    padding-left: 8px;
  }
`;
