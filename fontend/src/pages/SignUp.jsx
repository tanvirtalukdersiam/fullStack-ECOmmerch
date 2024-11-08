import React from "react";
import Container from "../Components/Container";
import BreadCrumb from "../Components/BreadCrumb";
import L_detiles from "../Components/L_detiles";
import S_personal_detiels from "../Components/S_personal_detiels";

const SignUp = () => {
  return (
    <div>
      <Container>
        <BreadCrumb title={"Sign up"} />
        <L_detiles />
        <S_personal_detiels />
      </Container>
    </div>
  );
};

export default SignUp;
