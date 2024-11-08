import React from "react";
import Container from "./Container";
import Title from "./Title";
import Products from "./Products";
import Flex from "./Flex";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { ImArrowRight2 } from "react-icons/im";
import { ImArrowLeft2 } from "react-icons/im";

const NArrivale = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !w-[34px] !h-[34px] lg:!h-[55px] lg:!w-[55px] !right-0 lg:!right-[55px]`}
        style={{
          ...style,
          display: "block",

          height: "55px",
          width: "55px",
          backgroundColor: "#00000033",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          transform: "translateY(-50%)",
          right: "55px",
          top: "42%",
          zIndex: "991",
        }}
        onClick={onClick}
      >
        <ImArrowRight2 className="text-[20px] text-white" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !w-[34px] !h-[34px] lg:!h-[55px] lg:!w-[55px]`}
        style={{
          ...style,
          display: "block",
          height: "55px",
          width: "55px",
          backgroundColor: "#00000033",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          left: "0px",

          transform: "translateY(-50%)",
          top: "42%",
          zIndex: "991",
        }}
        onClick={onClick}
      >
        <ImArrowLeft2 className="text-[20px] text-white" />
      </div>
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="my-[115px]">
      <Container>
        <Title className="mb-11" heading="New Arrivals" />

        <Slider {...settings}>
          <Products pimage="images/newArrival-2.png" isNew={true} />
          <Products pimage="images/newArrival-2.png" isNew={true} />
          <Products pimage="images/newArrival-2.png" isNew={false} />
          <Products pimage="images/newArrival-2.png" isNew={true} />
          <Products pimage="images/newArrival-2.png" isNew={true} />
        </Slider>
        {/* <Flex className="justify-between flex-wrap xl:flex-nowrap">
          <Products pimage="images/newArrival-2.png" isNew={true} />
          <Products pimage="images/newArrival-2.png" isNew={false} />
          <Products pimage="images/newArrival-2.png" isNew={true} />
          <Products pimage="images/newArrival-2.png" isNew={true} />
        </Flex> */}
      </Container>
    </div>
  );
};

export default NArrivale;
