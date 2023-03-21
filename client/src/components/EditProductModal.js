import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Modal.css";
import axios from "axios";
import { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";

const EditProductModal = ({ product, onCancel, onSave }) => {
  const [name, setName] = useState(product.productName);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const [images, setImages] = useState([]);
  const allData = useContext(UserInfoContext);

  const [show, setShow] = useState(true);

  const modalClose = () => setShow(false);

  const handleFileInputChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const updatedProduct = {
    //   name: name,
    //   description: description,
    //   quantity: quantity,
    //   price: price,
    // };
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);

    formData.append("quantity", quantity);
    formData.append("price", price);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    try {
      const response = await axios.put(
        `http://localhost:3030/product/edit/${allData._id}/${product._id}`,
        formData
      );

      onSave(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App p-4">
      <Modal
        show={show}
        onHide={modalClose}
        contentClassName="custom-modal-style"
        dialogClassName="my-modal"
      >
        <Modal.Header>
          <Modal.Title style={{ marginLeft: "36%" }}>
            Product Details
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                placeholder="Enter Product name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="text"
                value={description}
                placeholder="Enter Product description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Enter Stock of Product</Form.Label>
              <Form.Control
                type="number"
                value={quantity}
                placeholder="Enter Stock"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>
                Enter Maximum Retail Price &#x0028;MRP&#x0029; in &#x20B9;
              </Form.Label>
              <Form.Control
                type="number"
                value={price}
                placeholder="Enter Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Enter Product Images</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileInputChange}
              />
            </Form.Group>

            <div
              style={{ display: "flex", justifyContent: "space-between" }}
            ></div>

            <Modal.Footer style={{ marginTop: "10px", paddingTop: "20px" }}>
              <Button
                variant="primary"
                style={{ marginRight: "200px" }}
                type="submit"
              >
                Save changes
              </Button>
              <Button
                variant="danger"
                onClick={onCancel}
                style={{ marginRight: "240px", marginLeft: "-140px" }}
              >
                Discard
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditProductModal;
