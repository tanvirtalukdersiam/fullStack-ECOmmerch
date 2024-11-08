import React from "react";
import Container from "./Container";
import Title from "./Title";
import Flex from "./Flex";
import Products from "./Products";

const SpecialOffers = () => {
  return (
    <div>
      <Container>
        <Title className="mb-12" heading="Special Offers" />
        <Flex className="justify-between flex-wrap xl:flex-nowrap">
          <Products pimage="images/newArrival-2.png" isNew={true} />
          <Products pimage="images/newArrival-2.png" isNew={false} />
          <Products pimage="images/newArrival-2.png" isNew={true} />
          <Products pimage="images/newArrival-2.png" isNew={true} />
        </Flex>
      </Container>
    </div>
  );
};

export default SpecialOffers;
