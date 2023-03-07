import { MdLogout } from "react-icons/md";
import styled from "styled-components";

export const MenuUserBase = styled.div `
    position: relative;
    cursor: pointer;
    &:hover {
      .user-menu {
        opacity: 1;
        visibility: visible;

      }
    }
    .user-menu {
      transition: all 0.5s;
      position: fixed;
       width: 232px;
       background-color: ${({theme}) => theme.COLORS.WHITE_100};
       border-radius: 4px;
       right: 20px;
       top: 80px;
       padding: 15px;
       cursor: default;
       visibility: hidden;
       opacity: 0;
 
      &::before {
        content: '';
          position: relative;
          top: -40px;
          left: 180px;
        width: 0; 
          height: 0; 
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid ${({theme}) => theme.COLORS.WHITE_100};
      }
      &-logout {
          display: flex;
          align-items: center;
          padding: 10px;
          cursor: pointer;
          transition: all 0.5s;
          margin-top: 10px;
          span {
            font-size: 12px;
            color: ${({theme}) =>  theme.COLORS.BLUE_GRAY_600};
            margin-left: 12px;
            font-family: ${({theme}) => theme.FONT_FAMILY.ROBOTO};
          }
          &:hover {
            background-color: ${({theme}) =>  theme.COLORS.BLUE_GRAY_50};;
          }
       }
    }
    .user-area {
      &-info {
         border-bottom: 1px solid ${({theme}) => theme.COLORS.BLUE_GRAY_100};
         padding-bottom: 16px;
         display: flex;
         &-user {
          margin-left: 10px;
          color: ${({theme}) => theme.COLORS.BLUE_GRAY_700};
          font-family: ${({theme}) => theme.FONT_FAMILY.ROBOTO};
          p{
            font-size: ${({theme}) => theme.FONT_SIZE.SM};
            font-weight: 500;
          }
          span {
            font-size: 12px;

          }
         }
       }
   
    }
`

export const IconLogout = styled(MdLogout) `
  font-size: 19px;
  color: ${({theme}) =>  theme.COLORS.BLUE_GRAY_800};
  cursor: pointer;
  transition: all 0.5s;
  font-weight: normal;
`
