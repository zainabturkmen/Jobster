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

  const toggleMember = () => {
    
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onsubmit}>
        <Logo />
        <h3>login</h3>
        {/* name field */}
        <RowForm
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />
        {/* email field */}
        <RowForm
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <RowForm
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
}

export default Register;
