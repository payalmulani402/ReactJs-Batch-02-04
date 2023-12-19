import { useEffect } from 'react'
import {PropTypes} from 'react-dom'
import {useNavigate} from 'react-router-dom'

const ProtectedRoute = (props) => {

     const {Component} = props
     const navigate = useNavigate()

     useEffect(() => {
      let login = localStorage.getItem('login')
      if(!login){
        navigate('/login')
      }
     })

     ProtectedRoute.propTypes = {
          Component:PropTypes.Function
     }

  return (
    <div>

      <Component/>
    </div>
  )
}

export default ProtectedRoute
