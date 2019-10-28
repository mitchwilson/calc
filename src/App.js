import React from 'react';
import Header from './Header'
import Calculator from './Calculator'
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header data="Calculator" />
        <Calculator data="10,1" />
      </div>
    )
  }
}
