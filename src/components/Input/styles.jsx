import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
 width: 100%;
`;

export const InputStyled = styled.input`
  height: 40px;
  width: 100%;
  background-color: #fdfafa;
  border: 1px solid #d5d5d5;
  border-radius: 10px;
  padding: 0 16px;
  margin-bottom: 16px;
  box-sizing: border-box;
  &::placeholder {
    color: #968b8b;
  }

  &:focus {
    border-color: #ff6200;
    outline: none;
  }
  &.error {
    border-color: #ff4d4f;
  }
`;

export const EyeIcon = styled.div`
  position: absolute;
  top: 40%;
  right: 16px;
  transform: translateY(-50%);
  cursor: pointer;
  color: #968b8b;

  &:hover {
    color: #ff6200;
  }
`;
