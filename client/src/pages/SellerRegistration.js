import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import axios from "axios";

const SellerRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState([]);
  const [images, setImages] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleFileInputChange = (e) => {
    setImages(e.target.files);
  };
  useEffect(() => {
    fetch("http://localhost:3030/category/get")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setOptions(data.category);
        console.log(data.category);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOptionChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked);
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
    console.log(selectedOptions.length);
  };

  const handleSubmitFile = async (e) => {
    e.preventDefault();

    console.log(images);
    phoneNumber = "+91" + phoneNumber;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("passwordVerify", passwordVerify);
    formData.append("address", address);
    formData.append("phoneNumber", phoneNumber);
    formData.append("pincode", pincode);
    // formData.append("selectedOptions", selectedOptions);
    for (let i = 0; i < selectedOptions.length; i++) {
      formData.append("selectedOptions", selectedOptions[i]);
    }
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    // console.log(selectedOptions);

    try {
      await axios
        .post("http://localhost:3030/sellauth", formData, {
          withCredentials: true,
        })
        .then(() => {
          setName("");
          setEmail("");
          setPassword("");
          setPasswordVerify("");
          setAddress("");
          setPincode("");
          setImages([]);
          setSelectedOptions([]);
        });

      alert("Register success");
      setTimeout(() => {
        window.location = "/";
      }, 1500);

      for (var pair of formData.entries()) {
        console.log(pair[0] + " - " + pair[1]);
      }
    } catch (error) {
      console.log(error);
      const tim = error;
      alert(tim.response.data.errormsg);
    }
  };

  return (
    <div>
      <Form
        style={{
          width: "75vh",
          marginLeft: "75vh",
          marginTop: "5vh",
        }}
        onSubmit={handleSubmitFile}
        className="shadow-lg p-5 mb-5 bg-white rounded"
      >
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Seller Registration
        </h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Verify Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPasswordVerify(e.target.value);
            }}
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
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            style={{ marginLeft: "3vw", width: "89%", marginTop: "-6.4vh" }}
          />
        </Form.Group>

        <Form.Label>Categories</Form.Label>

        <Form.Group controlId="formOptions">
          {
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
                  value={option.categoryName}
                  checked={selectedOptions.includes(option.categoryName)}
                  onChange={handleOptionChange}
                />
              </div>
            )))
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPinCode">
          <Form.Label>PinCode</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Pin Code"
            onChange={(e) => {
              setPincode(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Add Government Issued Id Proof</Form.Label>
          <Form.Control
            type="file"
            onChange={handleFileInputChange}
            accept="image/*"
            multiple
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{ marginLeft: "40%", marginTop: "2vh" }}
        >
          Register
        </Button>
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
      </Form>
    </div>
  );
};

export default SellerRegistration;
