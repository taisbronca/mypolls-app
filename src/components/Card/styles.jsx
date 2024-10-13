import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  text-align: center;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
  padding: 20px;
  flex-grow: 1;
  justify-content: space-between;
`;

export const Divider = styled.div`
  width: calc(100% + 40px);
  margin-left: -20px;
  border-bottom: 1px solid #e1e1e6;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 15px;
  text-align: left;
  padding: 10px 20px;
`;

export const CardBody = styled.div`
  font-size: 14px;
  color: #333;
  text-align: left;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  li {
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    white-space: nowrap;
    justify-content: space-between;
    border-bottom: 1px solid #e1e1e6;

    &:hover {
      background-color: #f8f8f9;
      border-radius: 5px;
    }
  }
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
