import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Data_Fetching_3 = () => {
  const [posts, setPosts] = useState({})
  const [id, setId] = useState(1)
  const [idClick, setIdClick] = useState(1)

  const handleClick = () => {
    setIdClick(id)
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idClick}`)
      .then(res => {
        console.log(res);
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [idClick])

  return (
    <div>
      <div className='flex'>
        <input className='button-input' type="text" value={id} onChange={e => setId(e.target.value)} />
        <button className='button-2' type='button' onClick={handleClick}>Post Fetch</button>
      </div>
      <div className='text-space'>{posts.title}</div>
      {/* <ul> 
              {
                  posts.map(post => (<li key={post.id}>{post.title}</li>))
              }
          </ul> */}
    </div>
  )
}

export default Data_Fetching_3
