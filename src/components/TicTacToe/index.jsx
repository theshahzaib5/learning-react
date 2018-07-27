import React, { Component } from 'react'
import logo from '../../logo.svg'
import '../../App.css'

class TicTacToe extends Component {
  consoleLog = () => {
    console.log('Print in console on onClick')
  }
  
  render() {
    return (
      <div onClick={this.consoleLog}>
        here is my first separate component
      </div>
    )
  }
}

export default TicTacToe
