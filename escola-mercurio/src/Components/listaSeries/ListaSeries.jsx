import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./listaSeriesStyled.jsx";

function ListaSeries({ id, nome, turma, matricula, data_de_nascimento, ano, responsavel ,bairro ,cidade}) {
  return (
    // Criamos uma estilização com styled feita em arquivo separado e chamada aqui como Container
    <Container>
      <Link to={"/visualizar/" + id}>
          <p>{nome}</p>
          <p>{turma}</p>
          <p>{matricula}</p>
          <p>{ano}</p>
          <p>{responsavel}</p>
          <p>{bairro}</p>
          <p>{cidade}</p>
          

          {/* usando Link */}
      </Link>
      {/* <Button nome="Deletar" click={handleDelete} /> */}
    </Container>
  );
}

export default ListaSeries