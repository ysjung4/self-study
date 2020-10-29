import React, { Component } from 'react';

class Test6SubSub extends Component {

    render() {
        const { onName, onAge, onSub} = this.props
        return (
            <div>
            <h3>Test6SubSub : {onName}/ {onAge}</h3>
            <button onClick={onSub}>확인</button>
            </div>
                           
        );
    }
}

export default Test6SubSub;