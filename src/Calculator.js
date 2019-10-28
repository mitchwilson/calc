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
    return str.split(/,|\\n/).reduce((accumulator, currentValue)=>{
      let a = Number(accumulator)
      let c = Number(currentValue)
      if(isNaN(a)) a = 0
      if(isNaN(c)) c = 0
      return a + c
    }, 0)
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
