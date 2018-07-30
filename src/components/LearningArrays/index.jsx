import React, { Component } from 'react'
import '../../App.css'
import _ from 'underscore'

class LearningArrays extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arrayToLoop: ['Welcome! ', 'here ', 'is ', 'my ', 'first ', 'array ', 'Loop'],
    }
  }

  consoleLog = () => {
    console.log('Print in console on onClick')
  }

  render() {
    const { arrayToLoop } = this.state

    return (
      <div>
        <p onClick={this.consoleLog}>This will be click able and will print a console log</p>

        <p>
          { _.map(arrayToLoop, (word, i) => {
              return (
                <span key={i}>{word}</span>
              )
            })
          }
        </p>
      </div>
    )
  }
}

export default LearningArrays
