import React from "react";

const ErrorBanner = () => {
  return (
    <div className="">
      <h2 className="font-bold font-dm text-[200px] inline p-0">404</h2>
      <p className="font-dm text-[16px] font-normal w-[644px] text-[#767676]  mt-[-40px]">
        The page you were looking for couldn't be found. The page could be
        removed or you misspelled the word while searching for it. Maybe try a
        search?
      </p>
    </div>
  );
};

export default ErrorBanner;
