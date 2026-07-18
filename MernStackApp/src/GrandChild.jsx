import React, { useContext } from 'react'
import userContext from './UserContext.jsx'
function GrandChild() {
    const name = useContext(userContext);
  return (
   <h1 style={{color:"red"}}>GrandChild: {name}</h1>
  )
}

export default GrandChild