import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./image";

const Offer = () => {
  return (
    <section className=" mt-8 lg:mt-[125px]">
      <Container>
        <Flex className="flex-wrap lg:flex-nowrap gap-7">
          <Image src="images/Ad_1.png" />

          <div className=" flex flex-col">
            <Image src="images/Ad_2.png" />
            <Image className="mt-7 lg:mt-12 " src="images/Ad_3.png" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Offer;
