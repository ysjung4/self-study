import React from 'react';
const style={
    width:600, border:'2px solid #000'
}

const Wrap = ({children}) => {
    return (
        <div style={style}>
            {children}
        </div>
    );
};

export default Wrap;