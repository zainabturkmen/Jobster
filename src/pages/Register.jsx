import React from "react";
import { useState, useEffect } from "react";
import { Logo, RowForm } from "../components";
import Wrapper from "../assets/images/Wrapper/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMemmber: true,
};

function Register() {
  const [values, setValue] = useState(initialState);

  const handleChange = (e) => {
    // e.preventDefault()
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onsubmit}>
        <Logo />
        <h3>login</h3>
        {/* name field */}
        <RowForm />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
}

export default Register;
