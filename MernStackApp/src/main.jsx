import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import JSX from './App.jsx'
import MernHistory from './MernHistory.jsx'
import Count from './Count.jsx'
import Parent from './Parent.jsx'
import userContext from './UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <JSX /> */}
    {/* <MernHistory name={10}/> */}
    {/* <MernHistory name="Mern"/> */}

    <Count/>
    <userContext.Provider value="Nithya">
    <Parent/>
    </userContext.Provider>
  </StrictMode>,
)
