import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AuthContext from "../context/AuthContext";
import UserInfoContext from "../context/UserInfoContext";
import logo from "../CraftCart.png";

const SellerNavigation = () => {
  const { getLoggedIn } = useContext(AuthContext);
  const allData = useContext(UserInfoContext);
  const [isLoaded, setIsLoaded] = useState(false);

  async function logout() {
    await axios.get("http://localhost:3030/auth/logout");
    getLoggedIn();
    window.location = "/";
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, [isLoaded]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const sellerAccountProfileUrl = `/selleraccountinfo/${allData._id}`;
  const sellerAccountProducts = `/sellerdashproducts/${allData._id}`;

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
            style={{
              fontSize: 30,
              fontFamily: "cursive",
              marginLeft: "-10%",
              marginRight: "10%",
            }}
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
                <Nav.Link href={sellerAccountProfileUrl}>
                  Account Details
                </Nav.Link>
              </>
            </Nav>
            <Nav className="mr-sm-4">
              <>
                <Nav.Link href={sellerAccountProducts}>Products</Nav.Link>
              </>
            </Nav>
            <Nav className="mr-sm-4">
              <>
                <Nav.Link href="/newproductform">Add New Product</Nav.Link>
              </>
            </Nav>
            <Nav className="mr-sm-4">
              <>
                <Nav.Link href="/productorderdetails">Customer Order</Nav.Link>
              </>
            </Nav>
            <Nav className="mr-sm-4">
              <>
                <Nav.Link
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default SellerNavigation;
