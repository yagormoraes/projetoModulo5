import React from "react";
import Button from "react-bootstrap/Button";
function Botao({ click, nome }) {
 
  return (
    <> 
      <Button variant="success" type="submit"  onClick={click}>
        {nome}
      </Button>
    </>
  );
}

export default Botao;