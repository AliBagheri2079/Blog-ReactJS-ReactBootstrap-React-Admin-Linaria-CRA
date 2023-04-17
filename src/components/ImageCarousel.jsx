import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

import FirstFood from "../assets/image/food-1.jpg";
import SecondFood from "../assets/image/food-2.jpg";
import ThirdFood from "../assets/image/food-3.jpg";
import FourthFood from "../assets/image/food-4.jpg";
import FifthFood from "../assets/image/food-5.jpg";

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      id="home"
      activeIndex={index}
      onSelect={handleSelect}
      variant="light"
      fade
    >
      {[FirstFood, SecondFood, ThirdFood, FourthFood, FifthFood].map(
        (item, index) => (
          <Carousel.Item key={index + Math.random()} interval={2000}>
            <Image
              className="w-100 vh-100 object-fit-cover rounded"
              src={item}
              alt={item}
            />
            <Carousel.Caption>
              <h3>Slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      )}
    </Carousel>
  );
};

export default ImageCarousel;
