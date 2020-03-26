import React from 'react'
import { graphql } from 'gatsby'
import Container from './components/container/container'
import Header from './components/header'

export default ({ data }) => {
   console.log(data)
   return(
      <Container>
         <Header headerText='My Files' />
         <div>
            <table>
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>File</th>
                     <th>Access Time</th>
                     <th>Size</th>
                     <th>Created</th>
                  </tr>
               </thead>
               <tbody>
                  {data.allFile.edges.map(({ node }, index) => ( 
                     <tr>
                        <td>{node.id}</td>
                        <td>{node.base}</td>
                        <td>{node.accessTime}</td>
                        <td>{node.prettySize}</td>
                        <td>{node.birthTime}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </Container>
   )
}

export const query = graphql`
  {
    allFile {
      edges {
        node {
          id
          base
          accessTime(fromNow: true)
          prettySize
          birthTime(formatString: "dddd DD MMMM YYYY")
        }
      }
    }
  }
`