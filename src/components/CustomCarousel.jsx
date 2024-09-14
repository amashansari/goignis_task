import React from "react";
import { Carousel } from "react-bootstrap";
import carousel1 from "../assets/images/carousel-bg.webp";
import carousel2 from "../assets/images/carousel-bg-2.webp";

const AnimatedCarousel = () => {
  return (
    <Carousel interval={null} pause={true}>
      <Carousel.Item>
        <div className="carousel-img">
          <img src={carousel1} alt="First slide" />
        </div>
        <Carousel.Caption>
          <div className="animated-text">
            True remote assistance for Design and Engineering
          </div>
          <div className="animated-text-2">
            Save Time | Bid More Jobs | Design More Jobs
          </div>
          <div className="find-more-btn">Find More</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-img">
          <img src={carousel2} alt="Second slide" />
        </div>
        <Carousel.Caption>
        <div className="animated-text">
            True remote assistance for Design and Engineering
          </div>
          <div className="animated-text-2">
            Save Time | Bid More Jobs | Design More Jobs
          </div>
          <div className="find-more-btn">Find More</div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default AnimatedCarousel;