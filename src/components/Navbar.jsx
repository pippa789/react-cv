import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LinkContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:black;
width:100%;
height:50px;
color: #ffffff;

`;

const LinkStyle = styled.h1`
background-color: black;
color: #ffffff;
font-family: 'Phudu', cursive;
padding: 10px 70px;
text-decoration: none;
`;
function NavBar() {
  return (
    
    <LinkContainer>
      <LinkStyle><Link className='linkstyle' to="/react-cv/">Home</Link></LinkStyle>
      <LinkStyle><Link className='linkstyle' to="/react-cv/about">About</Link></LinkStyle>
      <LinkStyle><Link className='linkstyle' to="/react-cv/Contact">Contact me</Link></LinkStyle>
    </LinkContainer>
  )
}

export default NavBar