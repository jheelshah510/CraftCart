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
      <h2
        style={{
          height: "20px",
          width: "100vw",
          marginTop: "30px",
          marginLeft: "2%",
        }}
      >
        Search results...
      </h2>
      <div style={{ display: "flex" }}>
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
