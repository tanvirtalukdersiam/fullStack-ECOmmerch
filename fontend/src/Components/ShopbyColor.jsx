import React from "react";
import List from "./List";
import ListItem from "./ListItem";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import ColorCategory from "./ColorCategory";
const ShopbyColor = () => {
  let [shopByColor, setSHopByCOlor] = useState(false);
  return (
    <div>
      <div
        onClick={() => setSHopByCOlor(!shopByColor)}
        className="flex justify-between items-center  mt-[40px]  mb-4"
      >
        <h3 className="font-bold text-xl text-primary">Shop By Color</h3>
        {shopByColor ? <FaAngleUp /> : <FaAngleDown />}
      </div>
      {shopByColor && (
        <div>
          <ColorCategory colorName="Color 1" colorCode="#ff0000" />
          <ColorCategory colorName="Color 2" colorCode="#ff0000" />
        </div>
      )}
    </div>
  );
};

export default ShopbyColor;
