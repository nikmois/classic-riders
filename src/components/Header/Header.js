import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

import { Container, Div1, Div2, Div3, Div4, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white"}}>
        <img src="../../public/images/logo.svg" alt="image" />
        </a>
      </Link>
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
    <Div4>Language</Div4>
  </Container>
);

export default Header;
