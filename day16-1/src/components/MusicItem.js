import React from 'react';
import './MusicItem.css'
import {BiChevronUp} from 'react-icons/bi';
import {BiCheck} from 'react-icons/bi';
import {BiChevronDown} from 'react-icons/bi';

const MusicItem = ({item, onOpen}) => {
    return (
        <>
        {/* //값넘길려면 괄호치기 */}
        <tr onClick={()=> onOpen(item.rank)}  >
         
                     <td>{item.rank}</td>
                    <td>
                        <img src={item.poster} width="50" alt=""/>
                    </td>
                    <td>{item.title}</td>
                    <td> {item.singer} </td>
                    <td>
                       {/**/}
                       {item.state === '상승' && <BiChevronUp style={{color:'red'}}/>}
                       {item.state === '유지' && <BiCheck style={{color:'red'}}/>}
                       {item.state === '하강' && <BiChevronDown style={{color:'red'}}/>}
                    </td>
                </tr>
    </>
    );
};

export default MusicItem;
