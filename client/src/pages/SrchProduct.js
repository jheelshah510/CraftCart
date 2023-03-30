import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navigation from "../components/Navigation";

export const SrchProduct = ({ location }) => {
  const [products, setProducts] = useState([]);
  const history = useHistory();
  const searchQuery = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:3030/product/find?search=${searchQuery}`
      );
      setProducts(result.data);
    };
    fetchData();
  }, [searchQuery]);

  const displayProduct = (id) => {
    history.push(`/productdetails/${id}`);
  };
  return (
    <div>
      {" "}
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
          {products.map((product) => (
            <div
              className="singleproduct"
              style={{
                display: "flex",
                margin: "1%",
                border: "1px solid black",
                cursor: "pointer",
              }}
              onClick={() => displayProduct(product._id)}
            >
              <img
                src={product.imageUrl[0]}
                style={{ width: "120px", height: "160px", margin: "1%" }}
                alt="hellos"
              />
              <div style={{ margin: "1%" }}>
                <h4>{product.productName}</h4>

                <h3 style={{ position: "absolute" }}>
                  &#x20B9;{product.price}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
