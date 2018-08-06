import React, { Component } from 'react'
import '../../App.css'
import _ from 'underscore'

import {
  Container
} from 'reactstrap'

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
      <Container>
        <p onClick={this.consoleLog}>This will be click able and will print a console log</p>

        <p>
          { _.map(arrayToLoop, (word, i) => {
              return (
                <span key={i}>{word}</span>
              )
            })
          }
        </p>
      </Container>
    )
  }
}

export default LearningArrays
