import React, { useEffect, useState } from "react";
import Image from "./image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import axios from "axios";
const Banner = () => {
  let [active, setActive] = useState(0);
  let [bannerImage, setBannerImage] = useState([]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: (dots) => (
            <div
              style={{
                backgroundColor: "",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  position: "absolute",
                  top: "50%",
                  padding: "3px",
                  transform: "translateY(-50%)",
                  left: "4%",
                }}
              >
                {" "}
                {dots}{" "}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === active
                  ? {
                      width: "25px",
                      color: "#262626",
                      padding: "15px 0px",
                      borderRight: "3px #262626 solid",
                      fontSize: "16px",
                    }
                  : {
                      width: "25px",
                      color: "#262626",

                      padding: "19px 0px",
                      borderRight: "3px #fff solid",
                      fontSize: "0px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: (dots) => (
            <div
              style={{
                backgroundColor: "",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  position: "absolute",
                  top: "50%",
                  padding: "3px",
                  transform: "translateY(-50%)",
                  left: "3%",
                }}
              >
                {" "}
                {dots}{" "}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === active
                  ? {
                      width: "25px",
                      color: "#262626",
                      padding: "5px 0px",
                      borderRight: "3px #262626 solid",
                      fontSize: "16px",
                    }
                  : {
                      width: "25px",
                      color: "#262626",
                      padding: "12px 0px",
                      padding: "9px 0px",
                      borderRight: "3px #fff solid",
                      fontSize: "0px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
    beforeChange: (prev, next) => {
      setActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            margin: "0px",
            position: "absolute",
            padding: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            left: "9%",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === active
            ? {
                width: "32px",
                color: "#262626",
                padding: "15px 0px",
                borderRight: "3px #262626 solid",
                fontSize: "18px",
              }
            : {
                width: "35px",
                color: "#262626",

                padding: "19px 0px",
                borderRight: "3px #fff solid",
                fontSize: "0px",
              }
        }
      >
        0{i + 1}
      </div>
    ),
  };
  useEffect(() => {
    let getBanner = () => {
      axios
        .get("http://localhost:3500/api/v1/banner/getBannerImage")
        .then((data) => {
          setBannerImage(data.data.Images);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getBanner();
  }, []);

  return (
    <div>
      <Slider {...settings}>
        {bannerImage.map((item) => (
          <div>
            <Image src={item.image}></Image>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
