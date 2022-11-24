import React from "react";

import {
  Container,
  Header,
  ImageCont,
  PaymentContainer,
  SmallCont,
  TextContainer,
} from "./MuseumStyles";
import Image from "next/image";
import { useRouter } from "next/router";
import { et, en, ru } from "../../constants/translations";
import { motion } from "framer-motion";

const Museum = () => {
  const animation = {
    hidden: {
    y: 100,
    opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {duration: 0.4}
    }
  }
  const router = useRouter();
  const { locale } = router;
  let  t  = locale === "et" ? et : locale === "en" ? en : ru;
  return(
  <Container id="museum">
    <Header 
    initial="hidden"
    whileInView="visible"
    viewport={{amount: 1, once: true}}
    variants={animation}
    as={motion.div}>
      {t.museum}</Header>
    <TextContainer>
      {t.museum1}
      <SmallCont>
        <PaymentContainer dangerouslySetInnerHTML={{ __html: t.museum2 }}>
        </PaymentContainer>
        <ImageCont>
          <Image src="/images/Moto.jpg" alt="Motonurk" layout="fill" objectFit="cover" priority/>
        </ImageCont>
      </SmallCont>
    </TextContainer>
  </Container>
)};

export default Museum;
