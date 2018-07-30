import React, { Component } from 'react'
import '../../App.css'
import _ from 'underscore'

class LearningProps extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nameDisplayed: 'First Name',
    }
  }



  render() {
    const { nameDisplayed } = this.state
    const { userName } = this.props

    return (
      <div>
        <p>{nameDisplayed}</p>

        <p>{userName ? userName : 'N/A'}</p>
      </div>
    )
  }
}

export default LearningProps
