import React from 'react'
import Navigation from '../components/Navigation'
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
        <div style={{display: "flex", width: "100%", marginTop: "-2%"}}>
            <div style={{width: "10%", margin: "2%", textAlign: "center"}}>
                <a href='#' style={{arrow: "pointer"}}>
                <img src={one} style={{width: "50%", height: "60px"}} />
                <h6>Pottery</h6>
                </a>
            </div>

            <div style={{width: "10%", margin: "2%", textAlign: "center"}}>
                <a href='#' style={{arrow: "pointer"}}>
                <img src={two} style={{width: "50%", height: "60px"}} />
                <h6>Leather</h6>
                </a>
            </div>

            <div style={{width: "10%", margin: "2%", textAlign: "center"}}>
                <a href='#' style={{arrow: "pointer"}}>
                <img src={three} style={{width: "50%", height: "60px"}} />
                <h6>Brass</h6>
                </a>
            </div>

            <div style={{width: "10%", margin: "2%", textAlign: "center"}}>
                <a href='#' style={{arrow: "pointer"}}>
                <img src={four} style={{width: "50%", height: "60px"}} />
                <h6>Paintings</h6>
                </a>
            </div>

            <div style={{width: "10%", margin: "2%", textAlign: "center"}}>
                <a href='#' style={{arrow: "pointer"}}>
                <img src={five} style={{width: "50%", height: "60px"}} />
                <h6>Jute</h6>
                </a>
            </div>

            <div style={{width: "10%", margin: "2%", textAlign: "center"}}>
                <a href='#' style={{arrow: "pointer"}}>
                <img src={one} style={{width: "50%", height: "60px"}} />
                <h6>Clothing</h6>
                </a>
            </div>

            <div style={{width: "10%", margin: "2%", textAlign: "center"}}>
                <a href='#' style={{arrow: "pointer"}}>
                <img src={two} style={{width: "50%", height: "60px"}} />
                <h6>Carpet</h6>
                </a>
            </div>

            <div style={{width: "10%", margin: "2%", textAlign: "center"}}>
                <a href='#' style={{arrow: "pointer"}}>
                <img src={two} style={{width: "50%", height: "60px"}} />
                <h6>Weaving</h6>
                </a>
            </div>

        </div>

        <div>

        <Carousel fade style={{float: "left", width: "100%", height: "200px"}}>
      <Carousel.Item style={{height: "200px"}}>
        <img
          className="d-block w-100"
          src={one}
          alt="First slide"
          style={{height: "200px"}}
        />
      </Carousel.Item>
      <Carousel.Item style={{height: "200px"}}>
        <img
          className="d-block w-100"
          src={two}
          alt="Second slide"
          style={{height: "200px"}}
        />
      </Carousel.Item>
      <Carousel.Item style={{height: "200px"}}>
        <img
          className="d-block w-100"
          src={three}
          alt="Third slide"
          style={{height: "200px"}}
        />
      </Carousel.Item>
      <Carousel.Item style={{height: "200px"}}>
        <img
          className="d-block w-100"
          src={four}
          alt="Four slide"
          style={{height: "200px"}}
        />
      </Carousel.Item>
      <Carousel.Item style={{height: "200px"}}>
        <img
          className="d-block w-100"
          src={five}
          alt="Five slide"
          style={{height: "200px"}}
        />
      </Carousel.Item>
    </Carousel>

        </div>


    </div>
  )
}

export default Homepage