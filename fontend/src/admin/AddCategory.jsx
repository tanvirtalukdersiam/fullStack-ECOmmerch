import axios from "axios";
import React, { useState } from "react";

const AddCategory = () => {
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");

  let handleName = (e) => {
    setName(e.target.value);
  };

  let handleDescription = (e) => {
    setDescription(e.target.value);
  };
  let handleSubmit = () => {
    axios
      .post(" http://localhost:3500/api/v1/category/createCategory", {
        name,
        description,
      })
      .then((data) => {
        name("");
        description("");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-[#f2f7fb] w-full mr-4">
      <div className="bg-white w-[97%] h-[80%] my-[90px] mx-auto rounded-[8px] px-8 py-9">
        <div>
          <div className="mt-5">
            <h3 className="font-dm font-medium text-[26px]">Add a Category</h3>
          </div>
          <div className="mt-5 ">
            <h5 className="font-medium text-[16px]">Category Name</h5>
            <input
              onChange={handleName}
              // onChange={(e) => }
              className="px-3 py-[10px] w-[450px] border border-1 outline-none rounded-[4px] mt-1"
              type="text"
              placeholder="Category name"
            />
          </div>
          <div className="mt-5">
            <h5 className="font-medium text-[16px]">Description</h5>
            <textarea
              onChange={handleDescription}
              // onChange={(e) => }
              className="px-3 py-[10px] w-[450px] border border-1 outline-none rounded-[4px] mt-1 h-[220px]"
              type="text"
              placeholder="Description"
            />
          </div>
          <div className="mt-2 ">
            <button
              onClick={handleSubmit}
              className="inline-block px-10 py-3 bg-slate-500 text-white font-medium w-[450px]"
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
