import React, { ReactNode } from 'react'
import { OverlayContainer} from './style'

interface OverlayProps {
  fade : number
  children : ReactNode
}

export default function Overlay( {fade = 0 , children} : OverlayProps) {
  return (
      <OverlayContainer opacity={fade} data-testid="overlay">
        {children}
      </OverlayContainer>
  )
}
