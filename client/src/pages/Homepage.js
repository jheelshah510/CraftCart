import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import one from "../components/1.png";
import two from "../components/2.png";
import three from "../components/3.png";
import four from "../components/4.png";
import five from "../components/5.png";
import Carousel from "react-bootstrap/Carousel";
import a from "../images/a.png";

import b from "../images/b.png";

import c from "../images/c.png";

import d from "../images/d.png";

import e from "../images/e.png";

import f from "../images/f.png";
import axios from "axios";
import Loading from "../components/Loading";

const Homepage = () => {
  const [products, setProducts] = useState([]);
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
  return (
    <div>
      <Navigation />
      <br />
      <div style={{ display: "flex", width: "100%", marginTop: "-0%" }}>
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
              src={one}
              style={{ width: "120%", height: "60px" }}
              alt="Pottery"
            />
            <h6>Pottery</h6>
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
              src={two}
              style={{ width: "130%", height: "60px" }}
              alt="leather"
            />
            <h6>Leather</h6>
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
              src={three}
              style={{ width: "130%", height: "60px" }}
              alt="brass"
            />
            <h6>Brass</h6>
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
              src={four}
              style={{ width: "130%", height: "60px" }}
              alt="Painting"
            />
            <h6>Paintings</h6>
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
              src={five}
              style={{ width: "130%", height: "60px" }}
              alt="Jute"
            />
            <h6>Jute</h6>
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
              src={one}
              style={{ width: "130%", height: "60px" }}
              alt="Clothing"
            />
            <h6>Clothing</h6>
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
              src={two}
              style={{ width: "130%", height: "60px" }}
              alt="Carpet"
            />
            <h6>Carpet Weaving</h6>
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
              src={two}
              style={{ width: "130%", height: "60px" }}
              alt="Weaving"
            />
            <h6>Weaving</h6>
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
      <h2>Top Picks</h2>   {" "}
      <hr class="border border-secondary border-3 opacity-75"></hr>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        style={{ float: "left", width: "100%", height: "200px" }}
      >
         {" "}
        <div
          class="carousel-indicators"
          style={{ float: "left", width: "100%", height: "200px" }}
        >
             {" "}
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
             {" "}
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
             {" "}
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
           {" "}
        </div>
         {" "}
        <div class="carousel-inner">
             {" "}
          <div class="carousel-item active">
                     {" "}
            <div style={{ display: "flex" }}>
                 {" "}
              <div class="card" style={{ width: "20vw", margin: "2%" }}>
                  <img src={one} class="card-img-top" alt="..." /> {" "}
                <div class="card-body">
                     {" "}
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                   {" "}
                </div>
              </div>
              <div class="card" style={{ width: "20vw", margin: "2%" }}>
                  <img src={one} class="card-img-top" alt="..." /> {" "}
                <div class="card-body">
                     {" "}
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                   {" "}
                </div>
              </div>
              <div class="card" style={{ width: "20vw", margin: "2%" }}>
                  <img src={one} class="card-img-top" alt="..." /> {" "}
                <div class="card-body">
                     {" "}
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                   {" "}
                </div>
                 {" "}
              </div>
               {" "}
              <div class="card" style={{ width: "20vw", margin: "2%" }}>
                  <img src={one} class="card-img-top" alt="..." /> {" "}
                <div class="card-body">
                     {" "}
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                   {" "}
                </div>
                 {" "}
              </div>
                 {" "}
            </div>
               {" "}
          </div>
             {" "}
          <div class="carousel-item">
                     {" "}
            <div style={{ display: "flex" }}>
              <div class="card" style={{ width: "20vw", margin: "2%" }}>
                <img src={one} class="card-img-top" alt="..." />

                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>

              <div class="card" style={{ width: "20vw", margin: "2%" }}>
                <img src={one} class="card-img-top" alt="..." />

                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>

              <div class="card" style={{ width: "20vw", margin: "2%" }}>
                <img src={one} class="card-img-top" alt="..." />

                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>

              <div class="card" style={{ width: "20vw", margin: "2%" }}>
                <img src={one} class="card-img-top" alt="..." />

                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
               {" "}
          </div>
           {" "}
        </div>
         {" "}
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
             {" "}
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>   {" "}
          <span class="visually-hidden">Previous</span> {" "}
        </button>
         {" "}
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
             {" "}
          <span class="carousel-control-next-icon" aria-hidden="true"></span>   {" "}
          <span class="visually-hidden">Next</span> {" "}
        </button>
      </div>
    </div>
  );
};

export default Homepage;
