import React from "react";
import Container from "../Components/Container";
import BreadCrumb from "../Components/BreadCrumb";
import Ab_banner from "../Components/Ab_banner";
import Ab_text from "../Components/Ab_text";
import Ab_lastPart from "../Components/Ab_lastPart";

const About = ({ title }) => {
  return (
    <div>
      <Container>
        <BreadCrumb title={"About"} />
        <Ab_banner />
        <Ab_text />
        <Ab_lastPart />
      </Container>
    </div>
  );
};

export default About;
