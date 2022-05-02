import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./listaSeriesStyled.jsx";

function ListaSeries({matricula,nome,email}) {
  return (
    // Criamos uma estilização com styled feita em arquivo separado e chamada aqui como Container
    <Container>
      <Link to={"/visualizar/" + matricula}>
          <p>{nome}</p>
          <p>{email}</p>
          
      </Link>
      {/* <Button nome="Deletar" click={handleDelete} /> */}
    </Container>
  );
}

export default ListaSeries