import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Flex from "../Components/Flex";
import { userLoginInfo } from "../slices/userSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AdminLayout = () => {
  let navigate = useNavigate();
  let userData = useSelector((state) => state.userInfo.value);

  useEffect(() => {
    if (!userData) {
      navigate("/admin/login");
    }
  }, []);
  return (
    <Flex className={"gap-5"}>
      <Sidebar />
      <Outlet />
    </Flex>
  );
};

export default AdminLayout;
