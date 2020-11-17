import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test5 = () => {
    const [post, setPost] = useState({})
    const [id , setId] = useState(3)
    const [loading , setLoading] = useState(true)
    const [ error , setError] = useState('')

    const getData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
             .then(res => {
                 setPost( res.data )
                 setLoading( false )
                 setError('')
             })
             .catch( error => {
                 setPost({})
                 setLoading( true )
                 setError('데이터를 찾을수 없습니다. ')
             })
    }
    useEffect( () => {
        getData()
    },[])

    return (
        <div>
            <h4> Test5 </h4>
            <h2>
                { loading ? "데이터를 로딩중...": post.title }
            </h2>
            <p>
                { error ? error : null }
            </p>
        </div>
    );
};

export default Test5;