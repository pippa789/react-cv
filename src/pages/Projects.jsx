import React from 'react';
import styled from 'styled-components';
import wildflowers from '../images/wildflowers.png';
import calculator from '../images/calculator.png';

const Container= styled.div`
display: flex;
flex-direction: row;
`;

const Box=styled.div`
display: flex;
flex-direction: flex-row;
justify-content: space-evenly;
align-items: center;
Width: 100%;
height: auto;
opacity: 0.9;
padding: 100px 50px 100px 50px
`;
function Projects() {
  return (
    
    <Container>
    <Box>
      <div className="project">
        <img src={calculator} alt="brain" width='350vw' height='250vh' />
          
      </div>
      <div className="project">
        <img src={wildflowers} alt="brain" width='350vw' height='250vh' />
          
     </div>
    </Box>
    </Container>
  )
}

export default Projects