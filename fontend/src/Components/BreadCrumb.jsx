import React from "react";
import List from "./List";
import ListItem from "./ListItem";
import { FaAngleRight } from "react-icons/fa6";
const BreadCrumb = ({ title }) => {
  return (
    <div className="mt-[75px]">
      <h4 className="text-[49px] font-dm font-bold text-primary capitalize">
        {/* {window.location.pathname.split("/")[1]} */}
        {title}
      </h4>
      <List className="flex items-center gap-2">
        <ListItem>Home</ListItem>
        <ListItem>
          <FaAngleRight />
        </ListItem>
        <ListItem>{window.location.pathname.split("/")[1]}</ListItem>
      </List>
    </div>
  );
};

export default BreadCrumb;
