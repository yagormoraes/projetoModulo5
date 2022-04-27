import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'


function Footer(){
    const Footer = styled.footer`
        height: 150px;
        width: 100%;
        background-color: #F0F1F2;
        display:flex;
        align-items:center;
        justify-content:space-around;
        font-family: 'Source Sans Pro', sans-serif;
    `

    const Addresses = styled.div`
        display:flex;
        gap:30px;
    `
    const Address = styled.div`
        display:flex;
        flex-direction:column;
        justify-content:center;
        line-height:0.5;
    `

    const CopyrightText = styled.p`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:darkgray;
    padding:10px;
    margin:0;
    `

    return(
        <>
        <Footer>
            <Logo></Logo>
            <Addresses>
                <Address>
                    <p>Endereço 1</p>
                    <p>XXXXXXXXX</p>
                    <p>XXXXXXXXX</p>
                    <p>XXXXXXXXX</p>
                </Address>
                <Address>
                    <p>Endereço 2</p>
                    <p>YYYYYYYYY</p>
                    <p>YYYYYYYYY</p>
                    <p>YYYYYYYYY</p>
                </Address>
            </Addresses>
            
        </Footer>
        <CopyrightText>Direitos Reservados ao Grupo 1 - T11 - M5 - Resilia Educação &copy;</CopyrightText>
        </>
        
    )
}

export default Footer