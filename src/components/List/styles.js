import styled from "styled-components";

export const ListWrapper = styled.ul`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 5px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;
