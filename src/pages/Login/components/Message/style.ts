import { MdErrorOutline } from "react-icons/md";
import styled from "styled-components";

export const MessageConatainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.COLORS.SEMANTIC_COLORS_WARNING};
  font-family: ${({theme}) =>  theme.FONT_FAMILY.ROBOTO};
  font-size: 12px;
  margin: 8px 0;
`

export const ErrorIcon = styled(MdErrorOutline)`
  color: ${({theme}) => theme.COLORS.SEMANTIC_COLORS_WARNING};
  font-size: 14px;
  margin-right: 10px;

`

