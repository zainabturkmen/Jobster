import React from "react";
import { useState, useEffect } from "react";
import { Logo } from "../components";
import Wrapper from "../assets/images/Wrapper/RegisterPage";


const initialState = {
  name: "",
  email: "",
  password: "",
  isMemmber: true,

}

function Register() {
  const [value, setValue] = useState(initialState)
  return <Wrapper>

  </Wrapper>
}

export default Register;
