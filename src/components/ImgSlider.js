import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    centerMode: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  padding-top: 15px;
  position: relative;

  ul li button {
    &::before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: #fff;
  }

  /* button {
    z-index: 10;
  } */

  /* .slick-list {
    overflow: visible;
  } */

  button[class~="slick-prev"] {
    position: absolute;
    left: 20px;
    z-index: 1;
  }

  button[class~="slick-next"] {
    position: absolute;
    right: 20px;
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 4px solid transparent;
    transition-duration: 0.3s;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
