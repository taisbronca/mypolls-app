import styled from "styled-components";

export const MainContainer = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 70px;

  h1 {
    text-align: left;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  gap: 15px;
  margin-top: 15px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
