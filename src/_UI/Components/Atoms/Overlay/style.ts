import styled from "styled-components";


type OverlayStyleProps = {
  opacity ?: number
}

export const OverlayContainer = styled.div<OverlayStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 8;
    width: 100%;
    height: 100vh;
    top : 0;
    background: rgba(38, 50, 56, 0.2);
    left: 0;
    right: 0;
    opacity: ${props => props.opacity};
    transition: all 0.3s;

`


