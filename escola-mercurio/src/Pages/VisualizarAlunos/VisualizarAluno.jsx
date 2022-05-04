import React, { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { api } from "../../Services/API.js";
import styled from 'styled-components'
import Input from "../../Components/Input.jsx";


export default function Visualizar() {

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

  const nav = useNavigate()
  const [aluno, setAluno] = useState([])
  const {idMatricula} = useParams()
  console.log("idMatricula:",idMatricula);

  useEffect(()=>{
    api
      .get(`/matricula/${idMatricula}`)
      .then((resp)=>{
        setAluno(resp.data.alunos[0])
        console.log("data:",resp.data.alunos[0]);
      })
      .catch(e => console.log(e))
  },[idMatricula])


  const handleDelete = () =>{
    api.delete('/id/'+aluno.ID)
    nav('/professor')
  }

  const handleUpdate = () =>{
    api.put('/id/'+aluno.ID)
    .then(resp=>console.log(resp.data))
  }

  //não sei pq n ta funcionando mas tudo bem
  const handleChange = (e) =>{
    setAluno({...aluno, [e.target.name]:e.target.value})
  }


  return(

    <>
        <Container>

          
          <p>
            <span>Aluno:</span>
            <Input name="nome" value={aluno.NOME} onChange={handleChange}></Input>
          </p>
          <p>
            <span>Matricula:</span>  
            <Input name="matricula" value={aluno.MATRICULA}></Input>
          </p>
          <p>
            <span>Turma:</span> 
            <Input name="turma" value={aluno.TURMA}></Input>
          </p>
          <p>
            <span>Email: </span> 
            <Input name="email" value={aluno.EMAIL}></Input>
          </p>
          <p>
            <span>Ano: </span> 
            <Input name="ano" value={aluno.ANO}></Input>
          </p>
          <p>
            <span>Data de Nascimento: </span> 
            <Input name="data" value={aluno.DATA_DE_NASCIMENTO}></Input>
          </p>
          <p>
            <span>CPF: </span> 
            <Input name="cpf" value={aluno.CPF}></Input>
          </p>
          <p>
            <span>Telefone: </span> 
            <Input name="telefone" value={aluno.TELEFONE}></Input>
          </p>
          <p>
            <span>Responsável: </span> 
            <Input name="responsavel" value={aluno.RESPONSAVEL}></Input>
          </p>
          <p>
            <span>Rua: </span> 
            <Input name="rua" value={aluno.RUA}></Input>
          </p>
          <p>
            <span>Número: </span> 
            <Input name="numero" value={aluno.NUMERO}></Input>
          </p>
          <p>
            <span>CEP: </span> 
            <Input name="cep" value={aluno.CEP}></Input>
          </p>
          <p>
            <span>Cidade: </span> 
            <Input name="cidade" value={aluno.CIDADE}></Input>
          </p>
          <p>
            <span>Bairro: </span> 
            <Input name="bairro" value={aluno.BAIRRO}></Input>
          </p>
        </Container>

        <button onClick={() => handleDelete()}>Deletar Aluno</button>
        <button onClick={handleUpdate} >Atualizar Aluno</button>
    </>
    

  )


}