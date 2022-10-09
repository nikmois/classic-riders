import React, { useState } from 'react';
import { Header, CardImage, StyledCard, StyledCardContent, Button, Container, Gradient, ButtonCont } from './NewsStyles';
import { NewsCards } from '../../constants/constants';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const News = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isShown, setIsShown] = useState(false);
  const onChange = () => {
    setIsShown(!isShown)
    router.push('/#news')
  }
  
return (
  <>
  <Container id="news" style={{maxHeight: isShown ? "none" : "520px"}}>
    <Header>
      UUDISED
    </Header>
    {NewsCards?.map((card,key) => (
      <StyledCard key={key} id={card.id}>
      <StyledCardContent>
        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
          {card.title}
        </Typography>
        <Typography variant="h5" component="div">
          {card.description}
        </Typography>
        <Button onClick={handleOpen} style={{marginTop: "4rem", fontSize: "1.2rem", padding: "7px"}}>VAATA LÄHEMALT</Button>
      </StyledCardContent>
      <CardImage>
      <Image src={card.image} alt="Motonurk" layout="fill" objectFit="cover"/>
      </CardImage>
      
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{ style: { backgroundColor: "#00000048" } }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </StyledCard>
    ))}
  </Container>
  <Gradient style={{display: isShown ? "none" : "block"}}/>
  <ButtonCont style={{marginTop: isShown ? "-4rem" : "0"}}>
    <Button onClick={onChange}>{!isShown ? "KUVA ROHKEM" : "KUVA VÄHEM"}</Button>
  </ButtonCont>
  </>
)};

export default News;
