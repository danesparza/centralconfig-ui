//  React and reactstrap
import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

//  Stylesheets & images
import './../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class NavBar extends Component {  

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,     
    };    
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    
    return (
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="#/">CentralConfig</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#/settings">Settings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/cagedtornado/centralconfig">Help</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }

}

export default NavBar;