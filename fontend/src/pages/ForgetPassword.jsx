import React, { useState } from "react";
import Container from "../Components/Container";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const ForgetPassword = () => {
  let [email, setEmail] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3500/api/v1/auth/forgetPassword", {
      email,
    });
  };
  return (
    <div>
      <Container>
        <div className="bg-white my-[115px] ">
          <div className="bg-[#F3F3F3]  py-[55px] w-[570px] mx-auto rounded-[3px]">
            <h4 className="text-center font-dm font-semibold text-primary  text-[30px]">
              Reset Your Password
            </h4>
            <p className="text-center font-dm font-normal text-secondary text-[16px]">
              We will send you an email to reset your password.
            </p>
            <div className="text-center mt-10 mb-6">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-[450px] px-[10px] py-[10px] outline-none rounded-[2px] "
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="px-[60px] flex justify-between">
              <Link
                onClick={handleSubmit}
                className="px-5 py-2.5 font-dm bg-secondary text-white"
              >
                Submit
              </Link>
              <Link
                to={"/admin/login"}
                className="px-5 py-2.5 font-dm bg-red-600 text-white"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ForgetPassword;
