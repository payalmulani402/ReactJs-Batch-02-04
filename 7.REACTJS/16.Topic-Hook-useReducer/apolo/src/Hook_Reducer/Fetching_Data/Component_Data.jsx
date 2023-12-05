import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'

const Component_Data = () => {

    const [loding , setLoading] = useState(true)
    const [error , setError] = useState('')
    const [post , setPost] = useState({})

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/5`)
        .then(
            response =>{
                setLoading(false)
                setPost(response.data)
                setError('')
            }
        )
        .catch(
            error => {
                setLoading(false)
                setPost({})
                setError(`Something Went Wrong!`)
            }
        )
    } , [])


  return (
    <div>
      {loding ?  'Loading' : post.title}
      {error ? error  : null}
    </div>
  )
}

export default Component_Data
