import React from 'react'

import Container from './components/container/container'
import Header from './components/header'
import styles from './about-css-modules.module.css'

console.log(styles)

const User = props => (

   <div className={styles.user}>
      <img src={props.avatar} className={styles.avatar} alt=''/>
      <div className={styles.description}>
         <h2 className={styles.username}>{props.username}</h2>
         <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
   </div>

)

export default () => (

   <Container>
      <Header />
      <h1>About CSS Modules</h1>
      <p>CSS modules are cool</p>
      
      <User 
         username="João Zinho"
         avatar="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80"
         excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      
   </Container>

)