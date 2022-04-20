import React from 'react'

function Contato() {
    return(

        <form action="https://formsubmit.co/yago.dmoraes@gmail.com" method='POST'>
            <h1>Formulario Teste - Contato</h1>
            <label htmlFor="text1">Label de Teste1</label>
            <input type="text" name='text1' id='text1'/>
            
            <label htmlFor="text2">Label de Teste2</label>
            <input type="text" name='text2' id='text2'/>

            <label htmlFor="text3">Label de Teste3</label>
            <input type="text" name='text3' id='text3'/>

            <button type="submit">Send</button>
        </form>
    )
}

export default Contato
