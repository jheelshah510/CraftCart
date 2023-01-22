import React from "react";
import { useState } from "react";
import "./background.css";
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
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="main">
      <h1>Login</h1>
      <form onSubmit={login}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default SignIn;
