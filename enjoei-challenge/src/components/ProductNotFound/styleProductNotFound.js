import {styled} from 'styled-components';

export const ProductNotFoundArea = styled.div `
  margin-top: 1em;
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 91%;
    align-items: flex-start; /* Alinha à esquerda em todos os dispositivos */ 
  }
`;

export const Image = styled.img `
  height: 45%;
  margin-top: 3em;
`;

export const FeedbackTitle = styled.h2`
  font-family: 'Arial', sans-serif;
  font-weight: 900;

  @media (max-width: 768px) {
    
  }
`;

export const Subtitle = styled.h5`
  font-family: 'Arial', sans-serif;
  font-weight: 100;
  color: gray;
  margin-top: 0.5em;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const CleanSearchButton = styled.button`
  height: 5vh;
  width: 8vw;
  border-style: none;
  border-radius: 3px;
  margin-top: 2em;
  color: #fce4e9;
  background-color: #f05b78;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 25vw;
  }
`;