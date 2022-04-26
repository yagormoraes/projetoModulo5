import React from 'react'
import styled from 'styled-components'

const Sobre = ({conteudo}) => {
    const Container = styled.p`
        display:flex;
        align-items:center;
        justify-content:center;

        :nth-child(odd){
            background-color:blue;
        }
    `

    const Content = styled.p`
        width:400px;
        height:300px;
        border:2px solid black;
        display:flex;
        align-items:center;
        text-align:center;
    `


    const Box = styled.p`
        width:400px;
        height:300px;
        background-color:red;

    `


  return (
      <Container>
        <Box></Box>
        <Content>{conteudo}</Content>
      </Container>
    
  )
}

export default Sobre