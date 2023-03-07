import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LinkContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  // background-color:black;
  width:100%;
  height:50px;
  margin-top:200px;
`;

function footer() {
  return (
    <LinkContainer>
      <Link className='linkstyle' to="/react-cv/">Home</Link>
      <Link className='linkstyle' to="/react-cv/about">About</Link>
      <Link className='linkstyle' to="/react-cv/Contact">Contact me</Link>
    </LinkContainer>
  )
}

export default footer