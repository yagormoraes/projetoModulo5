import React from 'react'
import styled from 'styled-components'

const Sobre = ({conteudo,img}) => {
    const Container = styled.p`
        display:flex;
        align-items:center;
        justify-content:center;

    `

    const Content = styled.p`
        width:400px;
        height:300px;
        border:2px solid black;
        display:flex;
        align-items:center;
        text-align:center;
    `


  return (
      <Container>
        <img src={img} alt="" width={400} height={300}/>
        <Content>{conteudo}</Content>
      </Container>
    
  )
}

export default Sobre