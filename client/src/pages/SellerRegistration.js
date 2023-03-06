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
  const [selectedOptions, setSelectedOptions] = useState([]);
  // const [selectedFile, setSelectedFile] = useState([]);
  // const [previewSource, setPreviewSource] = useState([]);
  // console.log(images);

  const handleFileInputChange = (e) => {
    setImages(e.target.files);
    // const file =e.target.files[0];
    // const files = Array.from(e.target.files);
    // setImages([]);
    // files.forEach((file) => {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setImages((oldImages) => [...oldImages, reader.result]);
    //     }
    //   };
    //   reader.readAsDataURL(file);
    // });

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
    // const selectedOptionValues = Array.from(
    //   e.target.selectedOptions,
    //   (option) => option.value
    // );
    // const selectedOptions = options.filter((option) =>
    //   selectedOptionValues.includes(option.value)
    // );
    // setSelectedOptions(selectedOptions);
    // const value = event.target.value;
    // const checked = event.target.checked;
    // console.log(value, checked);
    // if (selectedOptions.includes(value)) {
    //   setSelectedOptions(selectedOptions.filter((option) => option !== value));
    // } else {
    //   setSelectedOptions([...selectedOptions, value]);
    // }
    // console.log({ options: selectedOptions });
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked);
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    // if (!images) return;
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
    formData.append("selectedOptions", selectedOptions);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    // console.log(selectedOptions);

    try {
      // const sellerRegisterData = {
      //   name,
      //   email,
      //   password,
      //   passwordVerify,
      //   phoneNumber,
      //   address,
      //   pincode,
      //   selectedOptions,
      //   images,
      // };

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
      setTimeout(() => {
        alert("Register success");
      });
      for (var pair of formData.entries()) {
        console.log(pair[0] + " - " + pair[1]);
      }
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
        {/* {["checkbox"].map((type) => (
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
        ))} */}

        <Form.Group controlId="formOptions">
          {/* <Form.Control
              as="select"
              value={selectedOption}
              onChange={(e) => {
                setSelectedOption(e.target.values);
              }}
            >
              {options.map((option) => (
                <option value={option.cid}>{option._categorName}</option>
              ))}
            </Form.Control> */}
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
                  onChange={handleOptionChange}
                  value={option._id}
                />
              </div>
            )))
          }

          {/* <Form.Control
            as="select"
            multiple
            value={selectedOptions.map((option) => option.value)}
            onChange={handleOptionChange}
          >
            {options.map((option) => (
              <div
                className="mb-3"
                style={{ display: "inline-block", marginLeft: "10px" }}
                multiple
                id="options"
              >
                <Form.Check
                  label={option.categoryName}
                  id={option.cid}
                  key={option.cid}
                  onChange={handleOptionChange}
                />
              </div>
            ))}
          </Form.Control> */}
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
            // value={fileInputState}
            accept="image/*"
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
