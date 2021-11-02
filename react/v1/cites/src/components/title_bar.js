import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

class TitleBar extends React.Component {

  render() {
      return (
         <div>
              <Navbar bg="light" variant="light" expand="lg" sticky="top">
                <Container>
                <Navbar.Brand href="#home">{this.props.nb_title}</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="#home">{this.props.option[0]}</Nav.Link>
                  <Nav.Link href="#features">{this.props.option[1]}</Nav.Link>
                  <Nav.Link href="#pricing">{this.props.option[2]}</Nav.Link>
                </Nav>
                </Container>
              </Navbar>
         </div>
      );
   }
}

export default TitleBar;