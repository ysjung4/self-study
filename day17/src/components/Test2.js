import React, { useEffect, useState } from 'react';
import axios from 'axios'


const Test2 = () => {
    const [post,setPost] = useState([])

    const getData1 = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            setPost (res.Data)
        })
    }
    const getData2 = async() => {
        const res =await axios.get('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json() 
    setPost(data)
       
    }

    const getData3 = async() => {
        const res =await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
            setPost (data)
       
    }

    const getData = () => {
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then (res => res.json())
       .then (data=> setPost(data))
    }

    useEffect( ()=>{
        getData()
    },[])
    return (
        <div>
            <h4>02:외부데이터</h4>
            <ul>
                { post && post.map( item => <li key={item.id}>
                    {item.id}/{item.title}
                </li>
                
                )}
            </ul>
        </div>
    );
};

export default Test2;