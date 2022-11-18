import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhoneIcon from '@mui/icons-material/Phone';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Image from 'next/image'
import { Container, Div1, Div2, Div3, Div4, NavLink, SocialIcons, Logo, LogoText, MobileButton, StyledListItem, StyledMenuIcon, Flags, ImageCont } from './HeaderStyles';
import { useRouter } from 'next/router';
import { et, ru, en } from '../../constants/translations';
import { motion } from 'framer-motion';

const Header = () =>  {
  const [scrolled, setScrolled] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 20) {
      setScrolled(true)
    } else{
      setScrolled(false)
    }
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeColor);
  } else {
  }

  const changeLang = (lang) => {
    router.push("/", `${router.asPath}`, {locale: lang})
  }

  const router = useRouter();
  const { locale } = router;
  let  t  = locale === "et" ? et : locale === "en" ? en : ru;

  const [drawer, setDrawer] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawer({ ...drawer, [anchor]: open });
  };

  const animation = {
    hidden: {
    y: -50,
    opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {ease:"linear" },
    }
  }
  
  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
        <StyledListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountBalanceIcon sx={{ fontSize: 20 }}/>
            </ListItemIcon>
            <Link href="#museum">
              <ListItemText primary={t.museum} primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                  fontFamily: 'Jost'
                }}/>
            </Link>
          </ListItemButton>
        </StyledListItem>
        <StyledListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <NewspaperIcon sx={{ fontSize: 20 }}/>
            </ListItemIcon>
            <Link href="#news">
              <ListItemText primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                  fontFamily: 'Jost'
                }} primary={t.news} />
            </Link>
          </ListItemButton>
        </StyledListItem>
        <StyledListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <TwoWheelerIcon sx={{ fontSize: 20 }}/>
            </ListItemIcon>
            <Link href="#services">
              <ListItemText primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                  fontFamily: 'Jost'
                }} primary={t.services} />
            </Link>
          </ListItemButton>
        </StyledListItem>
        <StyledListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PhoneIcon sx={{ fontSize: 20 }}/>
            </ListItemIcon>
            <Link href="#contacts">
              <ListItemText primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                  fontFamily: 'Jost'
                }} primary={t.contacts} />
            </Link>
          </ListItemButton>
        </StyledListItem>
      </List>
      <Divider />
      <ListItem disablePadding>
          <Flags>
          <ImageCont onClick={() => changeLang('et')}>
            <Image
              src="/images/est.svg"
              alt="estonian language"
              width="25"
              height="20"
            />
          </ImageCont>
        <ImageCont onClick={() => changeLang('ru')}>
            <Image
              src="/images/rus.svg"
              alt="russian language"
              width="25"
              height="20"
            />
          </ImageCont>
        <ImageCont onClick={() => changeLang('en')}>
            <Image
              src="/images/eng.svg"
              alt="english language"
              width="25"
              height="20"
            />
          </ImageCont>
          </Flags>
          
      </ListItem>
      <ListItem>
        <Flags style={{marginTop: "5vh"}}>
      <SocialIcons href="https://www.facebook.com/profile.php?id=100087108581611">
        <AiFillFacebook color="#9a9a9a" size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://instagram.com/motonurk?igshid=YmMyMTA2M2Y=">
        <AiFillInstagram color="#9a9a9a" size="3rem"/>
      </SocialIcons>
      </Flags>
      </ListItem>
    </Box>
  );
  

  return (
  <Container 
  initial="hidden"
  whileInView="visible"
  viewport={{amount: 0.1, once: true}}
  variants={animation}
  as={motion.div} style={{backgroundColor: scrolled && "#000000cf"}}>
    <Div1>
      <Link href="#home">
        <Logo style={{cursor: "pointer", width: "120%", maxWidth: "150px"}} src="/images/logo.svg" alt="image" />
      </Link>
    </Div1>
    <Div2>
      <li>
      <Link href="#museum">
        <NavLink>{t.museum}</NavLink>
      </Link>
      </li>
      <li>
      <Link href="#news">
        <NavLink>{t.news}</NavLink>
      </Link>
      </li>
      <li>
      <Link href="#services">
        <NavLink>{t.services}</NavLink>
      </Link>
      </li>
      <li>
      <Link href="#contacts">
        <NavLink>{t.contacts}</NavLink>
      </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://www.facebook.com/profile.php?id=100087108581611">
        <AiFillFacebook size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://instagram.com/motonurk?igshid=YmMyMTA2M2Y=">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
    <Div4>
    <ImageCont>
    <Image src="/images/est.svg" alt="estonian language" width="25" height="20" onClick={() => changeLang('et')}/>
    </ImageCont>
    <ImageCont>
    <Image src="/images/rus.svg" alt="russian language" width="25" height="20" onClick={() => changeLang('ru')}/>
    </ImageCont>
    <ImageCont>
    <Image src="/images/eng.svg" alt="english language" width="25" height="20" onClick={() => changeLang('en')}/>
    </ImageCont>
    </Div4>
    <MobileButton>
    <Button onClick={toggleDrawer("right", true)}>
      <StyledMenuIcon />
    </Button>
      <SwipeableDrawer
        anchor="right"
        open={drawer["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </MobileButton>
  </Container>
);}

export default Header;
