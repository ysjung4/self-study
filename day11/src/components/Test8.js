import React, { Component } from 'react';
import styled from 'styled-components'

class Test8 extends Component {
    render() {
        return (
            <div>
                <Container bg="pink">
                    <Box width="200px" height="20px">test1</Box>
                    <Box width="300px" height="30px">test1</Box>
                    <Box width="400px" height="40px">test1</Box>
                    <Box width="500px" height="50px">test1</Box>
                </Container>
            </div>
        );
    }
}

export default Test8;

const Container = styled.div`
    width:500px; height:300px; border:1px solid #000; margin:20px;
    // background-color : ${props => props.bg}
    background-color : ${props => {
        return props.bg
    }};
`
const Box = styled.article`
    background: skyblue; margin-bottom:15px;
    width : ${props => props.width};
    height : ${props => props.height ? props.height : '30px'};
`