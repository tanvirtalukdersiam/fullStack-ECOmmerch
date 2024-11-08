import React, { useState } from "react";
import List from "./List";
import ListItem from "./ListItem";
import { FiPlus } from "react-icons/fi";
import Subcategory from "./Subcategory";

const Category = ({ categoryName, subCategoryShow }) => {
  let [subCategory, setSubcategory] = useState(false);
  return (
    <List>
      <ListItem
        onClick={() => setSubcategory(!subCategory)}
        className=" border-b py-4 border-[#F0F0F0] relative text-[16px] text-secondary leading-7 font-dm font-normal"
      >
        {categoryName}
        {subCategoryShow && <FiPlus className="absolute top-6 right-0" />}
      </ListItem>
      {subCategoryShow && <Subcategory subShow={subCategory} />}
    </List>
  );
};

export default Category;
