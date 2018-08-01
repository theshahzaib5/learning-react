import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'underscore'
import Select from 'react-select'

import { fetchInfo } from '../../actions/actionsInfo'

import {
  Container,
  Table,
  FormGroup,
  Label,
  Row,
  Col,
} from 'reactstrap'

class LearningApi extends Component {
  constructor(props){
    super(props)

    this.state = {
      selectedOption: [],
    }
  }

  componentDidMount() {
    // this is for fetching json from a url
    this.props.fetchInfo()
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption ? selectedOption : ''})
  }

  render() {
    const {props: {users}} = this
    const { selectedOption } = this.state

    if (users.length === 0)
      return false
    const selectList = _.map(users, (item, i) => { return {value: item.name, label: item.name }})

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
            { _.map(users, (item, i) => {
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

function mapStateToProps(state) {
  return {
    users: state.info
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInfo: () => dispatch(fetchInfo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearningApi)
