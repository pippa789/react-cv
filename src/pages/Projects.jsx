import React from 'react';
import styled from 'styled-components';

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
          <button className="see-more" onClick={() => setModalOpen(true)} >see more</button>
      </div>
      <div className="project">
        <img src={guide} alt="brain" width='350vw' height='250vh' />
          <button className="see-more" onClick={() => setModalOpen1(true)} >see more</button>
      </div> 
      <div className="project">
        <img src={wildflowers} alt="brain" width='350vw' height='250vh' />
          <button className="see-more" onClick={() => setModalOpen2(true)} >see more</button> 
     </div>
    </Box>
    </Container>
  )
}

export default Projects