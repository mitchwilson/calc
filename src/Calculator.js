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
    let customDelimiter = ''
    if(str.indexOf('//[')===0) {
      var pieces = str.split('\\n')
      var delimiterString = pieces[0]
      var contentString = pieces[1]
      var matches = delimiterString.split("[")
      var filtered = matches.filter((match)=>{
        return match !== "//" && match.length > 0
      })
      var delimiters = filtered.map((match)=>{
        return match.slice(0, match.length-1)
      })
      str = contentString
      customDelimiter = "|\\" + delimiters.join("|\\")
    } else if (str.indexOf('//')===0) {
      customDelimiter = '|'+str[2]
      str = str.slice(3)
    }
    let arr = str.split(new RegExp(',|\\\\n'+customDelimiter))
    let negatives = arr.filter((str)=>{
      return Number(str) < 0
    })
    if(negatives.length) {
      throw new Error('Cannot accept negative numbers: ' + negatives.join(','))
    } else {
      return arr.reduce((accumulator, currentValue)=>{
        let a = Number(accumulator)
        let c = Number(currentValue)
        if(isNaN(a)) a = 0
        if(isNaN(c)) c = 0
        if(c > 1000) c = 0
        return a + c
      }, 0)
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
