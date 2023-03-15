import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../CraftCart.png";

const SellerNavigation = () => {
  
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
            style={{ fontSize: 30, fontFamily: "cursive", marginLeft: "-10%", marginRight: "10%" }}
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
            <Nav className="mr-sm-4">
              <>
                <Nav.Link href="#">
                  Account Details
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
                <Nav.Link href="#">Add New Product</Nav.Link>
              </>
            </Nav>
            <Nav className="mr-sm-4">
              <>
                <Nav.Link href="#">Customer Order</Nav.Link>
              </>
            </Nav>
            <Nav className="mr-sm-4">
                <>
                  <Nav.Link href="#">Logout</Nav.Link>
                </>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default SellerNavigation;
