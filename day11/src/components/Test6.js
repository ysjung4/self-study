import React, { Component } from 'react';
import styled from 'styled-components'

class Test6 extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Box1>안녕하세요</Box1>
                    <Box2>안녕하세요</Box2>
                    <Button>
                        <span>확인</span>
                    </Button>
                </Container>
            </div>
        );
    }
}

export default Test6;

// const 이름 = styled.태그명`속성:값`
const Container = styled.div`
    width:600px; height:400px; margin:0 auto; border:1px solid #000;
`
const Box1 = styled.article``
const Box2 = styled.section``
const Button = styled.button``
