import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import styled from 'styled-components'

const FlexDiv = styled.div`
   display: flex;
   & > div > div {
      display: flex;
      & > a{
         justify-content: space-between;
         margin: 3px;
      }
   }
`

export default props => {

   const data = useStaticQuery(graphql`
         query HeaderQuery{
            site{
               siteMetadata{
                  title
               }
            }
         }
      `
   )
   
   return(
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
}
