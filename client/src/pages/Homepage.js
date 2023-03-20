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
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" style={{height: "300px"}}>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" style={{height: "300px"}} >
    <div class="carousel-item active">
      <img src={one} alt="..." />
    </div>
    <div class="carousel-item">
      <img src={two} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={three} class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>


    </div>
  )
}

export default Homepage