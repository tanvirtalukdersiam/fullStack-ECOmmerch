import React from "react";
import Container from "./Container";
import Image from "./image";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Products = ({ pimage, isNew, pInfo }) => {
  return (
    <Link to={`/productDetails/${pInfo && pInfo._id}`}>
      <div className="relative sm:w-[335px] w-[372px]">
        <div className="relative group">
          <Image className=" h-[350px] object-cover" src={pimage} />

          <div className="w-full bg-white/60 h-[155px] absolute bottom-0 left-0 hidden group-hover:block ">
            <List className="p-6 flex flex-col gap-3">
              <ListItem className="flex items-center justify-end gap-2">
                <h4 className=" font-normal text-[16px] text-secondary leading-[30px]  font-dm">
                  Add to Wish List
                </h4>{" "}
                <FaHeart className="text-[16px]" />
              </ListItem>
              <ListItem className="flex items-center justify-end gap-2">
                <h4 className=" font-normal text-[16px] text-secondary leading-[30px]  font-dm">
                  Compare
                </h4>{" "}
                <TfiReload className="text-[16px] font-bold" />
              </ListItem>
              <ListItem className="flex items-center justify-end gap-2">
                <h4 className=" font-normal text-[16px] text-secondary leading-[30px]  font-dm">
                  Add to Cart
                </h4>{" "}
                <FaShoppingCart className="text-[16px]" />
              </ListItem>
            </List>
          </div>
        </div>
        {isNew && (
          <h3 className="bg-primary font-sm font-bold py-2 px-8 inline-block text-white absolute top-5 left-5 ">
            New
          </h3>
        )}
        <Flex className="justify-between mt-5">
          <h4 className="font-bold text-[20px] leading-[26px] text-primary font-dm">
            {pInfo
              ? `${pInfo.name.slice(0, 25)}...`
              : "Basic Crew Neck Tee Copy"}
          </h4>
          <h5 className="font-normal text-[16px] text-secondary leading-[30px]  font-dm">
            $44
          </h5>
        </Flex>
        <h5 className="mt-2 mb-2 font-normal text-[17px] text-secondary leading-[30px]  font-dm">
          {pInfo ? pInfo.cuisine : "Indian"}
        </h5>
      </div>
    </Link>
  );
};

export default Products;
