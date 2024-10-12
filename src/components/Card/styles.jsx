// src/components/Card/styles.js
import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding-bottom: 20px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  text-align: center;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const Divider = styled.div`
  width: calc(100% + 40px);
  margin-left: -20px;
  border-bottom: 1px solid #e1e1e6;
`;

export const CardHeader = styled.div`
  font-weight: bold;
  font-size: 18px;
  text-align: left;
`;

export const CardBody = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
  font-size: 14px;
  color: #333;
  text-align: left;
`;

export const CardButton = styled.button`
  background-color: #ff6200;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  align-self: center;
  text-align: center;
  width: 100%;

  &:hover {
    background-color: #3d3d42;
  }
`;
