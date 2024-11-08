import React from "react";
import Banner from "../Components/Banner";
import Information from "../Components/Information";
import Offer from "../Components/Offer";
import NArrivale from "../Components/NArrivale";
import Bestseller from "../Components/Bestseller";
import OffTheYear from "../Components/OffTheYear";
import SpecialOffers from "../Components/SpecialOffers";

const Home = () => {
  return (
    <div>
      <Banner />
      <Information />
      <Offer />
      <NArrivale />
      <Bestseller />
      <OffTheYear />
      <SpecialOffers />
    </div>
  );
};

export default Home;
