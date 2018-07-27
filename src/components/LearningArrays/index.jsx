import React, { Component } from 'react'
import '../../App.css'
import _ from 'underscore'

class LearningArrays extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arrayToLoop: ['Welcome! ', 'here ', 'is ', 'my ', 'first ', 'array ', 'Loop']
    }
  }

  consoleLog = () => {
    console.log('Print in console on onClick')
  }

  render() {
    return (
      <div onClick={this.consoleLog}>
        <p>here is my first separate component</p>

        <div>
          { _.map(this.state.arrayToLoop, (word, i) => {
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
