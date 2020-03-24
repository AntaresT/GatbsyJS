import styled from 'styled-components'


export const TextoVerde = styled.div`

   color: #2ecc71;
   font-size: 20px;

`

export const FlexDiv = styled.div`

   display: flex;


   & > div > div {

      display: flex;
    
      & > a{
         justify-content: space-between;
         margin: 3px;
      }
   }

`