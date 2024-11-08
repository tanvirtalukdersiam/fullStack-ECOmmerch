import React from "react";
import { Link } from "react-router-dom";

const ContactFrom = () => {
  return (
    <div className="mt-[60px]">
      <h5 className="text-[34px] font-bold text-primary  ">Fill up a Form</h5>
      <div className="mt-[30px]">
        <div className="mb-5">
          <h6 className="font-dm text-[16px] font-semibold mb-2">Name</h6>
          <input
            className="border-b outline-none pb-2 pl-1 w-[650px]"
            type="text"
            placeholder="Your name here"
          />
        </div>
        <div className="mb-5">
          <h6 className="font-dm text-[16px] font-semibold mb-2">Email</h6>
          <input
            className="border-b outline-none pb-2 pl-1 w-[650px]"
            type="email"
            placeholder="Your email here"
          />
        </div>
        <div className="">
          <h6 className="font-dm text-[16px] font-semibold mb-2">Message</h6>
          <input
            className="border-b outline-none pb-2 pl-1 w-[650px]"
            type=""
            placeholder="Your message here"
          />
        </div>
      </div>
      <Link className="mt-8 inline-block py-[13px] px-[72px] bg-[#262626] text-white font-dm text-[15px] font-semibold rounded-[2px]">
        Post
      </Link>
    </div>
  );
};

export default ContactFrom;
