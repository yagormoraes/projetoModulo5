import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


function Header(){

    const Header = styled.header`
        height: 110px;
        width: 100%;
        background-color: #F0F1F2;
        display:flex;
        align-items:center;
        justify-content: space-around;
        font-family: 'Source Sans Pro', sans-serif;
    `

    const UL = styled.ul`
        list-style-type: none;
        display: flex;
        align-items:center;
        justify-content: center;
        padding: 0;
        gap: 15px;
    `

    return(
        <Header>    
            <h1>Escola Mercúrio</h1>
            <UL>
                <li><Link to='/sobre'>Sobre Nós</Link></li>
                <li><Link to='/segmentos'>Segmentos</Link></li>
                <li><Link to='/professor'>Pagina do Professor</Link></li>
                <li><Link to='/contato'>Contato</Link></li>
            </UL>
        </Header>
    )

}

export default Header