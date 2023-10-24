import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Data_Fetching_2 = () => {

    const [posts, setPosts] = useState([]);
    const [id , setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res);
                setPosts(res.data)
            })
            .catch(err =>{
                console.log(err);
            })
    } , [id])

    return (
        <div>
            <input className='button-input' type="text" value={id} onChange={e => setId(e.target.value)} />
            <div>{posts.title}</div>
            {/* <ul> 
                {
                    posts.map(post => (<li key={post.id}>{post.title}</li>))
                }
            </ul> */}
        </div>
    )
}

export default Data_Fetching_2
