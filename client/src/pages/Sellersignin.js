import React, { useState } from "react";
import Background from "../components/Background";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const SellersignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e) {
    e.preventDefault();
    try {
      const loginData = {
        email,
        password,
      };

      await axios.post("http://localhost:3030/sellauth/login", loginData, {
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
            marginLeft: "14vh",
            paddingTop: "10vh",
            marginBottom: "8vh",
          }}
        >
          Seller Sign In
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
            style={{ marginLeft: "13vh", marginTop: "1vh" }}
          >
            SignIn
          </Button>
          <br />
          <br />
          <strong>Wanna become a seller? Click </strong>
          <a style={{ color: "blue" }} href="/sellerregistration">
            here
          </a>
        </Form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h6>
          {" "}
          Click &nbsp;
          <a style={{ color: "blue" }} href="/#">
            here
          </a>{" "}
          To Go Back 🔙{" "}
        </h6>
      </div>
    </div>
  );
};

export default SellersignIn;
