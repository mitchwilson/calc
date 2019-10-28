import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from './Calculator'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Calculator />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('add returns 20 for input 20', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Calculator data="20"/>, div, ()=>{
    expect(div.querySelector("input").value).toBe("20")
    ReactDOM.unmountComponentAtNode(div)
  })
})

it('add returns 1 for input 1,5000', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Calculator data="1,5000"/>, div, ()=>{
    expect(div.querySelector("input").value).toBe("5001")
    ReactDOM.unmountComponentAtNode(div)
  })
})

it('add returns 1 for input 4,-3', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Calculator data="4,-3"/>, div, ()=>{
    expect(div.querySelector("input").value).toBe("1")
    ReactDOM.unmountComponentAtNode(div)
  })
})

it('add returns 1 for input 1,0', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Calculator data="1,0"/>, div, ()=>{
    expect(div.querySelector("input").value).toBe("1")
    ReactDOM.unmountComponentAtNode(div)
  })
})

it('add returns 1 for input 1,', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Calculator data="1,"/>, div, ()=>{
    expect(div.querySelector("input").value).toBe("1")
    ReactDOM.unmountComponentAtNode(div)
  })
})

it('add returns 1 for input ,1', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Calculator data=",1"/>, div, ()=>{
    expect(div.querySelector("input").value).toBe("1")
    ReactDOM.unmountComponentAtNode(div)
  })
})

it('add returns 5 for input 5,tyty', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Calculator data="5,tyty"/>, div, ()=>{
    expect(div.querySelector("input").value).toBe("5")
    ReactDOM.unmountComponentAtNode(div)
  })
})