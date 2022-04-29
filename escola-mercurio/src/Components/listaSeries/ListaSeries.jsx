import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./listaSeriesStyled.jsx";

function listaSeries({ id, nome, img, turma, matricula, data_de_nascimento}) {
  return (
    // Criamos uma estilização com styled feita em arquivo separado e chamada aqui como Container
    <Container>
      <Link to={"/visualizar/" + id}>
          <img src={img} alt="" />
          <p>{nome}</p>
          <p>{turma}</p>
          <p>{matricula}</p>
          <p>{data_de_nascimento}</p>
          {/* usando Link */}
      </Link>
      {/* <Button nome="Deletar" click={handleDelete} /> */}
    </Container>
  );
}

export default listaSeries