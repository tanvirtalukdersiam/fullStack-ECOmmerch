import React, { useEffect, useState } from "react";
import Container from "../Components/Container";
import BreadCrumb from "../Components/BreadCrumb";
import Flex from "../Components/Flex";
import Image from "../Components/image";
import List from "../Components/List";
import ListItem from "../Components/ListItem";
import { TiStarFullOutline } from "react-icons/ti";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

import axios from "axios";
import { FaStar } from "react-icons/fa";
const ProductDetiels = ({ title }) => {
  let navigate = useNavigate();
  let [product, setProduct] = useState({});
  let [rating, setRating] = useState(null);
  let [hover, setHover] = useState(null);
  let [message, setMessage] = useState("");
  let [review, setReview] = useState("");
  let [productId, setProductId] = useState("");
  let { id } = useParams();
  useEffect(() => {
    function getSingleProduct() {
      axios
        .get(`http://localhost:3500/api/v1/product/singleProduct/${id}`)
        .then((data) => {
          setProductId(data.data.singleProduct._id);
          setProduct(data.data.singleProduct);
        });
    }
    getSingleProduct();
  }, []);

  let handleMessage = (e) => {
    setMessage(e.target.value);
  };
  let handleRating = (e) => {
    setReview(e.target.value);
  };
  let handleaddcart = () => {
    axios
      .post("http://localhost:3000/api/v1/cart/addcart", {
        productId: productId,
        userId: userId,
        quantity: 1,
      })
      .then((data) => {
        console.log(data);
        // navigate("/cart");
        // navigate(`/cart/${cartdata._id}`)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Container>
        <BreadCrumb title={title} />
        <div className=" mt-[60px]">
          <div className="  h-[450px] w-[750px] ">
            <Image className="" src={product.image} />
          </div>

          {/* <div className="mt-12"> */}
          {/* <h4 className="font-dm font-semibold text-[52px]">Product</h4>
            <Flex className="gap-1 items-center">
              <TiStarFullOutline className="text-[20px] text-[#FFD881]" />
              <TiStarFullOutline className="text-[20px] text-[#FFD881]" />
              <TiStarFullOutline className="text-[20px] text-[#FFD881]" />
              <TiStarFullOutline className="text-[20px] text-[#FFD881]" />
              <TiStarFullOutline className="text-[20px] text-[#FFD881]" />
              <h3 className="ml-10 font-normal text-[#767676] text-[16px] font-dm">
                1 Review
              </h3>
            </Flex> */}

          {/* </div> */}
          <div className="flex gap-8 items-center mt-4 border-b pb-4 w-[768px] ">
            <h4 className="font-normal text-[#767676] text-[18px] font-dm">
              {product.sellingprice} Taka
            </h4>
            <h4 className="font-bold text-primary text-[20px] font-dm">
              {product.price} Taka
            </h4>
          </div>

          <div className="mt-6">
            <h3 className="text-[#262626] text-[16px] font-semibold inline">
              COLOR:
            </h3>
          </div>

          <Flex className="gap-3 items-center mt-[30px]">
            <div>
              <h3 className="text-[#262626] text-[16px] font-semibold inline">
                SIZE:
              </h3>
            </div>
            <select
              id="countries"
              className="bg-gray-50 border w-[139px] border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  px-[10px] py-[6px]   "
            >
              <option selected="">S</option>
              <option value="US">M</option>
              <option value="CA">L</option>
              <option value="FR">XL</option>
              <option value="DE">XXl</option>
            </select>
          </Flex>
          <div className="mt-[30px]">
            <h3 className="text-[#262626] text-[16px] font-semibold inline">
              QUANTITY:
            </h3>
          </div>
          <hr className="w-[750px] mt-8" />
          <Flex className="gap-7 items-center">
            <div className="my-7">
              <h3 className="text-[#262626] text-[16px] font-semibold inline font-dm">
                STATUS:
              </h3>
            </div>
            <div>
              <h4 className="text-[#767676] text-[15px] font-normal font-dm">
                In stock
              </h4>
            </div>
          </Flex>
          <hr className="w-[750px] " />
          <Flex className="mt-[35px] gap-4">
            <Link className="py-[14px] px-[40px] border  border-2 font-dm font-semibold text-[14px]">
              Add to Wish List
            </Link>
            <button
              onClick={handleaddcart}
              className="py-[15px] px-[55px]  font-dm font-semibold text-[14px] bg-black text-white"
            >
              Add to cart
            </button>
          </Flex>
          <hr className="w-[750px] mt-[35px]" />
          <div className="mt-3">
            <h4 className="text-[30px] font-bold font-dm text-primary">
              Give me a Review
            </h4>
            <div>
              <div className=" flex gap-2 mt-2">
                {[...Array(5)].map((star, index) => {
                  const currentRating = index + 1;
                  return (
                    <label>
                      <input
                        onChange={handleRating}
                        className="hidden"
                        type="radio"
                        name="rating"
                        value={currentRating}
                        onClick={() => setRating(currentRating)}
                      />

                      <FaStar
                        color={
                          currentRating <= (hover || rating)
                            ? "#FFFF00"
                            : "#808080"
                        }
                        className="cursor-pointer text-[22px] "
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </div>
              <p className="text-[#767676] text-[17px] font-dm mt-2">
                Your rating is {rating ? rating : "--"}
              </p>

              <div className="mt-2">
                <h3 className="text-[#262626] text-[16px] font-semibold  font-dm">
                  Message
                </h3>

                <textarea
                  onChange={handleMessage}
                  className=" h-[100px] p-3 w-[350px] outline-none rounded-[4px] border  border-1 mt-2 "
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetiels;
