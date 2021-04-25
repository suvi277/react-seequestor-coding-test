import styled from "styled-components";

export const Container = styled.div`
  margin: 0 15px;
  max-width: 100%;
  @media (min-width: 1024px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const Flex = styled.div`
  display: flex;
`;

export const ActionLink = styled.div`
  color: #8BDBFF;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  padding: 20px 20px 0  0;

  &.active {
    text-decoration: none;
  }

  &.down::after {
    margin-top: -5px;
    transform: rotate(45deg);
  }

  &.up::after  {
    margin-top: 2px;
    transform: rotate(-135deg);
  }

  &::after {
    content: "";
    border: solid #8BDBFF;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    margin-left: 8px;
    vertical-align: middle; 
  }
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Card = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  background-color: #000000AD;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
`;