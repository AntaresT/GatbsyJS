import React from 'react'
import { Link, graphql } from 'gatsby'
import Header from './components/header'
import Container from './components/container/container'

export default ({ data }) => {
   
   return(
      
      <Container>
         <Header headerText='Home' />
         <br />
         <div>
            <h1>Construindo um site com Gatsby</h1>
            <div>

               {data.allMarkdownRemark.edges.map(({ node }) => (
                  <div key={node.id}>
                     <Link to={node.fields.slug}>
                        <h3>
                           {node.frontmatter.title}{" "}
                           <span> - {node.frontmatter.date}</span>
                        </h3>
                     </Link>
                  </div> 
               ))}

            </div>
         </div>
      </Container>
   
   )

}


export const query = graphql`
   query{
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
         edges {
            node {
               id
               frontmatter {
                  title
                  date
               }
               excerpt
               timeToRead
               fields{
                  slug
               }
            }
         }
      }
   }
`