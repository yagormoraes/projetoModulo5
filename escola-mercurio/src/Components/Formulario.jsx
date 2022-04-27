import React from 'react'
import styled from 'styled-components'

function Formulario() {

    const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border: 2px solid black;
    width: 800px;
    `

    const Section = styled.section`
    display:flex;
    flex-direction:column;
    align-items: center;
    align-self:center;
    width:700px;
    background-color:white;
    gap:10px;
    `

    const TextDiv = styled.div`
    padding:50px 0;
    `
    const Input = styled.input`
    width:400px;
    `

    const TextArea = styled.textarea`
    width:400px;
    height:100px;
    resize:none;
    `

    const Button = styled.button`
    width:150px;
    height: 50px;
    margin:50px 0;
    font-family: 'Roboto', sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: 2px solid black;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;

    :hover{
        background-color: #2EE59D;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        border: 2px solid #0B6116;
        transform: translateY(-7px);
    }
    `

    return(
        <>
        <Form action="https://formsubmit.co/yago.dmoraes@gmail.com" method='POST'>
            <TextDiv>
                <h1>Entre em contato!</h1>
            </TextDiv>
            <Section>
                <label htmlFor="nome">Nome:</label>
                <Input 
                type="text" name='nome' id='nome' placeholder='Insira seu nome.' required/>
                
                <label htmlFor="email">Email:</label>
                <Input type="email" name='email' id='email' placeholder='Insira seu email.' required/>

                <label htmlFor="assunto">Assunto:</label>
                <Input type="text" name='assunto' id='assunto' placeholder='Sobre qual assunto gostaria de tratar?'required/>

                <label htmlFor="msg">Mensagem:</label>
                <TextArea type="text" name='msg' id='msg' placeholder='Insira seu mensagem.'required/>

                <Button type="submit">Envie</Button>
            </Section>
            
        </Form>
        </>
        
    )
}

export default Formulario