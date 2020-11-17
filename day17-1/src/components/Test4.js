import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test4 = () => {
    const [id, setId] = useState(1)
    const [post, setPost] = useState({})
    const [ num , setNum ] = useState(1)

    const getData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
             .then( res => {
                 setPost( res.data )
             })
    }
    useEffect( () => {
        getData()
    },[num])

    const handleClick = () => {
        setNum( id )
    }
    return (        
        <div>
            <h4>04 </h4>
            <p>
                <input type="text" value={id} 
                onChange={(e)=>setId(e.target.value)}/> 
                <button onClick={handleClick}>검색</button>
            </p>
            <h2> {post.id} / {post.title} </h2>
        </div>
    );
};

export default Test4;