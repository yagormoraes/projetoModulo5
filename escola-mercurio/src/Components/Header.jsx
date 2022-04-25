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

    const StyledLink = styled(Link)`
        text-decoration:none;

        :visited{
            color:black;
        }
        :hover{
            color:green;
        }
    `

    return(
        <Header>    
            <h1>Escola Mercúrio</h1>
            <UL>
                <li><StyledLink to='/sobre' >Sobre Nós</StyledLink></li>
                <li><StyledLink to='/segmentos'>Segmentos</StyledLink></li>
                <li><StyledLink to='/professor'>Pagina do Professor</StyledLink></li>
                <li><StyledLink to='/contato'>Contato</StyledLink></li>
            </UL>
        </Header>
    )

}

export default Header