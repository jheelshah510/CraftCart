import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../CraftCart.png";
import AuthContext from "../context/AuthContext";

const Navigation = () => {
  const { loggedIn, userName } = useContext(AuthContext);
  console.log(userName);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        style={{ fontSize: 20, minHeight: "60px", maxHeight: "75px" }}
      >
        <Container>
          <Navbar.Brand
            href="/"
            style={{ fontSize: 30, fontFamily: "cursive", marginLeft: "-10%" }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                minHeight: "30px",
                maxHeight: "75px",
                marginLeft: "65px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Form inline style={{ minWidth: "300px", maxWidth: "700px" }}>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="w-100 "
                />
              </Form>
            </Nav>
            {!loggedIn && (
              <Nav className="mr-sm-4">
                <>
                  <Nav.Link href="/signin">Login</Nav.Link>
                </>
              </Nav>
            )}
            {loggedIn && (
              <Nav className="mr-sm-4">
                <>
                  <Nav.Link href="#">
                    <FontAwesomeIcon icon={faUser} />
                  </Nav.Link>
                </>
              </Nav>
            )}
            <Nav className="mr-sm-4">
              <>
                <Nav.Link href="#">
                  <FontAwesomeIcon icon={faCartShopping} />
                  Cart
                </Nav.Link>
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
  );
};

export default Navigation;
