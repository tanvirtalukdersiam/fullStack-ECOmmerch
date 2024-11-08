import React from "react";

const Flex = ({ children, className, onClick, dref }) => {
  return (
    <div ref={dref} onClick={onClick} className={`flex  ${className}`} flex>
      {children}
    </div>
  );
};

export default Flex;
