import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

class TitleBar extends React.Component {

  render() {
      return (
         <div>
              <Navbar bg="light" variant="light" expand="sm" sticky="top">
                <Container fluid>
                <Navbar.Brand href="#home"  style={{color:"red"}}>{this.props.nb_title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">{this.props.option[0]}</Nav.Link>
                  <Nav.Link href="#features">{this.props.option[1]}</Nav.Link>
                  <Nav.Link href="#pricing">{this.props.option[2]}</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
              </Navbar>
         </div>
      );
   }
}

export default TitleBar;