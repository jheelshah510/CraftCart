import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../CraftCart.png";
import AuthContext from "../context/AuthContext";
import UserInfoContext from "../context/UserInfoContext";
import axios from "axios";

const Navigation = () => {
  const { loggedIn, getLoggedIn } = useContext(AuthContext);
  const allData = useContext(UserInfoContext);
  console.log(allData);

  const [isLoaded, setIsLoaded] = useState(false);

  // simulate a delay of 2 seconds before setting isLoaded to true
  setTimeout(() => {
    setIsLoaded(true);
  }, 2000);

  // return a loading message if isLoaded is false
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  async function logout() {
    await axios.get("http://localhost:3030/auth/logout");
    getLoggedIn();
  }

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
                  <NavDropdown
                    title={<FontAwesomeIcon icon={faUser} />}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item>{allData.username}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
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
