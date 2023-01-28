import Carousel from "react-bootstrap/Carousel";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import five from "./5.png";
import "./background.css";

function Background() {
  const style = {
    innerWidth: "70%",
    innerHeight: "100%",
  };
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          style={style}
          className="d-block w-100"
          src={one}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={style}
          className="d-block w-100"
          src={two}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={style}
          className="d-block w-100"
          src={three}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={style}
          className="d-block w-100"
          src={four}
          alt="Four slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={style}
          className="d-block w-100"
          src={five}
          alt="Five slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Background;
