import React from 'react';
import Background from '../components/Background';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const signIn = () => {
  return (
    <div>
        <Background />
        <center style={{paddingTop:"200px"}}><h1>Sign In</h1></center>
        <div style={{width: "20%",paddingLeft:"20px"}}>
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
      <br />Are you a seller?Click <a style={{color:"blue"}} href='#'>here</a>
    </Form>
        </div>
    </div>
  )
}

export default signIn