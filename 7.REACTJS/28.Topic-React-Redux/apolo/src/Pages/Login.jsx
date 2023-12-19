import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar"
const Login = () => {

  const login = () =>{
    localStorage.getItem('login'  , true)
  }

  const navigate = useNavigate

  useEffect(() => {
    let login = localStorage.getItem('login')
    if(login){
      navigate('/')
    }
   })

  return (
    <div>
      <Navbar/>
      <h1>Login Form</h1>
      <form>
          <label>UserName</label>
          <input type="text" />
          <label>Password</label>
          <input type="password" />
          <button onClick={login}>Login</button>
      </form>
    </div>
  )
}

export default Login
