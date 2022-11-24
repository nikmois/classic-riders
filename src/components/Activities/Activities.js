import React, { useState, useRef, useEffect } from 'react';
import { CardsContainer, Container, Description, Header, Hr, ImageContainer, ModalImage, ModalInfo, ModalText, Price, Product, ProductContainer, ProductSection, StyledBox, MStyledCard, Title, Video, VideoContainer } from './ActivitiesStyles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Services } from '../../constants/constants';
import { et, en, ru } from '../../constants/translations';
import PhotoAlbum from "react-photo-album";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import Image from "next/image";
import Modal from "@mui/material/Modal";
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { motion } from 'framer-motion';


const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxHeight: "83vh",
  overflowY: "auto",
  borderRadius: "10px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
  '*::-webkit-scrollbar': {
    width: '0.4em'
  },
};

const Activities = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [productIndex, setProductIndex] = useState(1);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [index, setIndex] = React.useState(-1);
  const router = useRouter();
  const { locale } = router;
  let  t  = locale === "et" ? et : locale === "en" ? en : ru;
  const handleOpen = (index) => {
    setModal(index);
    setModalOpen(true);
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
  const cardAnimation = {
    hidden: {
    y: 200,
    opacity: 0,
    },
    visible: custom =>({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 0.4, type: "spring", bounce: 0, stiffness: 100, damping: 8 }
    }),
    
  };

  const setProductImages = (index) => {
    setProductIndex(index)
    setOpen2(true)
  }
  const handleClose = () => setModalOpen(false);
  return (
    <Container id="services">
      <Header
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 1, once: true}}
      variants={animation}
      as={motion.div}>
        {t.services}
      </Header>
      <CardsContainer  
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.3, once: true}}
      as={motion.div}>
        {Services?.map((service, key)=>(
          <MStyledCard variants={cardAnimation} custom={key+1} whileHover={{
            scale: 1.03,
          }}
          sx={{ width: 345, maxWidth: "90vw", fontFamily: 'Jost'}} id={service.id} key={key} onClick={() => handleOpen(key)}>
          <CardMedia
          >
          <div style={{ position: 'relative', width: '100%', height: '200px' }}>
            <Image src={service.image} layout="fill" objectFit="cover" alt={service.imagealt} priority/>
          </div>
          </CardMedia>
          <CardContent sx={{ height: 100, fontWeight: "regular", fontFamily: 'Jost' }}>
            <Typography gutterBottom variant="h5" component="div" style={{fontSize: "2rem", textAlign: "center", fontFamily: 'Jost'}} dangerouslySetInnerHTML={{ __html: locale === "ru" ? service.titleru : locale === "en" ? service.titleen : service.titleet }}>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" onClick={() => handleOpen(key)} style={{color: "#626262", fontSize: "1.2rem", fontFamily: 'Jost'}}>{t.more}</Button>
          </CardActions>
        </MStyledCard>
        ))}
        <Modal
          keepMounted
          open={modalOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          BackdropProps={{ style: { backgroundColor: "#00000048" } }}
        >
          <StyledBox sx={style}>
          <CancelPresentationIcon style={{fontSize: "3rem",color: "white", margin: "6px 10px 5px 10px",float: "right", cursor: "pointer"}} onClick={handleClose}/>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ fontSize: "2.3rem", marginBottom: "2rem", width: "100%", backgroundColor: "#a9a9a9", padding: "1rem", borderRadius: "5px", color: "white" }}
              dangerouslySetInnerHTML={{ __html: locale === "ru" ? Services[modal]?.titleru : locale === "en" ? Services[modal]?.titleen : Services[modal]?.titleet }}
            >
              
            </Typography>
            <ModalInfo>
            {Services[modal]?.video && 
            <VideoContainer>
            <Video
              src={'https://www.youtube.com/embed/'+ Services[modal]?.video}
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />{" "}
            </VideoContainer>
            }
            {Services[modal]?.forsale &&
            <>
            <p style={{width: "90%", margin: "0 auto 2rem auto", color: "#6f6f6f", fontSize: "1.7rem"}}>{locale === "ru" ? Services[modal]?.descru : locale === "en" ? Services[modal]?.descen : Services[modal]?.descet }</p>
              {Services[modal]?.forsale.map((product, key)=>(
                <ProductSection key={key}>
                <Hr />
                <Product>
                  <ImageContainer onClick={()=>setProductImages(key)}>
                  <VisibilityIcon style={{position: "absolute", bottom: "1.5rem", right: "2rem", zIndex: "2", color: "white", transform: "scale(2)"}}/>
                  <Image
                  src={product.src}
                  alt={product.imagealt}
                  layout="fill"
                  objectFit="cover"
                  />
                  </ImageContainer>
                  <ProductContainer>
                  <Title>{locale === "ru" ? product.titleru : locale === "en" ? product.titleen : product.titleet }</Title>
                  <Description dangerouslySetInnerHTML={{ __html: locale === "ru" ? product.descru : locale === "en" ? product.descen : product.descet }}></Description>
                  <Price>{product.price.toFixed(2)} €</Price>
                  </ProductContainer>
                </Product>
                
                </ProductSection>
              ))}
              </>
            }
            {Services[modal]?.forsale ? 
              <></>
            :
            modal !== null &&
              <ModalImage>
                <Image
                  src={Services[modal]?.image}
                  alt={Services[modal]?.imagealt}
                  layout="fill"
                  className={"image"}
                  onClick={()=>setOpen(true)}
                />
              </ModalImage>
              
            }
            {Services[modal]?.longDescriptionru &&
              <ModalText
              dangerouslySetInnerHTML={{
                __html: locale === "ru" ? Services[modal]?.longDescriptionru : locale === "en" ? Services[modal]?.longDescriptionen : Services[modal]?.longDescriptionet
              }}
            ></ModalText>
            }
            {Services[modal]?.images && 
            <>
            <PhotoAlbum
              layout="rows"
              photos={Services[modal]?.images}
              targetRowHeight={150}
              onClick={(event, photo, index) => setIndex(index)}
              componentsProps={{ imageProps: { loading: "lazy" } }}
            />
            <Lightbox
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              slides={Services[modal]?.images}
              render={{
                slide: (image, offset, rect) => {
                  const width = Math.round(
                    Math.min(
                      rect.width,
                      (rect.height / image.height) * image.width
                    )
                  );
                  const height = Math.round(
                    Math.min(
                      rect.height,
                      (rect.width / image.width) * image.height
                    )
                  );

                  return (
                    <div style={{ position: "relative", width, height }}>
                      <Image
                        src={image.src}
                        layout="fill"
                        loading="eager"
                        placeholder="blur"
                        objectFit="contain"
                        alt={image.alt}
                        sizes={
                          typeof window !== "undefined"
                            ? `${Math.ceil(
                                (width / window.innerWidth) * 100
                              )}vw`
                            : `${width}px`
                        }
                      />
                    </div>
                  );
                },
              }}
            />
            </>
            }
          </ModalInfo>
          <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={Services[modal]?.boxImage}
              render={{
                buttonPrev: () => null,
                buttonNext: () => null,
                slide: (image, offset, rect) => {
                  const width = Math.round(
                    Math.min(
                      rect.width,
                      (rect.height / image.height) * image.width
                    )
                  );
                  const height = Math.round(
                    Math.min(
                      rect.height,
                      (rect.width / image.width) * image.height
                    )
                  );
                  return (
                    <div style={{ position: "relative", width, height }}>
                      <Image
                        src={image.src}
                        layout="fill"
                        loading="eager"
                        placeholder="blur"
                        objectFit="contain"
                        alt={Services[modal]?.imagealt}
                        sizes={
                          typeof window !== "undefined"
                            ? `${Math.ceil(
                                (width / window.innerWidth) * 100
                              )}vw`
                            : `${width}px`
                        }
                      />
                    </div>
                  );
                },
              }}
            />
            {Services[modal]?.forsale &&
            <Lightbox
              open={open2}
              close={() => setOpen2(false)}
              slides={Services[modal]?.forsale[productIndex].images}
              
              render={{
                slide: (image, offset, rect) => {
                  const width = Math.round(
                    Math.min(
                      rect.width,
                      (rect.height / image.height) * image.width
                    )
                  );
                  const height = Math.round(
                    Math.min(
                      rect.height,
                      (rect.width / image.width) * image.height
                    )
                  );
                  return (
                    <div style={{ position: "relative", width, height }}>
                      <Image
                        src={image.src}
                        layout="fill"
                        loading="eager"
                        placeholder="blur"
                        objectFit="contain"
                        alt={image.imagealt}
                        sizes={
                          typeof window !== "undefined"
                            ? `${Math.ceil(
                                (width / window.innerWidth) * 100
                              )}vw`
                            : `${width}px`
                        }
                      />
                    </div>
                  );
                },
              }}
            />
            }
          </StyledBox>
        </Modal>
    </CardsContainer>
    </Container>
  );
};

export default Activities;
