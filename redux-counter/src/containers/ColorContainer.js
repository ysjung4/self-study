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
const mapStateToProps = (state) => ({
color : state.color.color
})
const mapDispatchToProps = (dispatch) => ({
red: () => dispatch( red() ),
pink:() => dispatch( pink() ),
blue: () => dispatch( blue( ))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )
    (ColorContainer);