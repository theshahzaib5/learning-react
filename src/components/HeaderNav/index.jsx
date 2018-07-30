import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap'

import '../../App.css'

class HeaderNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  toggleNav = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Learning React</NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>Data Views</DropdownToggle>

                <DropdownMenu>
                  <div>
                    <NavLink href="/components/">Components</NavLink>
                  </div>

                  <div>
                    <NavLink href="/components/">Components</NavLink>
                  </div>

                  <div>
                    <NavLink href="/components/">Components</NavLink>
                  </div>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default HeaderNav
