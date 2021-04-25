import styled from "styled-components";

export const ListBox = styled.div`
  height: calc(100vh - 160px);
  overflow: auto;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
`

export const ArticleTitle = styled.h3`
  color: #ffffff;
  padding-left: 12px;
  flex-grow: 1;
`;

export const ArticleImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const ArticleDate = styled.span`
  color: rgb(136, 136, 136);
  font-size: 12px;
  align-self: center;
`;