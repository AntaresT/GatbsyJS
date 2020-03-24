import React from 'react'
import { Link, graphql } from 'gatsby'
import { FlexDiv } from '../styles/global'

export default ({ data, props }) => (

   <FlexDiv>
      <div id="globalDiv">
         <h1>{data.site.siteMetadata.title}</h1>
         <div>
            <h1>{props.headerText}</h1>
         </div>
         <div>
            <Link to='/'>Home</Link>
            <Link to='/contact/'>Contact</Link>
            <Link to='/about/'>About</Link>
            <Link to='/about-css-modules/'>About CSS Modules</Link>
         </div>
      </div>
   </FlexDiv>

)

export const query = graphql`

   query{
      site{
         siteMetadata{
            title
         }
      }
   }

`