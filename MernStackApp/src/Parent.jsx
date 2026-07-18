import React from 'react'
import Child from './Child'

function Parent({name}) {
  return (
   <Child name={name}></Child>
  )
}

export default Parent