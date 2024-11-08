import React from "react";
import List from "./List";
import ListItem from "./ListItem";

const Subcategory = ({ subShow }) => {
  return (
    <div>
      {subShow && (
        <List>
          <ListItem className=" ml-5 border-b py-4 border-[#F0F0F0] flex justify-between items-center text-[16px] text-secondary leading-7 font-dm font-normal">
            Sub Category One
          </ListItem>
          <ListItem className=" ml-5 border-b py-4 border-[#F0F0F0] flex justify-between items-center text-[16px] text-secondary leading-7 font-dm font-normal">
            Sub Category Two
          </ListItem>
        </List>
      )}
    </div>
  );
};

export default Subcategory;
