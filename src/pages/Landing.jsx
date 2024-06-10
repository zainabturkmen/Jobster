import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import styled from "styled-components";


const Landing = () => {
  return (
    <wrapper>
      <nav>
        <img src={logo} alt="Jobster Logo" className="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
        </div>
        <p>
          Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
          fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
          crucifix heirloom meggings bicycle rights.
        </p>
        <button className="btn btn-hero">login/Register</button>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </wrapper>
  );
};

const wrapper = styled.main`
  nav{
    
  }
`

export default Landing;
