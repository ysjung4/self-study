import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test6 = () => {
    const [data , setData] = useState({hits:[]})
    const [msg , setMsg ] = useState('css')

    const getData = () => {
        axios.get(`http://hn.algolia.com/api/v1/search?query=${msg}`)
             .then(res => {
                 setData( res.data )
             })
    }
    useEffect( () => {
        getData()
    },[msg])

    return (
        <div>
            <h4>Test6</h4>
            <p>
                <input type="text" value={msg} 
                onChange={(e)=>setMsg(e.target.value)} />
            </p>
            <ul>
                {
                  data && data.hits.map( item => <li key={item.objectID}>
                      {item.title}
                  </li>)      
                }
            </ul>
        </div>
    );
};

export default Test6;