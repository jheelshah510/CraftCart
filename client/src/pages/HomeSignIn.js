import React from "react";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./background.css";
import "./HomeSignIn.css";
import axios from "axios";

const HomeSignIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  async function register(e) {
    e.preventDefault();
    try {
      const registerData = {
        username,
        email,
        password,
        passwordVerify,
      };

      await axios.post("http://localhost:3030/auth/", registerData, {
        withCredentials: true,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="main">
      <div className="loginContainer">
        <h1>&nbsp;SignIn</h1>
        <Form onSubmit={register}>
          <Form.Group controlId="formBasicText">
            <Form.Label>&nbsp;Username</Form.Label>
            <Form.Control
              style={{ width: 600 }}
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>&nbsp;Email address</Form.Label>
            <Form.Control
              style={{ width: 600 }}
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>&nbsp;Password</Form.Label>
            <Form.Control
              style={{ width: 600 }}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>&nbsp;Confirm Password</Form.Label>
            <Form.Control
              style={{ width: 600 }}
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setPasswordVerify(e.target.value)}
              value={passwordVerify}
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ align: "center" }}>
            Create Account
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Are you a seller?{" "}
            <Link to="#" style={{ color: "blue" }}>
              SignIn Here
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeSignIn;
