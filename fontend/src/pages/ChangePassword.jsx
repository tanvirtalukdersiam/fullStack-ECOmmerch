import React, { useState } from "react";
import Container from "../Components/Container";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const changePassword = () => {
  let token = useParams();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleEmail = (e) => {
    setEmail(e.target.value);
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3500/api/v1/auth/changePassword",
        {
          email,
          newPassword: password,
        },
        {
          headers: {
            token: token,
          },
        }
      )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {});
  };
  return (
    <div>
      <Container>
        <div className="bg-white my-[115px] ">
          <div className="bg-[#F3F3F3]  py-[55px] w-[570px] mx-auto rounded-[3px]">
            <h4 className="text-center font-dm font-semibold text-primary  text-[30px]">
              Change Your Password
            </h4>

            <div className="text-center mt-10 mb-5">
              <input
                onChange={handleEmail}
                className="w-[450px] px-[10px] py-[10px] outline-none rounded-[2px] "
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="text-center mt-4 mb-6">
              <input
                onChange={handlePassword}
                className="w-[450px] px-[10px] py-[10px] outline-none rounded-[2px] "
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="px-[60px] flex justify-between">
              <Link
                onClick={handleSubmit}
                className="px-8 py-2.5 font-dm bg-secondary text-white"
              >
                Submit
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default changePassword;
