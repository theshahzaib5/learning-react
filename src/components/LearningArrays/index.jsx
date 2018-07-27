import React, { Component } from 'react'
import '../../App.css'
import _ from 'underscore'

class LearningArrays extends Component {
  consoleLog = () => {
    console.log('Print in console on onClick')
  }

  render() {
    const arrayToLoop = ['Welcome! ', 'here ', 'is ', 'my ', 'first ', 'array ', 'Loop']

    return (
      <div onClick={this.consoleLog}>
        <p>here is my first separate component</p>

        <div>
          { _.map(arrayToLoop, (word, i) => {
              return (
                <span key={i}>{word}</span>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default LearningArrays
