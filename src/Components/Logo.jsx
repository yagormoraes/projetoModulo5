import React from "react";
import styled from 'styled-components'
import hermes from '../Assets/hermes.png'

function Logo() {
    const Logo = styled.div`
        display:flex;
        align-items:center;

    `
  return (
    <Logo>
        <img src={hermes} alt="" width={100} height={100}/>
        <h1>Escola Mercúrio</h1>  
    </Logo>  
  )
}

export default Logo