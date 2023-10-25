import React from 'react'
import './App.css'
import Use_Context_A from './Hook_useContext/use_Context_A'


export const UserContext = React.createContext()
function App() {
  return (
    <>
      <div>
        <UserContext.Provider value={"vivek"}>
          <Use_Context_A />
        </UserContext.Provider>
      </div>
    </>
  )
}

export default App

/* input type text value set diffrent name <lable> */
/* checkbox checked :- message you are clicked ! / unchecked message you do't clicked  */
