import React from 'react';
import Test3Sub from './Test3Sub';
import Wrap from './Wrap';

const Test4 = (props) => {
    return (
        <div>
            <Wrap>
                <Test3Sub/>
                <Test3Sub/>
            </Wrap>
        </div>
    );
};

export default Test4;