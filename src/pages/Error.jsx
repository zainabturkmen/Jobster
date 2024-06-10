import React from 'react';
import { Link } from 'react-router-dom';
import img from "../assets/images/not-found.svg"
import Wrapper from '../assets/images/Wrapper/ErrorPage';
const Error = () => {
  return <Wrapper className="full-page">
<div>
    <img src={img} alt='not found' />
</div>
  </Wrapper>
}

export default Error;
