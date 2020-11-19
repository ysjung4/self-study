import React from 'react';
import ChangeContainer from './containers/ChangeContainer';
import ColorContainer from './containers/ColorContainer';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
        <CounterContainer/>
        <hr/>
        <ColorContainer/>
        <hr/>
        <ChangeContainer/>
        <hr/>
        <TodosContainer/>
    </div>
  );
};

export default App;