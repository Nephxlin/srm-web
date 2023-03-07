import styled from "styled-components";

export const SideBarHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLUE_GRAY_100};
  padding-bottom: 8px;
  align-self: flex-start;
`;
