import React, { useContext, useState } from "react";
import Background from "../components/Background";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import AuthContext from "../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loggedIn } = useContext(AuthContext);
  console.log(loggedIn);
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
          <Button variant="outline-primary" type="submit">
            SignIn
          </Button>
          <br />
          Are you a seller?Click{" "}
          <a style={{ color: "blue" }} href="/sellersignin">
            here
          </a>
          <br />
          Are you a new user? To register Click{" "}
          <a style={{ color: "blue" }} href="/register">
            here
          </a>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
