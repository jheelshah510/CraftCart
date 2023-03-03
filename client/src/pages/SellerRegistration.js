import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import axios from "axios";
import "../css/SellerRegister.css";

const SellerRegistration = () => {
  // const [fileInputState, setfileInputState] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState([]);
  const [images, setImages] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  // const [selectedFile, setSelectedFile] = useState([]);
  // const [previewSource, setPreviewSource] = useState([]);
  // console.log(images);
  const handleFileInputChange = (e) => {
    // const file =e.target.files[0];
    const files = Array.from(e.target.files);
    setImages([]);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((oldImages) => [...oldImages, reader.result]);
        }
      };
      reader.readAsDataURL(file);
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
  useEffect(() => {
    axios
      .get("http://localhost:3030/category/get")
      .then((response) => {
        setOptions(response.data);
        console.log(options);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOptionChange = (e) => {
    console.log(e.target.values);
  };

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    // if (!images) return;
    console.log(images);
    phoneNumber = "+91" + phoneNumber;

    try {
      const sellerRegisterData = {
        name,
        email,
        password,
        passwordVerify,
        phoneNumber,
        address,
        pincode,
        images,
      };
      // const formData = new FormData();
      // formData.set("name", name);
      // formData.set("email", email);
      // formData.set("password", password);
      // formData.set("passwordVerify", passwordVerify);
      // formData.set("address", address);
      // formData.set("pincode", pincode);

      // images.forEach((image) => {
      //   formData.append("images", image);
      // });

      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + " - " + pair[1]);
      // }

      // await axios
      //   .post("http://localhost:3030/sellauth", sellerRegisterData, {
      //     withCredentials: true,
      //   })
      //   .then(() => {
      //     setName("");
      //     setEmail("");
      //     setPassword("");
      //     setPasswordVerify("");
      //     setAddress("");
      //     setPincode("");
      //     setImages([]);
      //   });
      // setTimeout(() => {
      //   alert("Register success");
      // });
      console.log(sellerRegisterData);
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
      <Form
        style={{
          width: "75vh",
          marginLeft: "65vh",
          marginTop: "5vh",
        }}
        onSubmit={handleSubmitFile}
        encType="multipart/form-data"
        className="form-backdrop"
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
        {["checkbox"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label={options.category[0].categoryName}
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label={options.category[1].categoryName}
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
            <Form.Check
              inline
              label={options.category[2].categoryName}
              type={type}
              id={`inline-${type}-3`}
            />
            <Form.Check
              inline
              label={options.category[3].categoryName}
              type={type}
              id={`inline-${type}-4`}
            />
            <Form.Check
              inline
              label={options.category[4].categoryName}
              type={type}
              id={`inline-${type}-5`}
            />
            <Form.Check
              inline
              label={options.category[5].categoryName}
              type={type}
              id={`inline-${type}-6`}
            />
            <Form.Check
              inline
              label={options.category[6].categoryName}
              type={type}
              id={`inline-${type}-7`}
            />
            <Form.Check
              inline
              label={options.category[7].categoryName}
              type={type}
              id={`inline-${type}-8`}
            />
          </div>
        ))}

        {/* <Form.Group>
          <Form.Label>Categories</Form.Label>
          <div>
            <Form.Control
              as="select"
              value={selectedOption}
              onChange={(e) => {
                setSelectedOption(e.target.values);
              }}
            >
              {options.map((option) => (
                <option value={option._id}>{option._categorName}</option>
              ))}
            </Form.Control>
          </div>
        </Form.Group> */}

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
            accept="image/png, image/jpeg"
            multiple
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{ marginLeft: "40%", marginTop: "2vh" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SellerRegistration;
