import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
const AddProducts = () => {
  const [image, setImage] = useState(null);
  const [allCategory, setAllCAtegory] = useState([]);
  const [allStore, setAllStore] = useState([]);
  let [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  let [category, setCategory] = useState(null);
  let [sellingprice, setSellingPrice] = useState(null);
  let [price, setPrice] = useState(null);
  let [storeId, setStoreId] = useState(null);
  let data = useSelector((state) => state.userInfo.value);
  let handleSubmit = (e) => {
    e.preventDefault();
    let forData = new FormData();
    forData.append("name", name);
    forData.append("description", description);
    forData.append("image", image);
    forData.append("category", category);
    forData.append("sellingprice", sellingprice);
    forData.append("price", price);
    forData.append("storeId", storeId);
    forData.append("sellerId", data._id);
    axios
      .post(" http://localhost:3500/api/v1/product/createProduct", forData)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    function AllCategory() {
      axios
        .get(" http://localhost:3500/api/v1/category/allCategory")
        .then((data) => {
          setAllCAtegory(data.data.category);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    AllCategory();
    function AllStore() {
      axios
        .get(" http://localhost:3500/api/v1/store/allStore")
        .then((data) => {
          setAllStore(data.data.allStore);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    AllStore();
  }, []);

  return (
    <div className="bg-[#f2f7fb] w-full mr-4">
      <div className="bg-white w-[97%] h-[95%] my-[25px] mx-auto rounded-[8px] px-8 py-9">
        <div className="w-[450px]">
          <div className="mt-3">
            <h3 className="font-nunito font-medium text-[26px]">
              Add Products
            </h3>
          </div>
          <div className="mt-4">
            <h5 className="font-medium text-[16px]">Products Name</h5>
            <input
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-[10px] w-[450px] border border-1 outline-none rounded-[4px] mt-1"
              type="text"
              placeholder="Product name"
            />
          </div>
          <div className=" mt-4 ">
            <h5 className="font-medium text-[16px] mb-1">
              Products Decapitation
            </h5>
            <ReactQuill
              className=" w-[450px]"
              theme="snow"
              value={description}
              onChange={setDescription}
            />
          </div>
          <div className="mt-4">
            <label className="mb-1">Product Image</label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              className="my-2 block rounded-[3px] w-full text-[16px] text-gray-900 border "
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
            />
            {image && (
              <img
                className="h-[200px] w-[230px] "
                src={URL.createObjectURL(image)}
                alt=""
                srcset=""
              />
            )}
          </div>
          <div className="mt-4">
            <label className="font-medium text-[16px] mb-1">
              Products Category
            </label>

            <select
              onChange={(e) => setCategory(e.target.value)}
              className="w-[445px] border border-1 rounded-[4px] px-3 py-2 mt-1"
              name=""
              id=""
            >
              {allCategory.map((item) => (
                <option key={item.key} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <span className="font-medium text-[16px] mb-1">Store</span>

            <select
              onChange={(e) => setStoreId(e.target.value)}
              className="w-[445px] border border-1 rounded-[4px] px-3 py-2 mt-1"
              name=""
              id=""
            >
              {allStore.map((item) => (
                <option key={item.key} value={item._id}>
                  {" "}
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <label className="block font-medium text-[16px] mb-1" htmlFor="">
                Product Seeling Price
              </label>
              <input
                onChange={(e) => setSellingPrice(e.target.value)}
                className="border border-1 py-2 px-3 outline-none rounded-[3px]"
                type="number"
                name=""
                id=""
              />
            </div>
            <div>
              <label className="block font-medium text-[16px] mb-1" htmlFor="">
                Product Price
              </label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                className="border border-1 py-2 px-3 outline-none rounded-[3px]"
                type="number"
              />
            </div>
          </div>
          <div className="mt-8">
            <Link
              onClick={handleSubmit}
              className="  block text-center px-10 py-3 bg-slate-500 text-white font-medium w-[450px]"
            >
              Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
