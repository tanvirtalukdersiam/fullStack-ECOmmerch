import React from "react";
import Container from "./Container";
import Flex from "../Components/Flex";
import Image from "../Components/image";
const Ab_banner = () => {
  return (
    <div>
      <Flex className={"justify-between items-center mt-[70px]"}>
        <Image className="h-[720px] w-[730px]" src="images/product1.png" />
        <Image className="h-[720px] w-[730px]" src="images/product2.png" />
      </Flex>
    </div>
  );
};

export default Ab_banner;
