import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Loading from "../components/Loading";

const CatProduct = () => {
  const catName = useParams();

  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        `http://localhost:3030/product/getProductByCat/${Object.values(
          catName
        )}`
      )
      .then((response) => response.data)
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, [catName]);
  setTimeout(() => {
    setIsLoaded(true);
  }, 1000);

  // return a loading message if isLoaded is false
  if (!isLoaded) {
    return <Loading />;
  }

  const displayProduct = (id) => {
    history.push(`/productdetails/${id}`);
  };
  console.log(products);
  return (
    <div>
      {" "}
      <Navigation />
      <h2
        style={{
          height: "20px",
          width: "100vw",
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "2%",
        }}
      >
        Do you want more items of {Object.values(catName)}? Here they are...
      </h2>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "0%", width: "100%" }}>
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

export default CatProduct;
