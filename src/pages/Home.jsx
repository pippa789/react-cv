import React from 'react';
import styled from 'styled-components';



const Welcome = styled.div`
color: white;
font-size: 50px;
font-family: 'Phudu', cursive;
background: black;
`;

const Name = styled.h1`
color: white;
font-size:75px;
`;

const TagLine = styled.div`
color:white;
font-size:25px;
`;

function Home() {
  return (
    <>
    <Welcome>Welcome</Welcome> 
   <Name> My name is Pip</Name>
   <TagLine>I'm a Jr developer looking for a front end role.</TagLine>
    
   </>
  )
}

export default Home