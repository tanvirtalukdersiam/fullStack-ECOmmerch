import React from "react";
import List from "./List";
import ListItem from "./ListItem";

const ColorCategory = ({ colorCode, colorName }) => {
  return (
    <div>
      {" "}
      <List>
        <div className="flex items-center gap-3 py-[18px] border-b border-[#f0f0f0]">
          <div
            style={{ background: `${colorCode}` }}
            className={`h-[10px] w-[10px]  rounded-full`}
          ></div>
          <ListItem className="  relative text-[16px] text-secondary  font-dm font-normal">
            {colorName}
          </ListItem>
        </div>
      </List>
    </div>
  );
};

export default ColorCategory;
