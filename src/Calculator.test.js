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

it('add returns 5 for input 5,tyty,5', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Calculator data="5,tyty,5"/>, div, ()=>{
    expect(div.querySelector("input").value).toBe("10")
    ReactDOM.unmountComponentAtNode(div)
  })
})

it('add returns 78 for input 1,2,3,4,5,6,7,8,9,10,11,12', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Calculator data="1,2,3,4,5,6,7,8,9,10,11,12"/>, div, ()=>{
    expect(div.querySelector("input").value).toBe("78")
    ReactDOM.unmountComponentAtNode(div)
  })
})

it('support newline character as alternative delimiter', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Calculator data="1\n2,3"/>, div, ()=>{
    expect(div.querySelector("input").value).toBe("6")
    ReactDOM.unmountComponentAtNode(div)
  })
})

it('add returns 1 for input 1,5000', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Calculator data="1,5000"/>, div, ()=>{
    expect(div.querySelector("input").value).toBe("1")
    ReactDOM.unmountComponentAtNode(div)
  })
})

it('add returns 8 for input 2,1001,6', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Calculator data="2,1001,6"/>, div, ()=>{
    expect(div.querySelector("input").value).toBe("8")
    ReactDOM.unmountComponentAtNode(div)
  })
})

it('support custom delimiter, //#\n2#5 will return 7; //,\n2,ff,100 will return 102', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Calculator data="//#\n2#5"/>, div, ()=>{
    expect(div.querySelector("input").value).toBe("7")
    ReactDOM.unmountComponentAtNode(div)
  })
})

it('support multi-character custom delimiter, //[---]\n11---22---33 will return 66', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Calculator data="//[---]\n11---22---33"/>, div, ()=>{
    expect(div.querySelector("input").value).toBe("66")
    ReactDOM.unmountComponentAtNode(div)
  })
})

it('support a list of multi-character custom delimiters, //[---][+][%]\n10---10+10%10 will return 40', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Calculator data="//[---][+][%]\n10---10+10%10"/>, div, ()=>{
    expect(div.querySelector("input").value).toBe("40")
    ReactDOM.unmountComponentAtNode(div)
  })
})
