import React from "react";
import Background from "../components/Background";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const signIn = () => {
  return (
    <div>
      <Background />
      <span style={{ width: "20%" }}>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "10vh",
            marginBottom: "10vh",
          }}
        >
          Sign In
        </h1>
      </span>
      <div style={{ width: "20%", paddingLeft: "70px" }}>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
          <Button variant="outline-primary">SignIn</Button>
          <br />
          Are you a seller?Click{" "}
          <a style={{ color: "blue" }} href="#">
            here
          </a>
        </Form>
      </div>
    </div>
  );
};

export default signIn;
