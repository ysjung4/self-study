import React, { useEffect, useState }  from 'react';
import './MusicForm.css'


const MusicForm = ({onTitle}) => {

    const [text,setText] = useState('')
    const handleChange = (e) =>{
        setText(e.target.value)
    
    }
    
    const handleSubmit = (e)=> {
        e.preventDefault()
        onTitle(text)
    }
    return (
        <form className="MusicForm" onSubmit={handleSubmit}>
        <input type="text"           
        placeholder="음악명을 검색하세요"   
        value={text}   
        onChange={handleChange}  
        />
    </form>
    );
};

export default MusicForm;

 