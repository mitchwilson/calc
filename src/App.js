import React from 'react';
import Header from './Header'
import Calculator from './Calculator'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header data="Calculator" />
      <Calculator />
    </div>
  );
}

export default App;
