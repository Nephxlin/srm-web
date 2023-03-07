import styled from "styled-components";
import { MdOutlineSearch } from "react-icons/md";
export const InputSearchContainer = styled.div`
  background: #fffffd;
  /* BlueGray/700 */
  padding: 0 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE_GRAY_300};
  border-radius: 25px;
  display: flex;
  max-width: 203px;
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;
  &:focus-within {
    border-color: ${({ theme }) => theme.COLORS.PRIMARY_300};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  }
  input {
    background: none;
    border: none;
    height: 40px;
    width: 100%;
    border-radius: 25px;
    padding: 0 8px;
    color: ${({ theme }) => theme.COLORS.BLUE_GRAY_100};
    &:focus {
      outline: none;
    }
    &:-webkit-autofill {
      background: none;
    }
  }
`;

export const SearchIcon = styled(MdOutlineSearch)`
  font-size: 24px;
  border-color: ${({ theme }) => theme.COLORS.BLUE_GRAY_700};
`;

export const SideBarButton = styled.button`
  margin-top: 30px;
  background: none;
  border: none;
  border-radius: 4px;
  width: 64px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BLUE_GRAY_100};
    opacity: 0.8;
  }
`;
