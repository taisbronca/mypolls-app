import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f9;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #ff944d;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  color: #333333;
  width: 100%;
  max-width: 400px;

  p {
    margin-bottom: 20px;
  }

  h1 {
    text-align: left;
    margin-bottom: 30px;
  }

  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  span {
    margin-top: 20px;
  }

  a {
    text-decoration: none;
    color: #ff6200;
    font-weight: bold;
    &:hover {
      color: #ff944d;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  background-color: #ff6200;
  margin-top: 30px;
  cursor: pointer;
  &:hover {
    background-color: #3d3d42;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: -12px;
  margin-left: 5px;
  text-align: left;
`;
