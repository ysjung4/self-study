import React from 'react';
import { Link, Route } from 'react-router-dom';
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';
import Test5 from './Test5';
import Test6 from './Test6';


const Main = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/test1">Test1</Link></li>
                    <li><Link to="/test2">Test2</Link></li>
                    <li><Link to="/test3">Test3</Link></li>
                    <li><Link to="/test4">Test4</Link></li>
                    <li><Link to="/test5">Test5</Link></li>
                    <li><Link to="/test6">Test6</Link></li>                   
                </ul>
            </nav>

            <Route path="/test1" component={Test1} />
            <Route path="/test2" component={Test2} />
            <Route path="/test3" component={Test3} />
            <Route path="/test4" component={Test4} />
            <Route path="/test5" component={Test5} />
            <Route path="/test6" component={Test6} />           
            
        </div>
    );
};

export default Main;