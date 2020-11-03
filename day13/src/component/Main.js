import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components'
import Test1 from './Test1';
import Test10 from './Test10';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';
import Test5 from './Test5';
import Test6 from './Test6';
import Test7 from './Test7';
import Test8 from './Test8';
import Test9 from './Test9';

const Main = () => {
    return (
        <div>
            <Nav>
                <ul>
                    <li><Link to="/test1">Test1</Link></li>
                    <li><Link to="/test2">Test2</Link></li>
                    <li><Link to="/test3">Test3</Link></li>
                    <li><Link to="/test4">Test4</Link></li>
                    <li><Link to="/test5">Test5</Link></li>
                    <li><Link to="/test6">Test6</Link></li>
                    <li><Link to="/test7">Test7</Link></li>
                    <li><Link to="/test8">Test8</Link></li>
                    <li><Link to="/test9">Test9</Link></li>
                    <li><Link to="/test10">Test10</Link></li>
                </ul>

            </Nav>
            <Route path="/test1" component={Test1}/>
            <Route path="/test2" component={Test2}/>
            <Route path="/test3" component={Test3}/>
            <Route path="/test4" component={Test4}/>
            <Route path="/test5" component={Test5}/>
            <Route path="/test6" component={Test6}/>
            <Route path="/test7" component={Test7}/>
            <Route path="/test8" component={Test8}/>
            <Route path="/test9" component={Test9}/>
            <Route path="/test10" component={Test10}/>
        </div>
    );
};

export default Main;
const Nav = styled.nav`
padding:15px 15px;
border-bottom:2px solid #dcdcdc;
margin-bottom:30px;
ul{
    display:flex;
    li{
        list-styled:none;
        margin-right:20px;
        a{
            text-decoration:none;
            color:#333;
            font-size:18px;
        }
       
    }
}`