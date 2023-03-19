import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UserInfoContext from "../context/UserInfoContext";
import { useHistory } from "react-router-dom";

import axios from "axios";

const NewProductForm = () => {
  const [pname, setPname] = useState("");
  const [pDescription, setPdescription] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [stocks, setStocks] = useState(null);
  const [price, setPrice] = useState(null);
  const [images, setImages] = useState([]);
  const allData = useContext(UserInfoContext);

  const [isLoaded, setIsLoaded] = useState(false);

  const history = useHistory();

  // simulate a delay of 2 seconds before setting isLoaded to true
  setTimeout(() => {
    setIsLoaded(true);
  }, 1000);

  // return a loading message if isLoaded is false
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const sId = allData._id;
  const sellerName = allData.name;
  const options = allData.selectedOptions;

  const handleFileInputChange = (e) => {
    setImages(e.target.files);
  };
  const handleOptionChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked);
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("sellerId", sId);
    formData.append("sellerName", sellerName);
    formData.append("productName", pname);
    formData.append("description", pDescription);
    formData.append("quantity", stocks);
    formData.append("price", price);
    // formData.append("selectedOptions", selectedOptions);
    for (let i = 0; i < selectedOptions.length; i++) {
      formData.append("selectedOptions", selectedOptions[i]);
    }
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    try {
      await axios
        .post("http://localhost:3030/product/add", formData, {
          withCredentials: true,
        })
        .then(() => {
          setPname("");
          setPdescription("");
          setStocks("");
          setImages([]);
          setSelectedOptions([]);
        });

      alert("Product Added Succesfully");
      setTimeout(() => {
        window.location = "/";
      }, 500);
      for (var pair of formData.entries()) {
        console.log(pair[0] + " - " + pair[1]);
      }
    } catch (error) {
      console.log(error);
      const tim = error;
      alert(tim.response.data.errormsg);
    }
  };

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div>
      <Form
        style={{
          width: "75vh",
          marginLeft: "65vh",
          marginTop: "3vh",
        }}
        onSubmit={handleSubmitForm}
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
            onChange={(e) => {
              setPname(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product description"
            onChange={(e) => {
              setPdescription(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Label>Select Category</Form.Label>

        <Form.Group controlId="formOptions">
          {
            (["radio"],
            options.map((option) => (
              <div
                className="mb-3"
                style={{ display: "inline-block", marginLeft: "10px" }}
              >
                <Form.Check
                  label={option}
                  id={option.indexOf("option.categoryName")}
                  key={option.indexOf("option.categoryName")}
                  onChange={handleOptionChange}
                  value={option}
                />
              </div>
            )))
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Enter Stock of Product</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Stock"
            onChange={(e) => {
              setStocks(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>
            Enter Maximum Retail Price &#x0028;MRP&#x0029; in &#x20B9;
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
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

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="primary"
            type="submit"
            style={{
              marginTop: "2vh",
              marginLeft: "20%",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            Add Product
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

export default NewProductForm;
