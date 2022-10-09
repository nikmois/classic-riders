import React from 'react';
import { Container, Header, Carousel, Partner } from './PartnersStyles';
import { PartnersList } from '../../constants/constants';
import Slider from "react-slick";

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
  return (
  <Container id="contributors">
    <Header>
      MEIE TOETAJAD
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
