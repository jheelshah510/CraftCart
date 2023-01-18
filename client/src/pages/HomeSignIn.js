import React from "react";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./background.css";
import "./HomeSignIn.css";

const HomeSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="main">
      <div className="loginContainer">
        <h1>&nbsp;SignIn</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>&nbsp;Email address</Form.Label>
            <Form.Control
              style={{ width: 600 }}
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>&nbsp;Password</Form.Label>
            <Form.Control
              style={{ width: 600 }}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
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
