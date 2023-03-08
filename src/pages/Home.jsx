import React from 'react';
import styled from 'styled-components';



const Welcome = styled.div`
display:flex;
justify-content: center;
align-items: center;
color: black;
font-size: 60px;
font-family: 'Phudu', cursive;
background: white;
width:300px;
margin: 90px 150px 15px 175px;
transform: rotate(10deg);

`;

const Name = styled.h1`
color: white;
font-size:70px;
font-family: 'Quicksand', sans-serif;
// transform: skew(30deg);
// font-family: 'Abel', sans-serif;
margin: 10px 100px 50px 300px;
font-weight: 100;


`;

const TagLine = styled.div`
color:white;
font-size:25px;font-family: 'Climate Crisis', cursive;
margin-left: 400px;
`;

function Home() {
  return (
  <>
    <Welcome >Welcome</Welcome> 
    <Name> My name is Pip</Name>
    <TagLine>I'm a Jr developer looking for a front end role.</TagLine>
  </>
  )
}

export default Home