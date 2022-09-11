import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Container, Video } from './HeroStyles';

const Hero = () => (
  <Container> 
    <Video src="/images/Motonurk.mp4" autoPlay loop muted />
  </Container>
);

export default Hero;