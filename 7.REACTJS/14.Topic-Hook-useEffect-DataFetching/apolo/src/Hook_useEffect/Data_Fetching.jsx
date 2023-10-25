import React from 'react'
import { useEffect, useState } from 'react'

const Data_Fetching = () => {

    const [posts, setPosts] = useState([])

    async function fetchData() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    useEffect(() => {
        fetchData();
    } , [])

    return (
        <div>
            <ul>
                {
                    posts.map(post => (<li className='text-space' key={post.id}>{post.id}</li>))
                }
            </ul>
        </div>
    )
}

export default Data_Fetching
