import React from 'react'
import { AvatarContainer } from './style'


type AvatarProps = {
  image : string
}

export default function Avatar( {image} : AvatarProps) {
  return (
    <AvatarContainer imageUrl={image} data-testid="avatar" />
  )
}
