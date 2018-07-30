import React, { Component } from 'react'
import logo from './logo.svg'
import Select from 'react-select'

import LearningArrays from './components/LearningArrays'
import LearningProps from './components/LearningProps'
import HeaderNav from './components/HeaderNav'

import './App.css'

import {
  Container,
  FormGroup,
  Label,
} from 'reactstrap'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggleButton: true,
      userName: 'Shah Zaib',
      profession: 'Front end developer',
      selectedOption: null,
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

  handleChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption ? selectedOption : '' })
  }

  render() {
    const {toggleButton, userName, profession, selectedOption} = this.state

    return (
      <div>
        <HeaderNav />

        <Container>
          <FormGroup>
            <Label>Choose One</Label>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
              isMulti={true}
            />
          </FormGroup>
        </Container>

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
