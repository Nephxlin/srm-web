import { MdClose } from "react-icons/md";
import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  background:  ${({theme}) => theme.COLORS.WHITE_100};
  flex-direction: column;
  padding: 24px;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content:  flex-end;
  width: 100%;
  button {
    background: none;
    border: none;
    cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    transition: all 0.3s;
    &:hover {
      background-color: ${({theme}) => theme.COLORS.BLUE_GRAY_100};
    }
  }
`

export const IconClose = styled(MdClose)`
     color:  ${({theme}) => theme.COLORS.BLUE_GRAY_700};
     font-size: 19px;
`

export const ModalTitle = styled.h2`
  font-family: ${({theme}) => theme.FONT_FAMILY.MABRY_PRO};
  color:  ${({theme}) => theme.COLORS.BLUE_GRAY_700};
  font-size: 34px;
  font-weight: normal;
`

export const ModalContent = styled.p`
  font-family: ${({theme}) => theme.FONT_FAMILY.MABRY_PRO};
  color:  ${({theme}) => theme.COLORS.BLUE_GRAY_500};
  font-size: ${({theme}) => theme.FONT_SIZE.SM};
  font-weight: normal;
  margin: 24px 0;

`
export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    margin-right: 10px;
  }
`

