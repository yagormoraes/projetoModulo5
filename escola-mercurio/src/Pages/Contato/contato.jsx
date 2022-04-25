import React from 'react'
import Formulario from '../../Components/Formulario'

import styled from 'styled-components'

function Contato() {

    const Main = styled.main`
    display:flex;
    justify-content:center;
    `

    return(
        <Main>
            <Formulario></Formulario>
        </Main>
    )
}

export default Contato
