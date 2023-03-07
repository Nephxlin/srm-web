import styled from "styled-components";
import {RiCloseCircleLine, RiCheckboxCircleLine} from 'react-icons/ri'
export type ButtonStyleProps = {
  background : string
  border? : string
  color : string
}


export const ButtonConatainer = styled.button<ButtonStyleProps>`
    border : ${(props) => !props.border ? 'none' : `1px solid ${props.border}` };
    background-color : ${(props) => props.background };
    color :  ${(props) => props.color };
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
    font-weight: 900;
    font-family:  ${({theme}) => theme.FONT_FAMILY.MABRY_PRO};
    padding: 12px 31px;
    border-radius:  4px;
    display: flex;
    align-items: center;
    justify-content : space-between;
    cursor: pointer;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.5s;
    &:hover {
      opacity: 0.8;
    }
    &:disabled {
      pointer-events: none;
      color :  ${({theme} )=> theme.COLORS.BLUE_GRAY_500};
      background-color : ${({theme} )=> theme.COLORS.BLUE_GRAY_100};
      border : none
    }
`

export const IconWrapper = styled.div`
  margin-left: 8px;


`

export const IconCancel = styled(RiCloseCircleLine)`
    color :  ${({theme} )=> theme.COLORS.BLUE_GRAY_900};
    font-size: 20px;

`


export const IconEnter = styled(RiCheckboxCircleLine)`
    color :  ${({theme} )=> theme.COLORS.BLUE_GRAY_900};
    font-size: 20px;

`