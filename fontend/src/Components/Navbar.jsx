import React, { useEffect, useState } from "react";
import Image from "./image";
import Container from "./Container";
import List from "./List";
import ListItem from "./ListItem";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
const Navbar = () => {
  let [menu, setMenu] = useState(true);
  let handleMenu = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    function navbar(e) {
      if (window.innerWidth < 1024) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    }
    navbar();
    window.addEventListener("resize", navbar);
  }, []);
  return (
    <nav className="bg-white py-8">
      <Container>
        <Flex className="justify-between items-center">
          <Image src="images/Logo.png"></Image>

          {menu ? (
            <IoMdCloseCircle
              onClick={handleMenu}
              className="lg:hidden text-[24px] absolute top-[28px] right-5 font-bold duration-300"
            />
          ) : (
            <FaBarsStaggered
              onClick={handleMenu}
              className="lg:hidden text-[18px] absolute top-[30px] right-5"
            />
          )}

          {menu && (
            <List className="gap-11 absolute top-11 right-5 lg:static lg:flex">
              <ListItem className="mb-[2px]">
                <Link className="text-[18px] text-secondary font-normal hover:font-medium hover:text-primary font-dm">
                  Home
                </Link>
              </ListItem>
              <ListItem className="mb-[2px]">
                <Link
                  to="/shop"
                  className="text-[18px] text-secondary font-normal hover:font-medium hover:text-primary font-dm"
                >
                  Shop
                </Link>
              </ListItem>
              <ListItem className="mb-[2px]">
                <Link
                  to={"/about"}
                  className="text-[18px] text-secondary font-normal hover:font-medium hover:text-primary font-dm"
                >
                  About
                </Link>
              </ListItem>
              <ListItem className="mb-[2px]">
                <Link
                  to={"/contacts"}
                  className="text-[18px] text-secondary font-normal hover:font-medium hover:text-primary font-dm"
                >
                  Contacts
                </Link>
              </ListItem>
              <ListItem>
                <Link className="text-[18px] text-secondary font-normal hover:font-medium hover:text-primary font-dm">
                  Journal
                </Link>
              </ListItem>
            </List>
          )}
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
