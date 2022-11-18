import { useRouter } from 'next/router';
import React from 'react';
import { et, en, ru } from '../../constants/translations';
import { Container, DownSection, TextContainer, UpperSection, MobileImage, Video, ImageCont } from './HeroStyles';
import { motion } from 'framer-motion';

const textAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {type:"spring", duration: 1},
  }
}

const animation = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: {type:"spring", duration: 2, delay: custom * 0.2},
  })
}

const Hero = () => {
  
  const router = useRouter();
  const { locale } = router;
  let  t  = locale === "et" ? et : locale === "en" ? en : ru;
  return (
  <Container id="home"> 

    <Video src="/images/Motonurk.mp4" autoPlay loop muted />
    <ImageCont>
    <MobileImage src="/images/Mobile.jpg" layout="fill" alt="motonurk" objectFit='cover' objectPosition="10%"/>
    </ImageCont>
    <TextContainer
    as={motion.div}
    initial="hidden"
    whileInView="visible"
    viewport={{amount: 1, once: true}}
    variants={textAnimation}
    custom={0}
    >
      <UpperSection 
      as={motion.div}
      variants={animation}
      custom={2}>
      <h1 style={{margin: "0"}}>MOTONURK</h1><br />
      {t.hero1}
      </UpperSection>
      <DownSection
      as={motion.div}
      variants={animation}
      custom={3}>
      <h2>{t.hero2}</h2><br />
      NARVA, VESTERVALLI 17A
      </DownSection>
      

    </TextContainer>
  </Container>
)};

export default Hero;