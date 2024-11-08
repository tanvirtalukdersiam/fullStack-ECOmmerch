import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Container from "../Components/Container";
import L_detiles from "../Components/L_detiles";
import L_returningCustomer from "../Components/L_returningCustomer";
import L_newCustomer from "../Components/L_newCustomer";

const Login = () => {
  return (
    <div>
      <Container>
        <BreadCrumb title={"Login"} />
        <L_detiles />
        <L_returningCustomer />
        <L_newCustomer />
      </Container>
    </div>
  );
};

export default Login;
