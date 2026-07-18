import React, { useContext } from 'react'
import userContext from './UserContext.jsx'
function GrandChild() {
    const name = useContext(userContext);
  return (
   <div>GrandChild: {name}</div>
  )
}

export default GrandChild