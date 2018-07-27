import React, { Component } from 'react'
import '../../App.css'

class LearningArrays extends Component {
  consoleLog = () => {
    console.log('Print in console on onClick')
  }

  render() {
    const arrayToLoop = ['Welcome! ', 'here ', 'is ', 'my ', 'first ', 'array ', 'Loop']
    var arrayLoopRender = []

    arrayToLoop.forEach(function(word, i) {
      arrayLoopRender.push(
        <span key={i}>{word}</span>
      )
    })

    return (
      <div onClick={this.consoleLog}>
        here is my first separate component

        <p>{arrayLoopRender}</p>
      </div>
    )
  }
}

export default LearningArrays
