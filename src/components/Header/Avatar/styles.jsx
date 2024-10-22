import styled from "styled-components";
import { devices } from "../../../styles/global.jsx";

export const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 6px;
  margin-right: 10px;
  gap: 10px;

  @media (max-width: ${devices.tablet}) {
    span {
      display: none;
    }
  }
`;

export const AvatarRoot = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background-color: white;
  border: 1px solid #ff944d;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  width: 110px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    white-space: nowrap;
    justify-content: space-between;

    &:hover {
      background-color: #f8f8f9;
      border-radius: 10px;
    }
  }
`;
