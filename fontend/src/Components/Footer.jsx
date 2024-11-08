import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";
import Image from "./image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="my-[60px]">
      <Container>
        <Flex className="justify-between flex-col lg:flex-row">
          <div className="w-[265px] ">
            <h2>MENU</h2>
            <List>
              <ListItem>
                <Link>Home</Link>
              </ListItem>
              <ListItem>
                <Link>Shop</Link>
              </ListItem>
              <ListItem>
                <Link>About</Link>
              </ListItem>
              <ListItem>
                <Link>Contact</Link>
              </ListItem>
              <ListItem>
                <Link>Journal</Link>
              </ListItem>
            </List>
          </div>
          <div className="w-[270px] ">
            <h2>SHOP</h2>
            <List>
              <ListItem>
                <Link>Category 1</Link>
              </ListItem>
              <ListItem>
                <Link>Category 1</Link>
              </ListItem>
              <ListItem>
                <Link>Category 1</Link>
              </ListItem>
              <ListItem>
                <Link>Category 1</Link>
              </ListItem>
              <ListItem>
                <Link>Category 1</Link>
              </ListItem>
            </List>
          </div>
          <div className="w-[280px] ">
            <h2>HELP</h2>
            <List>
              <ListItem>
                <Link>Privacy Policy</Link>
              </ListItem>
              <ListItem>
                <Link>Terms & Conditions</Link>
              </ListItem>
              <ListItem>
                <Link>Special E-shop</Link>
              </ListItem>
              <ListItem>
                <Link>Shipping</Link>
              </ListItem>
              <ListItem>
                <Link>Secure Payments</Link>
              </ListItem>
            </List>
          </div>
          <div className="w-[350px] ">
            <h4>(052) 611-5711 compa</h4>
            <h4>company@domain.com</h4>
            <h6>575 Crescent Ave. Quakertown, PA 18951</h6>
          </div>
          <div className="w-[125px]">
            <div className="mt-7 ml-12">
              <List>
                <ListItem>
                  <FaFacebookF className="text-[22px] mb-[16px]" />
                </ListItem>
                <ListItem>
                  <FaLinkedinIn className="text-[22px] mb-[16px]" />
                </ListItem>
                <ListItem>
                  <FaInstagram className="text-[22px] mb-[10px]" />
                </ListItem>
              </List>
            </div>
          </div>
          <div className="w-[280px] ">
            <Image className="ml-[70px] mt-14" src="images/FLogo.png" />
          </div>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
