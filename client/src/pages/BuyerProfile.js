import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Badge from "react-bootstrap/esm/Badge";
import Button from "react-bootstrap/esm/Button";

import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const BuyerProfile = () => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [buyerInfo, setBuyerInfo] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3030/userInfo/getBuyerInfo/${id}`)
      .then((response) => response.data)
      .then((data) => setBuyerInfo(data))
      .catch((error) => console.error(error));

    console.log();
  }, [id]);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, [isLoaded]);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <div>
      <Form
        style={{
          width: "75vh",
          marginLeft: "65vh",
          marginTop: "5vh",
        }}
        className="shadow-lg p-5 mb-5 bg-white rounded"
      >
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          User Profile
        </h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={buyerInfo.buyer.username}
            readOnly
            style={{ cursor: "not-allowed" }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Label className="form-inline" htmlFor="ph-num">
            {" "}
            <h4>
              <Badge bg="dark">+91</Badge>
            </h4>
          </Form.Label>

          <Form.Control
            type="number"
            placeholder="Enter Phone Number"
            name="ph-num"
            style={{ marginLeft: "3vw", width: "89%", marginTop: "-6.4vh" }}
          />
        </Form.Group>

        <Form.Label>Categories</Form.Label>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPinCode">
          <Form.Label>PinCode</Form.Label>
          <Form.Control type="number" placeholder="Enter Pin Code" />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{ marginLeft: "40%", marginTop: "2vh" }}
        >
          Register
        </Button>
      </Form>
    </div>
  );
};

export default BuyerProfile;
