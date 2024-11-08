import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCheck } from "react-icons/fa6";
const AllCategory = () => {
  let [category, setAllCategory] = useState([]);

  useEffect(() => {
    let getAllCategory = () => {
      axios
        .get(" http://localhost:3500/api/v1/category/allCategory")
        .then((data) => {
          setAllCategory(data.data.category);
        });
    };
    getAllCategory();
  }, []);
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
            <tr className="bg-[#f2f7fb]  mx-auto  mt-5 px-4 py-3  ">
              <th scope="col" className="px-6 py-3">
                Category Name
              </th>

              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Active Status
              </th>
            </tr>

            <tbody>
              {category.map((item) => (
                <tr className="bg-white">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <h3 className="text-black capitalize">{item.name}</h3>
                  </th>

                  <td className="px-6 py-4">0</td>
                  <td className="px-6 py-4">
                    {item.isActive ? "Active" : "Pending"}
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

export default AllCategory;
