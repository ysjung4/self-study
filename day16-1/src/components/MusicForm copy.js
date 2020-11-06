import React, { useEffect, useState }  from 'react';
import './MusicForm.css'


const MusicForm = ({onTitle}) => {

    const [text,setText] = useState('')
    const handleChange = (e) =>{
        setText(e.target.value)
    
    }
    useEffect( ()=> {
        onTitle(text)
    },[text])
    
    return (
        <div className="MusicForm">
        <input type="text"           
        placeholder="음악명을 검색하세요"   
        value={text}   
        onChange={handleChange}  
        />
    </div>
    );
};

export default MusicForm;

 