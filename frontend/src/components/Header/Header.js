import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const Header = () => {
  return (
    <>
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">KeepNotes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
       
        <Nav className="m-auto">
        <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
          </Form>
          </Nav>


          <Nav className="mr-o">
            <Nav.Link href="#home">My Notes</Nav.Link>
            <NavDropdown title="Aditya Kasralkar" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
            <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header;