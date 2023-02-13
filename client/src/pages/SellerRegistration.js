import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SellerRegistration = () => {
  return (
    <div>
    <Form>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone Number" />
      </Form.Group>

      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Woodwork"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Pottery"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Leather"
            type={type}
            id={`inline-${type}-3`}
          />
          <Form.Check
            inline
            label="Brass"
            type={type}
            id={`inline-${type}-4`}
          />
          <Form.Check
            inline
            label="Paintings"
            type={type}
            id={`inline-${type}-5`}
          />
          <Form.Check
            inline
            label="Jute"
            type={type}
            id={`inline-${type}-6`}
          />
          <Form.Check
            inline
            label="Clothing"
            type={type}
            id={`inline-${type}-7`}
          />
          <Form.Check
            inline
            label="Carpet Weaving"
            type={type}
            id={`inline-${type}-8`}
          />
        </div>
      ))}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default SellerRegistration