import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const SellerRegistration = () => {
  // const [fileInputState, setfileInputState] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState([]);
  const [images, setImages] = useState([]);
  // const [selectedFile, setSelectedFile] = useState([]);
  // const [previewSource, setPreviewSource] = useState([]);
  // console.log(images);
  const handleFileInputChange = (e) => {
    // const file =e.target.files[0];
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImages((oldArray) => [...oldArray, reader.result]);
      };
    });

    // this.setState({ files: file });
    // let file = [];

    // for (let i = 0; i < e.target.files.length; i++) {
    //   file.push(e.target.files[i]);
    // }
    // previewFile(files);
  };
  // const previewFile = (files) => {
  //   files.forEach((file) => {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       if (reader.readyState === 2) {
  //         setPreviewSource([...previewSource, reader.result]);
  //       }

  //       reader.readAsDataURL(file);
  //     };
  //   });
  // };
  const handleSubmitFile = async (e) => {
    e.preventDefault();
    // if (!images) return;
    console.log(images);
    try {
      const sellerRegisterData = {
        name,
        email,
        password,
        passwordVerify,
        address,
        pincode,
        images,
      };
      console.log(sellerRegisterData);
      await axios
        .post("http://localhost:3030/sellauth", sellerRegisterData, {
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
        });
      setTimeout(() => {
        alert("Register success");
      });
    } catch (error) {
      console.log(error);
      const tim = error;
      alert(tim.response.data.errormsg);
    }
  };
  // const uploadImage = async (base64EncodedImage) => {
  //   console.log(base64EncodedImage);
  //   try {
  //     await fetch("/api/upload", {
  //       method: "Post",
  //       body: JSON.stringify({ data: base64EncodedImage }),
  //       headers: { "Contet-type": "application/json" },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div>
      <h1 style={{ marginLeft: "65vh" }}>Seller Registration</h1>
      <Form
        style={{ width: "75vh", marginLeft: "65vh", marginTop: "5vh" }}
        onSubmit={handleSubmitFile}
        encType="multipart/form-data"
      >
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

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Phone Number"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Label>Categories</Form.Label>
        {["checkbox"].map((type) => (
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
            name="image"
            onChange={handleFileInputChange}
            // value={fileInputState}
            multiple
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SellerRegistration;
