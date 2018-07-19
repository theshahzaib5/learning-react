import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Welcome text="Welcom to using props, Welcome to React"/>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

class Welcome extends Component {
  render() {
    return (
      <h1 className="App-title">{this.props.text}</h1>
    )
  }
}

export default App
