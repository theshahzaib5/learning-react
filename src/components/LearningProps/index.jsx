import React, { Component } from 'react'
import '../../App.css'

class LearningProps extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nameDisplayed: 'First Name',
    }
  }
  
  componentWillReceiveProps(nextProps) {
    console.log('props will displayed here', nextProps)
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
