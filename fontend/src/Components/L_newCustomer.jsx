import React from "react";
import { Link } from "react-router-dom";

const L_newCustomer = () => {
  return (
    <div>
      <h5 className="text-[40px] font-dm font-bold text-[#262626] mt-[40px] mb-7">
        New Customer
      </h5>
      <p className="text-[16px] text-[#767676] font-dm font-normal w-[644px] text-justify leading-6 mb-[30px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the.
      </p>
      <Link className="inline-block py-[13px] px-[62px] bg-[#262626] text-white font-dm text-[15px] font-semibold rounded-[2px]">
        Continue
      </Link>
    </div>
  );
};

export default L_newCustomer;
