import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'

import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <>
     <Header/>
     <Hero />
     <Container>
     <main>{children}</main> 
     <Footer/>
    </Container>
    </>
  )
}
