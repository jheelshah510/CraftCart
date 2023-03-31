import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../CraftCart.png";
import AuthContext from "../context/AuthContext";
import UserInfoContext from "../context/UserInfoContext";
import axios from "axios";
import Loading from "./Loading";
import Button from "react-bootstrap/esm/Button";
import { useHistory } from "react-router-dom";

const Navigation = () => {
  const { loggedIn, getLoggedIn } = useContext(AuthContext);
  const allData = useContext(UserInfoContext);

  const [isLoaded, setIsLoaded] = useState(false);
  const [sellerAccountProfileUrl, setSellerAccountProfileUrl] = useState();
  const [buyerAccountProfileUrl, setBuyerAccountProfileUr] = useState();
  const [query, setQuery] = useState("");

  const history = useHistory();

  // useEffect(() => {
  //   const listener = (event) => {
  //     if (event.code === "Enter" || event.code === "NumpadEnter") {
  //       console.log("Enter key was pressed. Run your function.");
  //       event.preventDefault();
  //     }
  //   };
  //   document.addEventListener("keydown", listener);
  //   return () => {
  //     document.removeEventListener("keydown", listener);
  //   };
  // }, []);
  // simulate a delay of 2 seconds before setting isLoaded to true
  setTimeout(() => {
    setIsLoaded(true);

    if (loggedIn) {
      if (allData.role === "seller") {
        setSellerAccountProfileUrl(`/selleraccountinfo/${allData._id}`);
      }
    }
    if (loggedIn) {
      if (allData.role === "buyer") {
        setBuyerAccountProfileUr(`/profile/${allData._id}`);
      }
    }
  }, 1000);

  // return a loading message if isLoaded is false
  if (!isLoaded) {
    return <Loading />;
  }

  async function logout() {
    await axios.get("http://localhost:3030/auth/logout");
    getLoggedIn();
  }

  // const handleKey = async (event) => {
  //   if (event.code === "Enter" || event.code === "NumpadEnter") {
  //     const { data } = await axios.get(
  //       `http://localhost:3030/product/find?search=${query}`
  //     );
  //     console.log(data);
  //   }
  // };

  const searchProduct = async () => {
    history.push(`/search?query=${query}`);
  };

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
            style={{ fontSize: 30, fontFamily: "cursive", marginLeft: "-20%" }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                minHeight: "30px",
                maxHeight: "75px",
                marginLeft: "75px",
                marginRight: "40px",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Form
                inline
                style={{
                  minWidth: "500px",
                  maxWidth: "700px",
                }}
              >
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="w-100 "
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </Form>
              <div
                style={{ marginTop: "1%", marginLeft: "1%" }}
                className="primary"
                onClick={searchProduct}
              >
                <FontAwesomeIcon
                  style={{ color: "white", cursor: "pointer" }}
                  icon={faMagnifyingGlass}
                />
              </div>
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
                    {allData.username && (
                      <NavDropdown.Item>{allData.username}</NavDropdown.Item>
                    )}
                    {allData.name && (
                      <NavDropdown.Item>{allData.name}</NavDropdown.Item>
                    )}

                    <NavDropdown.Divider />
                    {allData.role === "buyer" && (
                      <NavDropdown.Item href={buyerAccountProfileUrl}>
                        Your Profie
                      </NavDropdown.Item>
                    )}
                    {allData.role === "admin" && (
                      <NavDropdown.Item href="#action/3.1">
                        Dashboard
                      </NavDropdown.Item>
                    )}
                    {allData.role === "seller" && (
                      <NavDropdown.Item href={sellerAccountProfileUrl}>
                        Dashboard
                      </NavDropdown.Item>
                    )}

                    {allData.role === "buyer" && (
                      <NavDropdown.Item href="#action/3.2">
                        Your Orders
                      </NavDropdown.Item>
                    )}

                    {allData.role === "seller" && (
                      <NavDropdown.Item href="#action/3.2">
                        Your Sales
                      </NavDropdown.Item>
                    )}
                    {allData.role === "admin" && (
                      <NavDropdown.Item href="#action/3.2">
                        Approvals
                      </NavDropdown.Item>
                    )}
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
                <Nav.Link href="/searchproduct">Products</Nav.Link>
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
