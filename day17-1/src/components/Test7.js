import React, { useState } from 'react';
import Image from './Img'
import styled from 'styled-components'

const Test7 = () => {
    const [data, setData] = useState(Image)
    const [ num , setNum ] = useState(0)

    const handleClick = (id)  => {
        setNum(id)
    }

    return (
        <Gallery>
            <ul>
                {data.map((item,index)=> 
                <li key={index} onClick={() => handleClick(index)}>
                    <img src={item} alt="" />
                </li>)}
            </ul>
            <div>
                <img src={data[num]} alt="" />
            </div>
        </Gallery>
    );
};
export default Test7;
const Gallery = styled.div`
    ul {
        display:flex;
        li{
            list-style:none; 
            img {
                width:150px; height:100px; cursor: pointer;
                transition:0.3s;
                &:hover {
                    opacity:0.7
                }
            }
        }
    }
    div {
        img {
            width:600px; 
        }
    }
`