import React, { Component } from 'react'
import logo from './logo.svg'

import LearningArrays from './components/LearningArrays'
import LearningProps from './components/LearningProps'
import HeaderNav from './components/HeaderNav'
import LearningApi from './components/LearningApi'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggleButton: true,
      userName: 'Shah Zaib',
      profession: 'Front end developer',
      currentTab: 'index'
    }
  }

  toggleButton = () => {
    this.setState({
      toggleButton: !this.state.toggleButton
    })
  }

  handleClick = () => {
    this.setState({
      userName: 'Shahzaib Khalid'
    })
  }

  render() {
    const {toggleButton, userName, profession} = this.state

    return (
      <div>
        <HeaderNav />

        <LearningApi />

        <div className="App">
          <header className="App-header">
            <Welcome toggleButton={this.state.toggleButton} text="Welcom to using props, Welcome to React"/>
            <img src={logo} className="App-logo" alt="logo" />
          </header>

          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          {toggleButton  &&
            <p>This should show and hide (a toggle)</p>
          }

          <button onClick={this.toggleButton}>Toggle</button>

          <p>{userName} - {profession}</p>

          <button onClick={this.handleClick}>Change userName</button>

          <LearningArrays style={{marginBottom: 15,}} />

          <LearningProps style={{marginBottom: 15,}} userName={userName} />
        </div>
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
