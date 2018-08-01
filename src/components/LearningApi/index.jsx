import React, { Component } from 'react'
import _ from 'underscore'
import Select from 'react-select'

import {
  Container,
  Table,
  FormGroup,
  Label,
  Row,
  Col,
} from 'reactstrap'

import '../../App.css'

class LearningApi extends Component {
  constructor(props){
    super(props)

    this.state = {
      selectedOption: [],
      // initializing of json data
      jsonList: [],
    }
  }

  componentDidMount() {
    // this is for fetching json from a url
    fetch('http://www.json-generator.com/api/json/get/coOfPEdCGa?indent=2', {
      method: 'GET'
    })
    // this will get the response from json file url
    .then(response => response.json())
    // this will print json in console.
    .then(json => {
      console.log('json json json', json)
      this.setState({
        jsonList: json,
      })
    })
    // if there are any errors .catch will through an error on console and json will not printed there untill the error is removed
    .catch(error => {
      console.log('error error error', error)
    })
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption ? selectedOption : ''})
  }

  render() {
    let self = this
    const { jsonList, selectedOption } = self.state
    const selectList = _.map(jsonList, (item, i) => { return {value: item.name, label: item.name }})

    return (
      <Container className="text-left" style={{paddingTop: 20}}>
        <Row>
          <Col sm='4'>
            <FormGroup>
              <Label>Choose One</Label>
              <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={selectList}
              />
            </FormGroup>
          </Col>
        </Row>

        <Table bordered striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Company</th>
              <th>Friends</th>
            </tr>
          </thead>

          <tbody>
            {/* Loop to list json items */}
            { _.map(jsonList, (item, i) => {
                if(selectedOption.length <= 0 || item.name === selectedOption.value) {
                  return (
                    <tr key={item.name}>
                      <td>{i}</td>
                      <td>{item.name ? item.name : 'N/A'}</td>
                      <td>{item.age ? item.age : 'N/A'}</td>
                      <td>{item.address ? item.address : 'N/A'}</td>
                      <td>{item.company ? item.company : 'N/A'}</td>
                      <td>{item.friends.name ? item.friends.name : 'N/A'}</td>
                    </tr>
                  )
                }
              })
            }
          </tbody>
        </Table>
      </Container>
    )
  }
}

export default LearningApi
