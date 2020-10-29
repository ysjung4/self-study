import React, { Component } from 'react';
import styled, {css} from 'styled-components'

class Test9 extends Component {
    render() {
        return (
            <div>
                <Container bg>
                    <Box width="300px">버튼</Box>
                    <Box>버튼</Box>
                    <Box margin padding>버튼</Box>
                    <Box width="200px">버튼</Box>
                </Container>
                <Container>
                    <Box>버튼</Box>
                    <Box color="true">버튼</Box>
                    <Box color="true">버튼</Box>
                </Container>
            </div>
        );
    }
}

export default Test9;


const Container = styled.div`
    width:500px; height:300px; margin:20px;
    background: ${props => props.bg && 'lime'};
    background: ${props => props.bg || 'yellow'}
`
const Box = styled.p`
    width:100%; background:pink;
    width : ${props => props.width};
    padding : ${props => props.padding && '20px'};
    margin : ${props => props.color && '30px'};
    ${
        props => props.color && css`
            transition: 0.5s;
            background: red;
            cursor : pointer;
            width : 400px;
            &:hover {
                width: 800px;
                background: blue;
            }
        `
    }
`