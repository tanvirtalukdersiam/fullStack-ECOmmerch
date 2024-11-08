import React, { useState } from "react";
import List from "./List";
import ListItem from "./ListItem";
import { FiPlus } from "react-icons/fi";
import Subcategory from "./Subcategory";
import Category from "./Category";

const ShopByCategory = () => {
  let [subCategoryShow, setSubCategoryShow] = useState(false);
  return (
    <div>
      <h3 className="font-bold text-xl text-primary mb-4">Shop By Category</h3>
      <Category categoryName="Category 1" subCategoryShow={true} />
      <Category categoryName="Category 2" subCategoryShow={false} />
      <Category categoryName="Category 3" subCategoryShow={true} />
    </div>
  );
};

export default ShopByCategory;
