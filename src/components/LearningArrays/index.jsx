import React, { Component } from 'react'
import '../../App.css'
import _ from 'underscore'

class LearningArrays extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arrayToLoop: ['Welcome! ', 'here ', 'is ', 'my ', 'first ', 'array ', 'Loop'],
      userName: 'Shah Zaib',
      profession: 'Front end developer'
    }
  }

  consoleLog = () => {
    console.log('Print in console on onClick')
  }

  handleClick = () => {
    this.setState({
      userName: 'Shahzaib Khalid'
    })
  }

  render() {
    const { arrayToLoop, userName, profession } = this.state

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

        <p>{userName} - {profession}</p>

        <button onClick={this.handleClick}>Change userName</button>
      </div>
    )
  }
}

export default LearningArrays
