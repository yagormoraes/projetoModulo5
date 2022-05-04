// Importamos o hooj useContext para conseguirmos acessar algum contexto
import React from "react";
import {FormControl, FormLabel } from 'react-bootstrap';
import styled from "styled-components";

function Input({ nome, onChange, name, type, register, value }) {

    const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 2.5em;
  margin-right: 2.5em;
  label{
    color: green;
  }
`;

  return (

    <Container >
      <FormLabel htmlFor="nome">{nome}</FormLabel>
      <FormControl
        type={type}
        name={name}
        id="nome"
        value={value}
        onChange={onChange}
        required
        {...register}
      />
    </Container>
  );
}

export default Input;