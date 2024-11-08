import React, { useEffect, useState } from "react";
import axios from "axios";
import { TbEditCircle } from "react-icons/tb";
const UpdateUser = () => {
  let [allUser, setAllUser] = useState([]);
  let [updateName, setUpdateName] = useState("");
  let [updateEmail, setUpdateEmail] = useState("");
  let [updateNameModal, setUpdateNameModal] = useState(false);
  let [updateRoleModal, setUpdateROleModal] = useState(false);
  let [RoleEmail, setROleEmail] = useState("");
  function AllUser() {
    axios.get(" http://localhost:3500/api/v1/auth/allUser").then((data) => {
      setAllUser(data.data);
    });
  }

  useEffect(() => {
    AllUser();
  }, [AllUser]);

  let handleEditName = (email) => {
    setUpdateNameModal(true);
    setUpdateEmail(email);
  };

  let handleUpdateName = () => {
    axios
      .post(" http://localhost:3500/api/v1/auth/updateUsers", {
        email: updateEmail,
        name: updateName,
      })
      .then(() => {
        setUpdateNameModal(false);
      });
  };

  let roleEdit = (email) => {
    setUpdateROleModal(true);
    setROleEmail(email);
  };

  let handleRoleChange = (eValue) => {
    axios
      .post(" http://localhost:2002/api/v1/auth/updateRole", {
        email: RoleEmail,
        role: eValue.target.value,
      })
      .then(() => {
        setUpdateROleModal(false);
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
                Users
              </th>

              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                role
              </th>
            </tr>
            {allUser.map((item) => (
              <tbody>
                <tr className="bg-white">
                  <th
                    scope="row"
                    className="flex items-center gap-4 px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <h3 className="text-black capitalize"> {item.name}</h3>
                    <span>
                      <TbEditCircle
                        onClick={() => handleEditName(item.email)}
                        className="text-[18px]"
                      />
                    </span>
                  </th>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">019234679987</td>
                  <td className="px-6 py-4 flex items-center gap-3">
                    {item.role}{" "}
                    <span>
                      {" "}
                      <TbEditCircle
                        onClick={() => roleEdit(item.email)}
                        className="text-[18px]"
                      />
                    </span>
                  </td>
                </tr>
              </tbody>
            ))}
            {updateNameModal && (
              <div>
                <div className=" z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                  <div className="relative p-4 left-2/2 translate-x-[90%] w-full max-w-md max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      {/* Modal header */}
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          Update Your Name
                        </h3>
                        <button
                          onClick={() => setUpdateNameModal(false)}
                          type="button"
                          className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-hide="authentication-modal"
                        >
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>
                      {/* Modal body */}
                      <div className="p-4 md:p-5">
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Name
                          </label>
                          <input
                            onChange={(e) => setUpdateName(e.target.value)}
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Input Your Name"
                            required=""
                          />
                        </div>

                        <button
                          onClick={handleUpdateName}
                          type="submit"
                          className="mt-5 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </table>
          {updateRoleModal && (
            <div className="m-4">
              <div className=" z-50 justify-center items-center  md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 left-2/2 translate-x-[90%] max-w-md max-h-full">
                  {/* Modal content */}
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="flex items-center justify-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-nunito text-center">
                        Update A Role
                      </h3>
                      <button
                        onClick={() => setUpdateROleModal(false)}
                        type="button"
                        className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="authentication-modal"
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    {/* Modal body */}
                    <div className="pb-1">
                      <select
                        onChange={(e) => handleRoleChange(e)}
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-3.5 w-[160px]  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-auto my-2"
                      >
                        <option selected="">Choose a Role</option>
                        <option value="admin">Admin</option>
                        <option value="merchant">Merchant</option>
                        <option value="member">Member</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
