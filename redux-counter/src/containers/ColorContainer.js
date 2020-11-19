import React from 'react';
import { connect } from 'react-redux';
import { blue, pink, red } from '../store/modules/color';
import Color from '../components/Color';

//yarn build 
const ColorContainer = ({color, red,pink,blue}) => {
    return (
        <div>
        <Color 
        color={color}
        red={red}
        pink={pink}
        blue={blue}/>
        </div>
    );
};

export default connect(
    (state) => ({
        color : state.color.color
        })
    ,{red,pink,blue})
    (ColorContainer);