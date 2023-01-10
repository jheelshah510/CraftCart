import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import logo from '../CraftCart.png'

const Navigation = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" style={{fontSize: 20}}>
      <Container>
        <Navbar.Brand href="/" style={{fontSize: 30, fontFamily: 'cursive'}}><img src={logo} alt='logo' /> CraftCart</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
              <Form inline>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Form>
          </Nav>
          <Nav className="mr-sm-4">
              <>
                <Nav.Link href="#">Login</Nav.Link>
              </>
          </Nav>
          <Nav className="mr-sm-4">
              <>
                <Nav.Link href="#"><FontAwesomeIcon icon={faCartShopping} />Cart</Nav.Link>
              </>
          </Nav>
          <Nav className="mr-sm-4">
              <>
                <Nav.Link href="#">Products</Nav.Link>
              </>
          </Nav>
          <Nav className="mr-sm-4">
              <>
                <Nav.Link href="#">Deals</Nav.Link>
              </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navigation