import styled from "styled-components";


type AvatarStyleProps = {
  imageUrl : string
}

export const AvatarContainer = styled.div<AvatarStyleProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: url(${ props => props.imageUrl });
`