import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { userLoginInfo } from "../slices/userSlice";
const AdminLogin = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3500/api/v1/auth/login", {
        email,
        password,
      })
      .then((data) => {
        if (data.data.user.role === "admin") {
          dispatch(userLoginInfo(data.data.user));
          localStorage.setItem("userInfo", JSON.stringify(data.data.user));
          toast.success("Welcome Login Success", {
            position: "top-center",
            autoClose: 1100,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/admin");
        } else {
          toast.error("Only admin can access this", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((err) => {
        toast.error(err.response.data.error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="w-[450px] mx-auto mt-[250px] ">
        <h4 className="font-dm text-[35px]  font-bold text-[#262626] ">
          Signup Admin Login
        </h4>
        <div className="mt-4">
          <h6 className="font-dm text-[16px]  font-semibold mb-[4px]">
            Email address
          </h6>
          <input
            onChange={handleEmail}
            className="outline-none border-b w-[380px] pb-2"
            type="email"
            placeholder="company@domain.com"
          />
        </div>
        <div className="mt-4">
          <h6 className="font-dm text-[16px] font-semibold mb-[4px]">
            Password
          </h6>
          <input
            onChange={handlePassword}
            className="outline-none border-b w-[380px] pb-2"
            type="password"
            placeholder="Enter Your Password"
          />
        </div>
        <div className="mt-[6px]">
          <Link
            to={"/forgetPassword"}
            className="font-dm text-[14px] font-semibold "
          >
            Forget Password
          </Link>
        </div>
        <Link
          onClick={handleLogin}
          className="mt-7 inline-block py-[12px] px-[72px] bg-transparent border border-[#2B2B2B] text-[#262626] font-dm text-[15px] font-semibold rounded-[2px]"
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default AdminLogin;
