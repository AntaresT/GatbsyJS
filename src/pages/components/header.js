import React from 'react'
import { Link } from 'gatsby'
import { FlexDiv } from '../styles/global'

export default props => (

   <div>
      <h1>{props.headerText}</h1>
      <FlexDiv>
         <Link to='/'>Home</Link>
         <Link to='/contact/'>Contact</Link>
         <Link to='/about/'>About</Link>
         <Link to='/about-css-modules/'>About CSS Modules</Link>
      </FlexDiv>
   </div>

)