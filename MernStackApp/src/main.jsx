import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import JSX from './App.jsx'
import MernHistory from './MernHistory.jsx'
import Count from './Count.jsx'
import Parent from './Parent.jsx'
import userContext from './UserContext.jsx'
import Forms from './Forms.jsx'
import Events from './Events.jsx'
import Light from './Light.jsx'
import API from './API.jsx'
import DB_connect from './DB_connect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <JSX /> */}
    {/* <MernHistory name={10}/> */}
    {/* <MernHistory name="Mern"/> */}

    {/* <Forms /> */}
    {/* <Count/> */}
    {/* <userContext.Provider value="Nithya">
    <Parent/>
    </userContext.Provider> */}
    {/* <Events/> */}
    {/* <Light /> */}
    {/* <API /> */}
    <DB_connect />

  </StrictMode>,
)
