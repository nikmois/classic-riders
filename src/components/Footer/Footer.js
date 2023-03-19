import React from 'react';
import {Container, FooterContainer, Header, Report, Year, Wrapper, Left, Right, Logo, Text, SocLink, Hr, BottomContainer, LogoContainer} from './FooterStyles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ru, et, en } from '../../constants/translations';
import { Years } from '../../constants/constants';

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  let  t  = locale === "et" ? et : locale === "en" ? en : ru;
  return (
    <Container>
      <LogoContainer>
      <Logo src="/images/motonurk.svg" alt="image" />
      </LogoContainer>
      <FooterContainer>
      <Wrapper>
      <Left>
      <Link href="#home">
        <Logo style={{cursor: "pointer"}} src="/images/logo.svg" alt="image" />
      </Link>
      </Left>
      <Right>
      MotoNurk - {t.footer}
      </Right>
      </Wrapper>
      <Report>
      {t.aruanne}: {Years.map((year)=>
      <Year href={year.pdf} download={year.pdf}>{year.year} </Year>
      )}
      </Report>
      </FooterContainer>
      <BottomContainer>
      <Hr/>
      <Text>
        
        <SocLink href="motonurk.ee">MOTONURK &copy;</SocLink> 2022 CREATED BY <SocLink href="https://github.com/nikmois">NIKMOIS</SocLink><br/>
        Copying or reusing texts, media or any other materials from this website is strictly prohibited.
        </Text>
      </BottomContainer>
      
    </Container>
  );
};

export default Footer;
