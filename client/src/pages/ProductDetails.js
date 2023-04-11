import React, { useContext, useEffect, useState } from "react";
import Navigation from "../components/Navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faArrowLeft,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./ImageSlider.css";
import Button from "react-bootstrap/Button";
import { NavLink, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import { useCartContext } from "../context/CartContext";
import UserInfoContext from "../context/UserInfoContext";
import AuthContext from "../context/AuthContext";

const ProductDetails = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState("");
  const { addToCart } = useCartContext();
  const allData = useContext(UserInfoContext);
  const { loggedIn } = useContext(AuthContext);

  const history = useHistory();

  const [amount, setAmount] = useState(1);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/product/${id}`)
      .then((response) => response.data)
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [id]);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
      setSelectedImage(product.imageUrl[product.imageUrl.length - 1]);
    }, 800);
  }, [isLoaded]);

  // return a loading message if isLoaded is false
  if (!isLoaded) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    setAmount(amount + 1);
  };

  const handleClick = (index) => {
    const wordSlider = product.imageUrl[index];
    setSelectedImage(wordSlider);
  };
  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <Navigation />
      <Button
        className="add-cart"
        style={{ marginLeft: "10vh", marginTop: "7vh" }}
        onClick={() => goBack()}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <b> Back To Products</b>
      </Button>
      <div className="super" style={{ marginLeft: "10vh", marginTop: "1vh" }}>
        <div className="main">
          <img
            src={selectedImage}
            style={{ height: "50vh", width: "30vw" }}
            alt="An Alt Text"
          />
          <div className="flex_row">
            {product.imageUrl &&
              product.imageUrl.map((imageUrl, index) => (
                <div className="thumbnail" key={index}>
                  <img
                    src={imageUrl}
                    alt={product.productName}
                    onClick={() => handleClick(index)}
                    className={selectedImage === index ? "clicked" : ""}
                    style={{
                      height: "20vh",
                      cursor: "pointer",
                      marginRight: "10vh",
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="details" style={{ marginRight: "10px" }}>
          <h2 style={{ width: "100%", marginRight: "10px" }}>
            {product.productName}
          </h2>
          <h3>Price :&#x20B9;{product.price}</h3>
          <br />
          <div style={{ maxWidth: "90%", marginBottom: "12px" }}>
            <h5>{product.description}</h5>
          </div>
          <br />
          <h4>
            <b>Seller : {product.sellerName}</b>
          </h4>
          <h4>Available Qty: {product.quantity}</h4>
          <br />
          <div className="increase-decrease">
            <button onClick={setDecrease}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <h4 style={{ margin: "2px" }}>{amount}</h4>
            <button onClick={setIncrease}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <br />

          {!loggedIn && (
            <NavLink to="/cart" onClick={() => addToCart(id, amount, product)}>
              <Button className="add-cart">
                <b>Add to Cart</b>
              </Button>
            </NavLink>
          )}
          {loggedIn && (
            <>
              {allData.role === "buyer" && (
                <NavLink
                  to="/cart"
                  onClick={() => addToCart(id, amount, product)}
                >
                  <Button className="add-cart">
                    <b>Add to Cart</b>
                  </Button>
                </NavLink>
              )}
            </>
          )}
          {loggedIn && (
            <>
              {allData.role === "seller" && (
                <Button
                  className="add-cart"
                  style={{
                    cursor: "not-allowed",
                  }}
                  disabled
                >
                  <b>Add to Cart</b>
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
