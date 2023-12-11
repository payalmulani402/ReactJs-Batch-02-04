import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const params = useParams();
    const {name} = params
    console.log(name);

  return (
    <div>
        <h1 className='text-6xl'>This is {name} Page</h1>
    </div>
  )
}

export default User
