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

const mapStateToProps = (state) => ({
    cnt : state.counter.cnt,
    color : state.color.color
})
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(increment() ),
    decrement: () => dispatch(decrement() )
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);