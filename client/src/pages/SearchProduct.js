import React from "react";
import Navigation from "../components/Navigation";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Loading from "../components/Loading";

const SearchProduct = ({ products }) => {
  const [prds, setProducts] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3030/product/getAllProducts")
      .then((response) => response.data)
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

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
      <Navigation />
      <div style={{ display: "flex" }}>
        <div
          style={{
            border: "1px solid black",
            width: "20%",
            height: "500px",
            margin: "1%",
          }}
        >
          <h2 style={{ marginLeft: "5%", marginTop: "6%" }}>
            <b>Filters</b>
          </h2>
          <h3 style={{ margin: "5%" }}>Categories</h3>
          <input
            style={{ marginLeft: "5%" }}
            type="checkbox"
            id=""
            name=""
            value=""
          />
          <label style={{ marginLeft: "2%" }} for="vehicle1">
            {" "}
            Jute
          </label>
          <input
            style={{ marginLeft: "5%" }}
            type="checkbox"
            id=""
            name=""
            value=""
          />
          <label style={{ marginLeft: "2%" }} for="vehicle1">
            {" "}
            Pottery
          </label>
          <input
            style={{ marginLeft: "5%" }}
            type="checkbox"
            id=""
            name=""
            value=""
          />
          <label style={{ marginLeft: "2%" }} for="vehicle1">
            {" "}
            Leather
          </label>
          <br />

          <input
            style={{ marginLeft: "5%" }}
            type="checkbox"
            id=""
            name=""
            value=""
          />
          <label style={{ marginLeft: "2%" }} for="vehicle1">
            {" "}
            Brass
          </label>
          <input
            style={{ marginLeft: "5%" }}
            type="checkbox"
            id=""
            name=""
            value=""
          />
          <label style={{ marginLeft: "2%" }} for="vehicle1">
            {" "}
            Paintings
          </label>
          <input
            style={{ marginLeft: "5%" }}
            type="checkbox"
            id=""
            name=""
            value=""
          />
          <label style={{ marginLeft: "2%" }} for="vehicle1">
            {" "}
            Clothing
          </label>
          <br />
          <input
            style={{ marginLeft: "5%" }}
            type="checkbox"
            id=""
            name=""
            value=""
          />
          <label style={{ marginLeft: "2%" }} for="vehicle1">
            {" "}
            Carpet Weaving
          </label>
          <input
            style={{ marginLeft: "5%" }}
            type="checkbox"
            id=""
            name=""
            value=""
          />
          <label style={{ marginLeft: "2%" }} for="vehicle1">
            {" "}
            Woodwork
          </label>
          <br />
        </div>
        <div style={{ margin: "1%", width: "70%" }}>
          {prds.map((prd) => (
            <div
              className="singleproduct"
              style={{
                display: "flex",
                margin: "1%",
                border: "1px solid black",
              }}
            >
              <img
                src={prd.imageUrl[0]}
                style={{ width: "120px", height: "160px", margin: "1%" }}
                alt="hellos"
              />
              <div style={{ margin: "1%" }}>
                <h4>{prd.productName}</h4>

                <h3 style={{ position: "absolute" }}>&#x20B9;{prd.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
