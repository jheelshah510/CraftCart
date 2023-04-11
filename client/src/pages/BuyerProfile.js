import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Badge from "react-bootstrap/esm/Badge";
import Button from "react-bootstrap/esm/Button";

import Form from "react-bootstrap/Form";
import { useHistory, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const BuyerProfile = () => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [buyerInfo, setBuyerInfo] = useState({});
  const history = useHistory();

  const [pNumber, setPnumber] = useState();
  const [address, setAddress] = useState("");
  const [pCode, setPcode] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:3030/userInfo/getBuyerInfo/${id}`)
      .then((response) => response.data)
      .then((data) => {
        setBuyerInfo(data);
        setPnumber(data.buyer.phoneNumber);
        setAddress(data.buyer.address);
        setPcode(data.buyer.pincode);
      })

      .catch((error) => console.error(error));
  }, [id]);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, [isLoaded]);

  if (!isLoaded) {
    return <Loading />;
  }
  const handleBack = () => {
    history.goBack();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const updateBuyerInfo = {
      address: address,
      phoneNumber: pNumber,
      pincode: pCode,
    };

    // const formData = new FormData();

    // formData.append("address", address);
    // formData.append("phoneNumber", pNumber);

    // formData.append("pincode", pCode);

    try {
      await axios
        .put(`http://localhost:3030/userinfo/updateInfo/${id}`, updateBuyerInfo)
        .then((res) => {
          if (res.data) {
            alert("Profile update succesfully");
            setTimeout(() => {
              window.location = "/";
            }, 800);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Form
        style={{
          width: "75vh",
          marginLeft: "75vh",
          marginTop: "10vh",
        }}
        className="shadow-lg p-5 mb-5 bg-white rounded"
        onSubmit={handleSubmit}
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
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={buyerInfo.buyer.email}
            style={{ cursor: "not-allowed" }}
            readOnly
          />
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
            value={pNumber}
            onChange={(e) => setPnumber(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPinCode">
          <Form.Label>PinCode</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Pin Code"
            value={pCode}
            onChange={(e) => setPcode(e.target.value)}
          />
        </Form.Group>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="primary"
            type="submit"
            style={{
              marginTop: "2vh",
              marginLeft: "25%",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            Save
          </Button>
          <Button
            variant="danger"
            style={{
              marginTop: "2vh",
              marginRight: "30%",
              textAlign: "center",
              display: "inline-block",
            }}
            onClick={() => {
              handleBack();
            }}
          >
            Discard
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default BuyerProfile;
