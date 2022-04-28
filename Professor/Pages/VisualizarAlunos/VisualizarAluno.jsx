
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { alunosPorId } from "../../professor.js";
import { Container } from "./VisualizarAlunosStyled.jsx";
export default function Visualizar() {
  const [aluno, setAluno] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    alunosPorId
      .get(`/lookup.php?i=${id}`)
      .then((response) => {
        setAluno(response.data.aluno[0]);
        console.log("data", response.data.aluno[0]);
      })
      .catch((erro) => console.log(erro));
  }, [id]);

  return (
    //

    //Um componente styled criadoem arquivo para estilizar todo o componente e, fazendo uma requisição get/:id para trazer o item quando clicado no botão de visualizar na página home, redirecionando para este componente.
    <Container>
      <h1>
        <span>Aluno: </span> {aluno.strAluno}
      </h1>
      <img src={aluno.strAlunoThumb} alt="" />
      <p>
        <span>Dados: </span> {aluno.strInstructions}
      </p>
    </Container>
  );
}