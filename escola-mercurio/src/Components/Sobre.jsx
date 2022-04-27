import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import "aos/dist/aos.css"

const Sobre = ({conteudo,img}) => {
    const Container = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        padding:70px 0;

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
          <Content>{conteudo}</Content>
        </Exp>
        
      </Container>
    
  )
}

export default Sobre