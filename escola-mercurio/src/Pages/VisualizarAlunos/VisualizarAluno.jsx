import React, { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { api } from "../../Services/API.js";
export default function Visualizar() {

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


  return(

    <>
        <div>
          <h1>
            <span>Aluno:</span> {aluno.NOME}
          </h1>
          <p>
            <span>Matricula:</span>  {aluno.MATRICULA}
          </p>
          <p>
            <span>Turma:</span> {aluno.TURMA}
          </p>
          <p>
            <span>Email: </span> {aluno.EMAIL}
          </p>
          <p>
            <span>Ano: </span> {aluno.ANO}
          </p>
          <p>
            <span>Data de Nascimento: </span> {aluno.DATA_DE_NASCIMENTO}
          </p>
          <p>
            <span>CPF: </span> {aluno.CPF}
          </p>
          <p>
            <span>Telefone: </span> {aluno.TELEFONE}
          </p>
          <p>
            <span>Responsável: </span> {aluno.RESPONSAVEL}
          </p>
          <p>
            <span>Rua: </span> {aluno.RUA}
          </p>
          <p>
            <span>Número: </span> {aluno.NUMERO}
          </p>
          <p>
            <span>CEP: </span> {aluno.CEP}
          </p>
          <p>
            <span>Cidade: </span> {aluno.CIDADE}
          </p>
          <p>
            <span>Bairro: </span> {aluno.BAIRRO}
          </p>
        </div>

        <button onClick={() => handleDelete()}>Deletar Aluno</button>
        <button onClick={() => handleUpdate()} >Atualizar Aluno</button>
    </>
    

  )


}