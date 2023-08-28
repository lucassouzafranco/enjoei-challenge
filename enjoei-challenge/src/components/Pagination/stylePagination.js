import { styled } from "styled-components";

export const ButtonsArea = styled.div`
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Buttons = styled.div`
  margin-top: 3em;

  @media (max-width: 768px) {
    margin-bottom: 3em;
  }
`;

export const Previous = styled.button`
  width: 8vw;
  height: 6vh;
  background-color: transparent;
  border-style: none;
  border: 1px solid #eee;
  color: #CAC7C5;
  font-family: 'Poppins', sans-serif;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 1em;

  @media (max-width: 768px) {
    width: 28vw;
    height: 5vh;
  }
`;

export const Next = styled.button`
  width: 8vw;
  height: 6vh;
  background-color: transparent;
  border-style: none;
  border: 1px solid #eee;
  color: #f05b78;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  border-radius: 3px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 28vw;
    height: 5vh;
  }
`;