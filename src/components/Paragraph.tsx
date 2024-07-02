import React from 'react'
type ParaProps={
    text:string
}
const Paragraph = ({text}:ParaProps) => {
  return (
   <><p>{text}</p></>
  )
}

export default Paragraph