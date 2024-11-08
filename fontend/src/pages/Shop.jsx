import React, { useEffect, useState } from "react";
import Container from "../Components/Container";
import BreadCrumb from "../Components/BreadCrumb";
import Flex from "../Components/Flex";
import ShopByCategory from "../Components/ShopByCategory";
import ShopbyColor from "../Components/ShopbyColor";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa6";
import axios from "axios";
import Products from "../Components/Products";
import Pagination from "../Components/Pagination";

const Shop = ({ title }) => {
  let [product, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    function getProducts() {
      axios
        .get(" http://localhost:3500/api/v1/product/allProduct")
        .then((data) => {
          setProducts(data.data.getAllProduct);
          setLoading(false);
        });
    }
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <BreadCrumb title={title} />
        <Flex className=" mt-16 gap-16 ">
          <div className="w-[20%] ">
            <ShopByCategory />
            <ShopbyColor />
          </div>
          <div className="w-[80%] ">
            <div className="w-full flex justify-between">
              <div className=" ">
                <div className="bg-primary p-3 rounded-[3px]  text-white inline-block hover:bg-white hover:border-primary border border-transparent hover:text-secondary hover:duration-200">
                  <IoGrid />
                </div>
                <div className="bg-primary p-3 rounded-[3px]  text-white inline-block hover:bg-white hover:border-primary border border-transparent hover:text-secondary hover:duration-200 ml-5">
                  <FaListUl />
                </div>
              </div>
              <div className=" ">
                <div className="flex gap-10">
                  <div className="flex items-center gap-3">
                    <label
                      htmlFor="countries"
                      className="block  text-sm font-medium text-gray-900 whitespace-nowrap"
                    >
                      Sort by:
                    </label>
                    <select
                      id="countries"
                      className="bg-gray-50 border w-[239px] border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5   "
                    >
                      <option selected="">Featured</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-3">
                    <label
                      htmlFor="countries"
                      className="block  text-sm font-medium text-gray-900 whitespace-nowrap"
                    >
                      Show:
                    </label>
                    <select
                      id="countries"
                      className="bg-gray-50 border w-[139px] border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5   "
                    >
                      <option selected="">8</option>
                      <option value="US">16</option>
                      <option value="CA">24</option>
                      <option value="FR">32</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* products start */}
            <section className="mt-14">
              {loading ? (
                <div role="status" className="space-y-2.5 animate-pulse w-full">
                  <div className="flex items-center w-full">
                    <div className="h-2.5 bg-gray-200 rounded-full  w-full" />
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full" />
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full" />
                  </div>
                  <div className="flex items-center w-full max-w-[480px]">
                    <div className="h-2.5 bg-gray-200 rounded-full w-full" />
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full" />
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full" />
                  </div>
                  <div className="flex items-center w-full max-w-[400px]">
                    <div className="h-2.5 bg-gray-300 rounded-full w-full" />
                    <div className="h-2.5 ms-2 bg-gray-200 rounded-full w-full" />
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full" />
                  </div>
                  <div className="flex items-center w-full max-w-[480px]">
                    <div className="h-2.5 ms-2 bg-gray-200 rounded-full w-full" />
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full" />
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full w-full" />
                  </div>
                  <div className="flex items-center w-full max-w-[440px]">
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32" />
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
                    <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
                  </div>
                  <div className="flex items-center w-full max-w-[360px]">
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
                    <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
                    <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
                  </div>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <Pagination
                  itemsPerPage={6}
                  loading={loading}
                  carts={product}
                />
              )}
            </section>
            {/* products end */}
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Shop;
