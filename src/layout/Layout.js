import React from 'react'

import Header from '../components/Header/Header'

import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <>
     <Header/>
     <Container>
     <main>{children}</main> 
    </Container>
    </>
  )
}
