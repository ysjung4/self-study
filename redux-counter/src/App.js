import React from 'react';
import ColorContainer from './containers/ColorContainer';
import CounterContainer from './containers/CounterContainer';

const App = () => {
  return (
    <div>
        <CounterContainer/>
        <hr/>
        <ColorContainer/>
        <hr/>
        <ChangeContainer/>
    </div>
  );
};

export default App;