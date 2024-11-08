import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsToggle2On } from "react-icons/bs";
import { BsToggle2Off } from "react-icons/bs";

const UpdateCategory = () => {
  let userData = useSelector((state) => state.userInfo.value);
  let [allCategory, setAllCategory] = useState([]);
  let [active, SetActive] = useState(false);
  let getCategory = () => {
    axios
      .get("http://localhost:3500/api/v1/category/allCategory")
      .then((data) => {
        setAllCategory(data.data.category);
      });
  };
  useEffect(() => {
    getCategory();
  }, [allCategory]);

  let handleActive = (item) => {
    SetActive(!active);
    // axios.post("");
    console.log(item);
  };

  let handleCategoryDelete = (item) => {
    axios.post(" http://localhost:3500/api/v1/category/categoryDelete", {
      email: userData.email,
      category: item._id,
    });
  };
  return (
    <div className="bg-[#f2f7fb] w-full mr-4">
      <div className="bg-white w-[97%] h-[88%] my-[50px] mx-auto rounded-[8px]">
        <div className="ml-5 ">
          <input
            className="outline-none border border-1 pl-2 py-[8px] rounded-[4px] w-[370px] mt-5"
            type="text"
            placeholder="Search here"
          />
        </div>

        <div className="mt-5">
          <table className="w-[97%] mx-auto text-sm text-left rtl:text-right text-gray-500 -lg">
            <tr className="bg-[#f2f7fb] mx-auto  mt-5 px-4 py-3  ">
              <th scope="col" className="px-6 py-3">
                Category Name
              </th>

              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Active Status
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>

            <tbody>
              {allCategory.map((item) => (
                <tr className="bg-white">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <h3 className="text-black capitalize">{item.name}</h3>
                  </th>

                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">
                    <button>
                      {active ? (
                        <BsToggle2On className="text-[22px] text-green-500" />
                      ) : (
                        <BsToggle2Off className="text-[22px] text-red-500" />
                      )}
                    </button>
                  </td>
                  <td className="px-6 py-4 ">
                    <Link
                      onClick={() => handleCategoryDelete(item)}
                      className="rounded-[2px] px-3 py-2 bg-red-600 text-white"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategory;
