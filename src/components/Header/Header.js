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
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

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
              <AccountBalanceIcon sx={{ fontSize: 20 }}/>
            </ListItemIcon>
            <Link href="#museum">
              <ListItemText primary="MUUSEUM" primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 'medium',
                  letterSpacing: 0,
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
                }} primary="UUDISED" />
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
                }} primary="TEENUSED" />
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
                }} primary="KONTAKTID" />
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
  <Container style={{backgroundColor: scrolled && "#000000cf"}}>
    <Div1>
      <Link href="#home">
        <Logo style={{cursor: "pointer"}} src="/images/logo.svg" alt="image" />
      </Link>
      <LogoText>CLASSIC <br/>RIDERS</LogoText>
    </Div1>
    <Div2>
      <li>
      <Link href="#museum">
        <NavLink>MUUSEUM</NavLink>
      </Link>
      </li>
      <li>
      <Link href="#news">
        <NavLink>UUDISED</NavLink>
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
