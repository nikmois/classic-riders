import React from 'react';

import { Container, DownSection, TextContainer, UpperSection, Video } from './HeroStyles';

const Hero = () => (
  <Container id="home"> 
    <Video src="/images/Motonurk1.mp4" autoPlay loop muted />
    <TextContainer>
      <UpperSection>
      <h1 style={{margin: "0"}}>MOTONURK</h1><br />
      МОТОМУЗЕЙ КЛУБА CLASSIC RIDERS В НАРВЕ
      </UpperSection>
      <DownSection>
      <h2>ПРИКОСНИСЬ К ИСТОРИИ</h2><br />
      NARVA, VESTERVALLI 17A
      </DownSection>
      

    </TextContainer>
  </Container>
);

export default Hero;