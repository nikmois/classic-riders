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
import dynamic from 'next/dynamic'
import { PhotoAlbum } from "react-photo-album";
import { Gallery } from "../../constants/constants";
const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});

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
  const [index, setIndex] = React.useState(-1);

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
      <PhotoAlbum
              layout="rows"
              photos={Gallery}
              targetRowHeight={230}
              onClick={(event, photo, index) => setIndex(index)}
              componentsProps={{ imageProps: { loading: "lazy" } }}
            />
            <Lightbox
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              slides={Gallery}
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
                    <div style={{display: "flex", flexDirection: "column", height: "100vh", justifyContent: "center"}}>
                    <div style={{ position: "relative", width, height, marginTop: "3rem" }}>
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
                    <h2 style={{position: "relative", bottom: 0, left: 0, color: "white", fontSize: "clamp(2rem, 3vw, 3.5rem)", padding: "2rem"}}>
                    {locale === "ru" ? image.titleru : locale === "en" ? image.titleen : image.titleee}
                    </h2>
                    </div>
                  );
                },
              }}
            />
    </TextContainer>
  </Container>
)};

export default Museum;
