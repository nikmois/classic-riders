import React from 'react';
import { Container, Header, Carousel, Partner } from './PartnersStyles';
import { PartnersList } from '../../constants/constants';
import Slider from "react-slick";
import { useRouter } from 'next/router';
import { ru, et, en } from '../../constants/translations';
import { motion } from 'framer-motion';

const Partners = () => {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };
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
  };
  const router = useRouter();
  const { locale } = router;
  let  t  = locale === "et" ? et : locale === "en" ? en : ru;
  return (
  <Container id="contributors">
    <Header
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 1, once: true}}
        variants={animation}
        as={motion.div}>
      {t.support}
    </Header>
    <Carousel>
      <Slider {...settings}>
      {PartnersList.map((partner, key)=>(
        <Partner key={key}>{partner.title}</Partner>
      ))}
      </Slider>
    </Carousel>
  </Container>
)};

export default Partners;
