import React from 'react'
import styled from 'styled-components'
import hermes from '../Assets/hermes.png'
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

    const Logo = styled.div`
        display:flex;
        align-items:center;
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
        padding: 5px;
        text-decoration:none;

        :visited{
            color:black;
        }
        :hover{
            background-color:#03A696;
            border-radius:4px;
            transition: 0.2s ease-in;
            box-shadow: 5px 5px;
            color:#593202;
        }
        :focus{
            background-color:#03A696;
            border-radius:4px;
            box-shadow: 5px 5px;
            color:#593202;
        }
    `

    return(
        <Header>
            <Logo>
                <img src={hermes} alt="" width={100} height={100}/>
                <h1>Escola Mercúrio</h1>
                
            </Logo>    
            
            <UL>
                <li><StyledLink to='/' >Home</StyledLink></li>
                <li><StyledLink to='/sobre' >Sobre Nós</StyledLink></li>
                <li><StyledLink to='/segmentos'>Segmentos</StyledLink></li>
                <li><StyledLink to='/professor'>Pagina do Professor</StyledLink></li>
                <li><StyledLink to='/contato'>Contato</StyledLink></li>
            </UL>
        </Header>
    )

}

export default Header