import React from "react";
import Navigation from "../components/Navigation";
import one from "../components/1.png";
import two from "../components/2.png";
import three from "../components/3.png";
import four from "../components/4.png";
import five from "../components/5.png";
import Carousel from "react-bootstrap/Carousel";

const Homepage = () => {
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
          <a href="/" style={{ arrow: "pointer" }}>
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
          <a href="/" style={{ arrow: "pointer" }}>
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
          <a href="/" style={{ arrow: "pointer" }}>
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
          <a href="/" style={{ arrow: "pointer" }}>
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
          <a href="/" style={{ arrow: "pointer" }}>
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
          <a href="/" style={{ arrow: "pointer" }}>
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
          <a href="/" style={{ arrow: "pointer" }}>
            <img
              src={two}
              style={{ width: "130%", height: "60px" }}
              alt="Carpet"
            />
            <h6>Carpet</h6>
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
          style={{ float: "left", width: "100%", height: "400px" }}
        >
          <Carousel.Item style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src={one}
              alt="First slide"
              style={{ height: "400px" }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src={two}
              alt="Second slide"
              style={{ height: "400px" }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src={three}
              alt="Third slide"
              style={{ height: "400px" }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src={four}
              alt="Four slide"
              style={{ height: "400px" }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src={five}
              alt="Five slide"
              style={{ height: "400px" }}
            />
          </Carousel.Item>
        </Carousel>
        <Carousel
          fade
          style={{
            float: "left",
            width: "100%",
            height: "400px",
            marginTop: "1%",
          }}
        >
          <Carousel.Item style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src={one}
              alt="First slide"
              style={{ height: "400px" }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src={two}
              alt="Second slide"
              style={{ height: "400px" }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src={three}
              alt="Third slide"
              style={{ height: "400px" }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src={four}
              alt="Four slide"
              style={{ height: "400px" }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src={five}
              alt="Five slide"
              style={{ height: "400px" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Homepage;
