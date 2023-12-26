import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar"

const Login = () => {

  const login = () =>{
    localStorage.getItem('login' , true)
    navigate('/')
  }

  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem('login');
    if(!login){
      navigate('/')
    }
   });

  return (
    <div>
      <Navbar/>
      <h1>Login Form</h1>
      <form className="flex-col">
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" autoComplete="given-name"/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" autoComplete="new-password"/>
          <button onClick={login}>Login</button>
      </form>
    </div>
  )
}

export default Login
