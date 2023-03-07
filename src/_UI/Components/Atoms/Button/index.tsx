import { ButtonHTMLAttributes, ReactElement } from "react";
import { ButtonConatainer, ButtonStyleProps, IconWrapper } from "./style";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement & ButtonStyleProps> {
    text : string
    borderColor?:  string
    backgroundColor : string
    textColor : string
    showIcon? : boolean
    icon? : ReactElement
}

export default function Button({text, borderColor, backgroundColor, textColor, showIcon = false,  icon,  ...rest} : Props) {
  return (
    <ButtonConatainer 
      border={borderColor} 
      background={backgroundColor}
      color={textColor}
      {...rest}>
      {text}
      {showIcon && <IconWrapper>{icon} </IconWrapper>}
    </ButtonConatainer>
  )
}
