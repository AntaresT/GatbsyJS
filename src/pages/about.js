import React from "react"

import Header from './components/header'
import Container from './components/container/container'

import styled from 'styled-components'

const TextoVerde = styled.div`

   color: #2ecc71;
   font-size: 20px;

`

export default () => (
   
   <Container>
      <div>
         <Header headerText="Sobre"/>
         <br />
         <h1>About Page</h1>
         <TextoVerde>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</TextoVerde>
      </div>
   </Container>
)

