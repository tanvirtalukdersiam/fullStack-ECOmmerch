import React from "react";
import Title from "./Title";
import Container from "./Container";
import Flex from "./Flex";
import Products from "./Products";

const Bestseller = () => {
  return (
    <section>
      <Container>
        <Title className="mb-12" heading="Our Bestseller" />
        <Flex className="justify-between flex-wrap xl:flex-nowrap">
          <Products pimage="images/newArrival-2.png" isNew={true} />
          <Products pimage="images/newArrival-2.png" isNew={false} />
          <Products pimage="images/newArrival-2.png" isNew={true} />
          <Products pimage="images/newArrival-2.png" isNew={true} />
        </Flex>
      </Container>
    </section>
  );
};

export default Bestseller;
