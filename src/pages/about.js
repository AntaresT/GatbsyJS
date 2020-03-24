import React from "react"

import Header from './components/header'
import Container from './components/container/container'

import { TextoVerde } from './styles/global'

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

