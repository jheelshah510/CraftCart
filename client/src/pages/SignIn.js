import React, { useState } from "react";
import Background from "../components/Background";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function login(e) {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password,
      };

      await axios.post("http://localhost:3030/auth/login", loginData, {
        withCredentials: true,
      });

      alert("Sigin success");
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
            paddingTop: "10vh",
            marginBottom: "10vh",
            marginLeft: "20vh",
          }}
        >
          Sign In
        </h1>
      </span>
      <div style={{ width: "20%", paddingLeft: "70px" }}>
        <Form onSubmit={login}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="outline-primary"
            type="submit"
            style={{ marginLeft: "10vh", marginTop: "1vh" }}
          >
            SignIn
          </Button>
          <br />
          <br />
          <br />
          <b>Are you a seller?Click </b>
          <a style={{ color: "blue" }} href="/sellersignin">
            here
          </a>
          <br />
          <br />
          <b>Are you a new user? To register Click </b>
          <a style={{ color: "blue" }} href="/register">
            here
          </a>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
