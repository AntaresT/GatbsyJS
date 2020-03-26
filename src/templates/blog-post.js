import React from 'react'
import { graphql } from 'gatsby'
import Container from '../pages/components/container/container'

export default ({ data }) => {
   const post = data.markdownRemark

   return(
      <Container>
         <div>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
         </div>
      </Container>
   )

}

export const query = graphql`

   query($slug: String!){
      markdownRemark(fields: { slug: { eq: $slug } }){
         html
         frontmatter{
            title
         }
      }
   }

`