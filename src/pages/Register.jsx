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
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}: ${value}`);
    setValue({...values, [name]: value})
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const toggleMember = () => {
    setValue({ ...values, isMemmber: !values.isMemmber });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onsubmit}>
        <Logo />
        <h3>{values.isMemmber ? "Login" : "Register"}</h3>
        {/* name field */}
        {!values.isMemmber && (
          <RowForm
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
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
        <p>
          {values.isMemmber ? "Not a member yet" : "already a member"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMemmber ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
