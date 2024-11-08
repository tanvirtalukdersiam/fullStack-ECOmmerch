import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Container from "../Components/Container";
import ContactFrom from "../Components/ContactFrom";
import C_map from "../Components/C_map";

const Contact = () => {
  return (
    <Container>
      <BreadCrumb title={"Contacts"} />
      <ContactFrom />
      <C_map />
    </Container>
  );
};

export default Contact;
