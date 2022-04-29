import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import "aos/dist/aos.css"

const Sobre = ({conteudo,img,titulo}) => {
    const Container = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        padding:70px 0;

    `

    const TextBox = styled.div`
      display:flex;
      flex-direction:column;
      align-items:center;


    `

    const Content = styled.p`
        width:400px;
        height:300px;
        margin:0;
        display:flex;
        align-items:center;
        text-align:center;
    `

    const Exp = styled.div`
      display:flex;
      align-items:center;
      justify-content:center;
      border:2px solid black;
      border-radius:30px;
      box-shadow: 5px 5px;
      column-gap:50px;
      width:900px;
      height:400px;

    `

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return (
      <Container data-aos="zoom-im">
        <Exp >
          <img src={img} alt="" width={400} height={300}/>
          <TextBox>
            <h1>{titulo}</h1>
            <Content>{conteudo}</Content>
          </TextBox>
          
        </Exp>
        
      </Container>
    
  )
}

export default Sobre