import React, { useState } from "react";
import Background from "../components/Background";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Register = () => {
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

      alert("Register success");
      setTimeout(() => {
        window.location = "/";
      }, 1500);
    } catch (err) {
      console.log(err);
      const tim = err;
      alert(tim.response.data.errormsg);
    }
  }
  return (
    <div>
      <Background />
      <span style={{ width: "20%" }}>
        <h1
          style={{
            paddingTop: "8vh",
            marginBottom: "6vh",
            marginLeft: "20vh",
          }}
        >
          Register
        </h1>
      </span>
      <div style={{ width: "20%", paddingLeft: "70px" }}>
        <Form onSubmit={register}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Verify Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              onChange={(e) => setPasswordVerify(e.target.value)}
              value={passwordVerify}
            />
          </Form.Group>
          <Button
            variant="outline-primary"
            type="submit"
            style={{ marginLeft: "10vh", marginTop: "1vh" }}
          >
            Register
          </Button>
          <br />
          <br />
          <strong>Already have an account? Click </strong>
          <a style={{ color: "blue" }} href="/signin">
            here
          </a>
        </Form>
      </div>
    </div>
  );
};

export default Register;
