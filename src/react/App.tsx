import React from 'react';
import usePlight from '../lib';

const App = () => {
  const state = usePlight({ x: 0});
  return <button onClick={() => ++state.x}>Increment: "{state.x}"</button>
};

export default App;
