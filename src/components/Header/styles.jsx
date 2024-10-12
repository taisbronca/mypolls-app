import styled from "styled-components";
import { devices } from "../../styles/global.jsx";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 16px 70px;
  background-color: #fff;
  z-index: 1;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  font-weight: 600;
  color: #333333;

  p {
    font-size: 20px;
  }

  @media (max-width: ${devices.tablet}) {
    p {
      display: none;
    }
  }
`;

export const Logo = styled.img`
 height: 30px;
`;

