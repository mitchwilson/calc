import React from 'react'
import './Header.css'

export default class Header extends React.Component {
  render() {
    return(
      <header className="App-header">
        <h1>{this.props.data}</h1>
      </header>
    )
  }
}
