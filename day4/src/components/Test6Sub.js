import React, { Component } from 'react';
import Test6SubSub from './Test6SubSub';

class Test6Sub extends Component {

    render() {
        const { onName, onAge, onHandle, onSub} = this.props
        return (
            <div>
              <h2>Test6Sub : {onName}/{onAge} </h2>
              <button onClick={onHandle}>확인</button>
              <br/>
          
              <Test6SubSub
                            onName = {onName}
                            onAge = {onAge} 
                            onSub = {onSub} />
            </div>
        );
    }
}

export default Test6Sub;