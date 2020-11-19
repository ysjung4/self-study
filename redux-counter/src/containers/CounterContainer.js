import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { decrement, increment } from '../store/modules/counter';

const CounterContainer = ({cnt,increment,decrement,color}) => {
    return (
        <div>
            <Counter
            cnt ={cnt}
            increment={increment}
            decrement={decrement}
            color={color}/>
        </div>
    );
};

export default connect(
    (state) => ({
        cnt : state.counter.cnt,
        color : state.color.color
    }),{increment,decrement}
  
  
)(CounterContainer);