import React, { Component } from 'react'
import logo from '../../logo.svg'
import '../../App.css'

class TicTacToe extends Component {
  constructor(props) {
    super(props)

    console.log('Costructer Costructer Costructer')
  }

  componentWillMount() {
    console.log('Component will mount')
  }

  componentDidMount() {
    console.log('Component did mount calls when mounted')
  }

  state = {
    toggleButton: true,
  }

  toggleButton = () => {
    this.setState({
      toggleButton: !this.state.toggleButton
    })
  }

  render() {
    return (
      <div>
        here is my first separate component
      </div>
    )
  }
}

export default TicTacToe
