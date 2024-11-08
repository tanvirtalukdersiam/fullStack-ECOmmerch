import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoginInfo } from "../../slices/userSlice";
import { PiUsersThreeBold } from "react-icons/pi";
import { TbCategory } from "react-icons/tb";
import { TbShoppingBagPlus } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";
const Sidebar = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let [userDrop, setUserDrop] = useState(false);
  let [productDrop, setproductDrop] = useState(false);
  let [categoryDrop, setCategoryDrop] = useState(false);
  let userData = useSelector((state) => state.userInfo.value);

  let handleLogOut = () => {
    dispatch(userLoginInfo(""));
    localStorage.setItem("userInfo", "");
    navigate("/admin/login");
  };

  return (
    <div>
      <aside
        id="sidebar-multi-level-sidebar"
        className="relative top-0 left-0 z-40 w-64 lg:h-screen "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-500 ">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3 font-nunito">Dashboard</span>
              </a>
            </li>

            <li>
              <button
                onClick={() => setUserDrop(!userDrop)}
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <PiUsersThreeBold className="text-[22px]" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Users
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={
                  userDrop ? " py-2 space-y-2" : "hidden py-2 space-y-2"
                }
              >
                <li>
                  <Link
                    to={"/admin/alluser"}
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    All Users
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/admin/updateUser"}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Update Users
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <button
                onClick={() => setproductDrop(!productDrop)}
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <TbShoppingBagPlus className="text-[22px]" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Products
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={
                  productDrop ? " py-2 space-y-2" : "hidden py-2 space-y-2"
                }
              >
                <li>
                  <Link
                    to={"/admin/allProducts"}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/admin/addProducts"}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Add Products
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/admin/editOrDeleteProducts"}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Edit/Delete Products
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <button
                onClick={() => setCategoryDrop(!categoryDrop)}
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <TbCategory className="text-[22px]" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Category
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={
                  categoryDrop ? " py-2 space-y-2" : "hidden py-2 space-y-2"
                }
              >
                <li>
                  <Link
                    to={"/admin/allCategory"}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    All Category
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/admin/addCategory"}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Add Category
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/admin/updateCategory"}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Update category
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <button
                onClick={handleLogOut}
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoMdLogOut className="text-[22px]" />
                <span className="flex-1 ms-3 whitespace-nowrap">LogOut</span>
              </button>
            </li>
            <div>
              <li className="absolute bottom-6 left-6">
                <button className="   text-gray-900 rounded-lg dark:text-white">
                  <h2 className="text-[20px] capitalize"> {userData.name} </h2>
                </button>
                <span className="  text-[14px] block text-white">Admin</span>
              </li>
            </div>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
