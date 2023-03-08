import React from 'react';
import styled from 'styled-components';

const LinkContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  // background-color:black;
  width:100%;
  height:50px;
  margin:140px auto 20px 100px;
  // border-top: 1px;
  // border-color: white;
 `;
 
  
 

function footer() {
  return (
    <LinkContainer className='line'>
    <a className='linkstyle'href="https://github.com/pippa789 "target="_blank" rel="noreferrer">Github</a>
    <a className='linkstyle'href="https://www.linkedin.com/in/pip-allen-1b9692205/"target="_blank" rel="noreferrer">LinkedIn</a>
    </LinkContainer>
  )
}

export default footer