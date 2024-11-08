import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { TbArrowsExchange } from "react-icons/tb";
import List from "./List";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import Input from "./Input";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import Image from "./image";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";

const Header = () => {
  let [category, setCatagory] = useState(false);
  let [user, setUser] = useState(false);
  let [card, setCard] = useState(false);
  let [getCategory, setGetCategory] = useState([]);

  let categoryRaf = useRef();
  let userRaf = useRef();
  let cardRaf = useRef();
  useEffect(() => {
    document.addEventListener("click", function (e) {
      if (categoryRaf.current.contains(e.target)) {
        setCatagory(!category);
      } else {
        setCatagory(false);
      }
      if (userRaf.current.contains(e.target)) {
        setUser(true);
      } else {
        setUser(false);
      }
      if (cardRaf.current.contains(e.target)) {
        setCard(true);
      } else {
        setCard(false);
      }
    });
  }, [category]);

  useEffect(() => {
    let getCategory = () => {
      axios
        .get("http://localhost:3500/api/v1/category/allCategory")
        .then((data) => {
          setGetCategory(data.data.category);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getCategory();
  }, []);
  return (
    <header className="bg-headerBg py-6">
      <Container>
        <Flex className="justify-between items-center gap-4 lg:gap-0">
          <Flex dref={categoryRaf} className="items-center gap-3 relative">
            <TbArrowsExchange className="text-[22px]" />
            <p className="text-[16px] font-normal text-primary font-dm select-none hidden lg:block ">
              Shop by Category
            </p>
            <div>
              {category && (
                <List className="absolute top-10 left-0 w-[263px] bg-black  z-50">
                  {getCategory.map((item) => (
                    <ListItem className="border-b border-[#767676]">
                      <Link className="capitalize text-[16px] font-normal text-secondary font-dm pl-5 py-4 inline-block hover:font-bold hover:text-white hover:ml-[10px] duration-500">
                        {item.name}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              )}
            </div>
          </Flex>
          <div className="w-[601px]">
            <Input
              placeholder="Search Products"
              className="w-full h-[45px] bg-white placeholder:text-sm lg:placeholder:text-base pl-2 lg:pl-5 rounded-[4px] "
              type="text"
            />
          </div>
          <Flex className="items-center gap-2 lg:gap-4 relative ">
            <Flex dref={userRaf} className=" gap-1 lg:gap-2 items-center">
              <div>
                <CgProfile className="text-[25px]" />
                {user && (
                  <div className="w-[200px] shadow-[#F0F0F0] absolute top-[40px] right-[40px] z-50 ">
                    <Link className="block font-dm text-[16px] py-4 bg-[#fff]  text-black text-center hover:bg-[#2B2B2B] hover:font-semibold hover:text-white duration-300 rounded-[3px] border-b ">
                      My Account
                    </Link>
                    <Link className="block font-dm text-[16px] py-4 bg-[#fff]  text-black text-center hover:bg-[#2B2B2B] hover:font-semibold hover:text-white duration-300 rounded-[3px]">
                      Log Out
                    </Link>
                  </div>
                )}
              </div>
              <FaCaretDown />
            </Flex>
            <div ref={cardRaf}>
              <FaShoppingCart className="text-[23px]" />
              {card && (
                <div className="w-[360px] absolute top-10 right-0  shadow-sm ">
                  <div className="bg-headerBg ">
                    <Flex className="items-center justify-between gap-5 p-5">
                      <Image src="images/card.png"></Image>
                      <div>
                        <h4 className="font-dm text-[15px] font-bold">
                          Black Smart Watch
                        </h4>
                        <h5 className="font-dm text-[15px] font-bold">
                          $44.00{" "}
                        </h5>
                      </div>
                      <IoCloseSharp />
                    </Flex>
                  </div>
                  <div className="px-5 py-3 border-x-2 border-b-2 rounded-b-[3px]">
                    <h5 className="text-[17px]  font-dm font-normal">
                      Subtotal: <span className="font-bold"> $44.00</span>
                    </h5>
                    <Link className="inline-block px-[39px] text-[16px]  font-bold py-[14px] border-2 mr-[8px] rounded-[4px] hover:bg-[#262626] hover:text-white text-[#262626] duration-500 hover:rounded-[4px]">
                      View Cart
                    </Link>
                    <Link className="inline-block px-[39px] text-[16px]  font-bold py-[14px] border-2  rounded-[4px] hover:bg-[#262626] hover:text-white text-[#262626] duration-500 hover:rounded-[4px]">
                      Checkout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
