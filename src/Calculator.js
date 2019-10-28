import React from 'react'

export default class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.parseValue(props.data)
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  parseValue(str='') {
    let args = str.split(',')
    let arg1 = Number(args[0]) || 0
    let arg2 = Number(args[1]) || 0
    if(args.length > 2) {
      throw new Error('Cannot add more than 2 numbers')
    } else {
      return arg1 + arg2
    }
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  handleClick(e) {
    this.setState({
      value: this.parseValue(document.getElementById('display').value)
    })
  }
  render() {
    return (
      <main>
        <p><input onChange={this.handleChange} id="display" type="text" value={this.state.value} /></p>
        <p><input onClick={this.handleClick} id="add" type="button" value="Add" /></p>
      </main>
    )
  }
}
