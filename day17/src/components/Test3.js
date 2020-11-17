
import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Test3 = () => {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    
    const getData1 = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then (res => {
            setPost(res.data)
        })
    }
    const getData2 = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then (res =>  res.json())
        .then (data => setPost(data))
    
    
    }
    const getData3 = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/3')
        setPost (res. data)

    }
    const getData = async() => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await res.json()
        setPost(data)
    
    
    }

    useEffect( ()=> {
        getData()
    },[id])//id가 변경할때마다 업데이트 //마운트
    return (
        <div>
           <h4>03: 외부데이터</h4> 
           <input type="text" value={id}onChange={ (e) => setId(e.target.value)} />
           <h2>  {post.id}/ {post.title}</h2>
        </div>
    );
};

export default Test3;