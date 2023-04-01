import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";

import Carousel from "react-bootstrap/Carousel";
import a from "../images/a.png";

import b from "../images/b.png";

import c from "../images/c.png";

import d from "../images/d.png";

import e from "../images/e.png";

import f from "../images/f.png";
import Brass from "../nimages/nimages/Brass.png";
import Carpet from "../nimages/nimages/Carpet.png";
import Clothing from "../nimages/nimages/Clothing.png";
import Jute from "../nimages/nimages/Jute.png";
import Leather from "../nimages/nimages/Leather.png";
import Painting from "../nimages/nimages/Painting.png";
import Pottery from "../nimages/nimages/Pottery.png";
import Weaving from "../nimages/nimages/Weaving.png";
import axios from "axios";
import Loading from "../components/Loading";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:3030/product/getHomeProducts")
      .then((response) => response.data)
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 1000);

  // return a loading message if isLoaded is false
  if (!isLoaded) {
    return <Loading />;
  }
  console.log(products);
  const displayProduct = (id) => {
    history.push(`/productdetails/${id}`);
  };

  return (
    <div>
      <div>
        <Navigation />
        <br />
        <div
          style={{
            display: "flex",
            width: "100%",
            marginTop: "-0%",
            marginBottom: "1.5%",
          }}
        >
          <div
            style={{
              width: "11%",
              marginLeft: "0%",
              marginRight: "1%",
              textAlign: "center",
            }}
          >
            <a href="/getProductBy/Pottery" style={{ arrow: "pointer" }}>
              <img
                src={Pottery}
                style={{ width: "120%", height: "70px" }}
                alt="Pottery"
              />
            </a>
          </div>

          <div
            style={{
              width: "11%",
              marginLeft: "1%",
              marginRight: "3%",
              textAlign: "center",
            }}
          >
            <a href="/getProductBy/Leather" style={{ arrow: "pointer" }}>
              <img
                src={Leather}
                style={{ width: "130%", height: "70px" }}
                alt="leather"
              />
            </a>
          </div>

          <div
            style={{
              width: "11%",
              marginLeft: "0%",
              marginRight: "3%",
              textAlign: "center",
            }}
          >
            <a href="/getProductBy/Brass" style={{ arrow: "pointer" }}>
              <img
                src={Brass}
                style={{ width: "130%", height: "70px" }}
                alt="brass"
              />
            </a>
          </div>

          <div
            style={{
              width: "11%",
              marginLeft: "0%",
              marginRight: "3%",
              textAlign: "center",
            }}
          >
            <a href="/getProductBy/Paintings" style={{ arrow: "pointer" }}>
              <img
                src={Painting}
                style={{ width: "130%", height: "70px" }}
                alt="Painting"
              />
            </a>
          </div>

          <div
            style={{
              width: "11%",
              marginLeft: "0%",
              marginRight: "3%",
              textAlign: "center",
            }}
          >
            <a href="/getProductBy/Jute" style={{ arrow: "pointer" }}>
              <img
                src={Jute}
                style={{ width: "130%", height: "70px" }}
                alt="Jute"
              />
            </a>
          </div>

          <div
            style={{
              width: "11%",
              marginLeft: "0%",
              marginRight: "3%",
              textAlign: "center",
            }}
          >
            <a href="/getProductBy/Clothing" style={{ arrow: "pointer" }}>
              <img
                src={Clothing}
                style={{ width: "130%", height: "70px" }}
                alt="Clothing"
              />
            </a>
          </div>

          <div
            style={{
              width: "11%",
              marginLeft: "0%",
              marginRight: "3%",
              textAlign: "center",
            }}
          >
            <a href="/getProductBy/Carpet Weaving" style={{ arrow: "pointer" }}>
              <img
                src={Carpet}
                style={{ width: "130%", height: "70px" }}
                alt="Carpet"
              />
            </a>
          </div>

          <div
            style={{
              width: "11%",
              marginLeft: "0%",
              marginRight: "3%",
              textAlign: "center",
            }}
          >
            <a href="/" style={{ arrow: "pointer" }}>
              <img
                src={Weaving}
                style={{ width: "130%", height: "70px" }}
                alt="Weaving"
              />
            </a>
          </div>
        </div>
        <div>
          <Carousel
            fade
            style={{ float: "left", width: "100%", height: "500px" }}
          >
            <Carousel.Item style={{ height: "500px" }}>
              <img
                className="d-block w-100"
                src={a}
                alt="First slide"
                style={{ height: "500px" }}
              />
            </Carousel.Item>
            <Carousel.Item style={{ height: "500px" }}>
              <img
                className="d-block w-100"
                src={b}
                alt="Second slide"
                style={{ height: "500px" }}
              />
            </Carousel.Item>
            <Carousel.Item style={{ height: "500px" }}>
              <img
                className="d-block w-100"
                src={c}
                alt="Third slide"
                style={{ height: "500px" }}
              />
            </Carousel.Item>
            <Carousel.Item style={{ height: "500px" }}>
              <img
                className="d-block w-100"
                src={d}
                alt="Four slide"
                style={{ height: "500px" }}
              />
            </Carousel.Item>
            <Carousel.Item style={{ height: "500px" }}>
              <img
                className="d-block w-100"
                src={e}
                alt="Five slide"
                style={{ height: "500px" }}
              />
            </Carousel.Item>
            <Carousel.Item style={{ height: "500px" }}>
              <img
                className="d-block w-100"
                src={f}
                alt="Six slide"
                style={{ height: "500px" }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <h2 style={{ textAlign: "center", marginBottom: "-20px" }}>
          Latest Products
        </h2>
        <hr class="border border-secondary border-3 opacity-75"></hr>
        <div style={{ marginBottom: "1%" }}>
          <Carousel
            fade
            style={{ float: "left", width: "100%", height: "500px" }}
          >
            <Carousel.Item style={{ height: "700px" }}>
              <div style={{ display: "flex", cursor: "pointer" }}>
                {products.map((product) => (
                  <div
                    class="card"
                    style={{ width: "100%", margin: "2%" }}
                    onClick={() => displayProduct(product._id)}
                  >
                    <img
                      src={product.imageUrl[0]}
                      class="card-img-top"
                      alt="..."
                      style={{ height: "300px" }}
                    />
                    <div class="card-body">
                      <p class="card-text">{product.productName}</p>
                      &#x20B9;{product.price}
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div class="container" style={{ marginTop: "650px" }}>
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <span class="nav-link px-2 text-muted">Jheel Shah</span>
            </li>
            <li class="nav-item">
              <span class="nav-link px-2 text-muted">Janesh Vyas</span>
            </li>
            <li class="nav-item">
              <span class="nav-link px-2 text-muted">Hetav Trivedi</span>
            </li>
          </ul>
          <p class="text-center text-muted">© 2023 CraftCart.Inc</p>
        </footer>
      </div>
    </div>
  );
};

export default Homepage;
