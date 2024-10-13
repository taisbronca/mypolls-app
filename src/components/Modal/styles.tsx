import styled from "styled-components";

export const Backdrop = styled.div`
  background: rgba(16, 15, 15, 0.56);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 55px;
  position: relative;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 500px;

  h2 {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
  }

  label {
    text-align: left;
  }

  input {
    height: 35px;
    width: 100%;
    background-color: #fdfafa;
    border: 1px solid #d5d5d5;
    border-radius: 10px;
    padding: 0 16px;
    &::placeholder {
      color: #968b8b;
    }

    &:focus {
      border-color: #ff6200;
      outline: none;
    }
  }

  button {
    padding: 10px 20px;
    background-color: #ff6200;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;

    svg {
      width: 15px;
      height: 15px;
    }

    &:hover {
      background-color: #3d3d42;
    }
  }
`;

export const OptionsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CloseIcon = styled.span`
  position: absolute;
  right: 24px;
  top: 24px;
  cursor: pointer;
  font-size: 24px;
  color: #ff6200;

  &:hover {
    color: #ff944d;
  }
`;
