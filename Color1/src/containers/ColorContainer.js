import React from 'react';
import { connect } from 'react-redux';
import Color from '../components/Color';
import { blue, green, pink, red, yellow } from '../store/modules/color';

const ColorContainer = ({color,red,green,pink,blue,yellow}) => {
    return (
        <div>
            <Color color={color}
            red={red}
            green={green}
            blue={blue}
            pink={pink}
            yellow={yellow}
            />
        </div>
    );
};
//값
const mapStateToProps = (state) => ({
    //이름: state.파일명.상태변수
    color: state.color.color
})
//액션
const mapDispatchToProps = (dispathch) => ({
    red:() => dispathch(red ()),
    green: () => dispathch( green()),
    blue: () => dispathch( blue()),
    pink: () => dispathch( pink()),
    yellow: () => dispathch( yellow()),
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)
(ColorContainer);
