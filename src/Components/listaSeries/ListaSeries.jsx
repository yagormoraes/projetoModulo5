import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./listaSeriesStyled.jsx";

function ListaSeries({matricula,nome,email}) {
  return (

    <Container>
      <Link to={"/visualizar/" + matricula}>
          <p>{nome}</p>
          <p>{email}</p>
          
      </Link>

    </Container>
  );
}

export default ListaSeries