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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image'

import { Container, Div1, Div2, Div3, Div4, NavLink, SocialIcons, Logo, LogoText, MobileButton, StyledListItem, StyledMenuIcon, Flags, ImageCont } from './HeaderStyles';

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
              <InboxIcon />
            </ListItemIcon>
            <Link href="/">
              <ListItemText primary="AVALEHT" />
            </Link>
          </ListItemButton>
        </StyledListItem>
        <StyledListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link href="#museum">
              <ListItemText primary="MUUSEUM" />
            </Link>
          </ListItemButton>
        </StyledListItem>
        <StyledListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <Link href="#services">
              <ListItemText primary="TEENUSED" />
            </Link>
          </ListItemButton>
        </StyledListItem>
        <StyledListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <Link href="#contacts">
              <ListItemText primary="KONTAKTID" />
            </Link>
          </ListItemButton>
        </StyledListItem>
      </List>
      <Divider />
      <ListItem disablePadding>
          <Flags>
          <ImageCont>
            <Image
              src="/images/est.svg"
              alt="estonian language"
              width="25"
              height="20"
            />
          </ImageCont>
        <ImageCont>
            <Image
              src="/images/rus.svg"
              alt="russian language"
              width="25"
              height="20"
            />
          </ImageCont>
        <ImageCont>
            <Image
              src="/images/eng.svg"
              alt="english language"
              width="25"
              height="20"
            />
          </ImageCont>
          </Flags>
          
      </ListItem>
    </Box>
  );
  

  return (
  <Container style={{backgroundColor: scrolled && "#000000ab"}}>
    <Div1>
      <Link href="/">
        <Logo style={{cursor: "pointer"}} src="/images/logo.svg" alt="image" />
      </Link>
      <LogoText>CLASSIC <br/>RIDERS</LogoText>
    </Div1>
    <Div2>
      <li>
      <Link href="/">
        <NavLink>AVALEHT</NavLink>
      </Link>
      </li>
      <li>
      <Link href="#museum">
        <NavLink>MUUSEUM</NavLink>
      </Link>
      </li>
      <li>
      <Link href="#services">
        <NavLink>TEENUSED</NavLink>
      </Link>
      </li>
      <li>
      <Link href="#contacts">
        <NavLink>KONTAKTID</NavLink>
      </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="/">
        <AiFillFacebook size="3rem"/>
      </SocialIcons>
      <SocialIcons href="/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
    <Div4>
    <ImageCont>
    <Image src="/images/est.svg" alt="estonian language" width="25" height="20"/>
    </ImageCont>
    <ImageCont>
    <Image src="/images/rus.svg" alt="russian language" width="25" height="20"/>
    </ImageCont>
    <ImageCont>
    <Image src="/images/eng.svg" alt="english language" width="25" height="20"/>
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
