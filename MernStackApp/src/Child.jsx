import React from 'react'
import GrandChild from './GrandChild'

function Child({name,children}) {
  return (
    
        <GrandChild name={name}> </GrandChild>

  )
}

export default Child