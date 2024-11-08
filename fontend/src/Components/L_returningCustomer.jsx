import React from "react";
import Flex from "./Flex";
import { Link } from "react-router-dom";

const L_returningCustomer = () => {
  return (
    <div className="mt-[35px]">
      <h5 className="text-[40px] font-dm font-bold text-[#262626] mb-[30px]">
        Returning Customer
      </h5>
      <Flex className="w-[1060px] justify-between ">
        <div>
          <h6 className="font-dm text-[16px] font-semibold mb-[6px]">
            Email address
          </h6>
          <input
            className="outline-none border-b w-[480px] pb-3"
            type="email"
            placeholder="company@domain.com"
          />
        </div>
        <div>
          <h6 className="font-dm text-[16px] font-semibold mb-[6px]">
            Password
          </h6>
          <input
            className="outline-none border-b w-[480px] pb-3"
            type="password"
            placeholder="Please enter your password"
          />
        </div>
      </Flex>
      <div className="border-b pb-[60px]">
        <Link className="mt-8 inline-block py-[13px] px-[72px] bg-transparent border border-[#2B2B2B] text-[#262626] font-dm text-[15px] font-semibold rounded-[2px]">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default L_returningCustomer;
