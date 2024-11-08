import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { RiNumber2 } from "react-icons/ri";
import { FaTruckFast } from "react-icons/fa6";
import { FaArrowRotateLeft } from "react-icons/fa6";
const Information = () => {
  return (
    <section className=" py-3 lg:py-4">
      <Container>
        <Flex className="justify-between items-center">
          <Flex className="items-center  gap-1 lg:gap-2">
            <RiNumber2 className="text-[20px]" />
            <h6 className="font-dm font-normal text-[14px] lg:text-[16px] text-[#6D6D6D]">
              Two years warranty
            </h6>
          </Flex>
          <Flex className="items-center gap-1 lg:gap-2">
            <FaTruckFast className="text-[22px]" />
            <h6 className="font-dm font-normal text-[14px] lg:text-[16px] text-[#6D6D6D]">
              Free shipping
            </h6>
          </Flex>
          <Flex className="items-center gap-1 lg:gap-2">
            <FaArrowRotateLeft className="text-[20px]" />
            <h6 className="font-dm font-normal text-[14px] lg:text-[16px] text-[#6D6D6D]">
              Return policy in 30
            </h6>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Information;
