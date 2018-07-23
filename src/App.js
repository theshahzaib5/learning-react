import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    console.log('Costructer Costructer Costructer')
  }

  componentWillMount() {
    console.log('Component will mount')
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
      <div className="App">
        <header className="App-header">
          <Welcome toggleButton={this.state.toggleButton} text="Welcom to using props, Welcome to React"/>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {this.state.toggleButton  &&
          <p>This should show and hide (a toggle)</p>
        }

        <button onClick={this.toggleButton}>Toggle</button>
      </div>
    )
  }
}

class Welcome extends Component {
  render() {
    const {text, toggleButton} = this.props
    console.log('Parent Component State', toggleButton)

    return (
      <h1 className="App-title">{text}</h1>
    )
  }
}

export default App
