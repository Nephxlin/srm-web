import React from 'react'
import { ErrorIcon, MessageConatainer } from './style'


type Props = {
  message : string
}
export default function Message({message} : Props) {
  return (
   <MessageConatainer>
    <ErrorIcon/> {message}
   </MessageConatainer>
  )
}
