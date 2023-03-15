import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NewProductForm = () => {
  return (
    <div>
        <Form
        style={{
          width: "75vh",
          marginLeft: "65vh",
          marginTop: "7vh",
        }}
        className="shadow-lg p-5 mb-5 bg-white rounded"
      >
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Add New Product
        </h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product description"
          />
        </Form.Group>

        <Form.Label>Select Category</Form.Label>

        <Form.Group controlId="formOptions">
          {/* {
            (["checkbox"],
            options.map((option) => (
              <div
                className="mb-3"
                style={{ display: "inline-block", marginLeft: "10px" }}
              >
                <Form.Check
                  label={option.categoryName}
                  id={option.cid}
                  key={option.cid}
                  onChange={handleOptionChange}
                  value={option._id}
                />
              </div>
            )))
          } */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Enter Stock of Product</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Stock"
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Enter Product Images</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            multiple
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{ marginLeft: "40%", marginTop: "2vh" }}
        >
          Add Product
        </Button>
      </Form>
    </div>
  )
}

export default NewProductForm