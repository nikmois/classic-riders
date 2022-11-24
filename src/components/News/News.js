import React, { useState } from "react";
import {
  Header,
  CardImage,
  MStyledCard,
  StyledCardContent,
  Button,
  Container,
  Gradient,
  ButtonCont,
  ModalImage,
  ModalInfo,
  ModalText,
  StyledBox,
  VideoContainer,
  Video,
} from "./NewsStyles";
import { NewsCards } from "../../constants/constants";
import { motion } from "framer-motion";
import PhotoAlbum from "react-photo-album";
import Typography from "@mui/material/Typography";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import Image from "next/image";
import Modal from "@mui/material/Modal";
import { et, en, ru } from "../../constants/translations";
import { useRouter } from "next/router";
import dynamic from 'next/dynamic'

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
})

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

const News = () => {
  const router = useRouter();
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

  const [modalOpen, setModalOpen] = useState(false);
  const [modal, setModal] = useState(null);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = React.useState(-1);
  const handleOpen = (index) => {
    setModal(index);
    setModalOpen(true);
  };
  const { locale } = router;
  let  t  = locale === "et" ? et : locale === "en" ? en : ru;
  const handleClose = () => setModalOpen(false);
  const [isShown, setIsShown] = useState(false);
  const onChange = () => {
    setIsShown(!isShown);
    router.push("/#news");
  };

  return (
    <>
      <Container id="news" style={{ maxHeight: isShown ? "none" : "620px" }}>
        <Header
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 1, once: true}}
        variants={animation}
        as={motion.div}>{t.news}</Header>
        {NewsCards?.map((card, key) => (
          card.longDescriptionru ? 
          (<MStyledCard whileHover={{
            scale: 1.03,
          }} key={key} id={card.id} onClick={() => handleOpen(key)}>
            <StyledCardContent>
              <Typography
                sx={{ fontSize: 25, fontFamily: 'Jost' }}
                color="text.secondary"
                gutterBottom
              >
                {locale === "ru" ? card.titleru : locale === "en" ? card.titleen : card.titleet}
              </Typography>
              <Typography variant="h5" sx={{ fontFamily: 'Jost' }} component="div" dangerouslySetInnerHTML={{ __html: locale === "ru" ? card.descriptionru : locale === "en" ? card.descriptionen : card.descriptionet }}>
              </Typography>
              <Button
                onClick={() => handleOpen(key)}
                style={{
                  marginTop: "4rem",
                  fontSize: "1.2rem",
                  padding: "7px",
                }}
              >
                {t.more}
              </Button>
            </StyledCardContent>
            <CardImage>
              <Image
                src={card.image}
                alt={card.imagealt}
                layout="fill"
                objectFit="cover"
                priority
              />
            </CardImage>
          </MStyledCard>
            )
          :
          (<MStyledCard key={key} id={card.id} whileHover={{
            scale: 1.03,
          }}>
          
            <StyledCardContent>
              <Typography
                sx={{ fontSize: 25, fontFamily: 'Jost'  }}
                color="text.secondary"
                gutterBottom
              >
                {locale === "ru" ? card.titleru : locale === "en" ? card.titleen : card.titleet}
              </Typography>
              <Typography variant="h5" sx={{ fontFamily: 'Jost' }} component="div" dangerouslySetInnerHTML={{ __html: locale === "ru" ? card.descriptionru : locale === "en" ? card.descriptionen : card.descriptionet }}>
              </Typography>
            </StyledCardContent>
            <CardImage>
              <Image
                src={card.image}
                alt={card.imagealt}
                layout="fill"
                objectFit="cover"
                priority
              />
            </CardImage>
          </MStyledCard>)
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
              dangerouslySetInnerHTML={{ __html: locale === "ru" ? NewsCards[modal]?.titleru : locale === "en" ? NewsCards[modal]?.titleen : NewsCards[modal]?.titleet }}
            ></Typography>
            <ModalInfo>
            {NewsCards[modal]?.video && 
            <VideoContainer>
            <Video
              src={'https://www.youtube.com/embed/'+ NewsCards[modal]?.video}
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />{" "}
            </VideoContainer>
            }
              {modal !== null && (
                <ModalImage>
                  <Image
                    src={NewsCards[modal]?.image}
                    alt={NewsCards[modal]?.imagealt}
                    layout="fill"
                    className={"image"}
                    onClick={()=>setOpen(true)}
                  />
                </ModalImage>
              )}
              <ModalText
                dangerouslySetInnerHTML={{ __html: locale === "ru" ? NewsCards[modal]?.longDescriptionru : locale === "en" ? NewsCards[modal]?.longDescriptionen : NewsCards[modal]?.longDescriptionet }}
              ></ModalText>
              {NewsCards[modal]?.images && 
              <>
              <PhotoAlbum
                layout="rows"
                photos={NewsCards[modal]?.images}
                targetRowHeight={150}
                onClick={(event, photo, index) => setIndex(index)}
                componentsProps={{ imageProps: { loading: "lazy" } }}
              />
              <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={NewsCards[modal]?.images}
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
                slides={NewsCards[modal]?.boxImage}
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
                          alt={NewsCards[modal]?.imagealt}
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
          </StyledBox>
        </Modal>
      </Container>
      <Gradient style={{ display: isShown ? "none" : "block" }} />
      <ButtonCont style={{ marginTop: isShown ? "-4rem" : "0" }}>
        <Button onClick={onChange}>
          {!isShown ? t.kuvar : t.kuvav}
        </Button>
      </ButtonCont>
    </>
  );
};

export default News;
