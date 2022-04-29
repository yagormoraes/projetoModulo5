import { useEffect, useState } from "react";
import listaSeries from "../../Components/listaSeries"
import { api } from "../../professor";

function Series() {
    const [values, setValues] = useState([]);
    useEffect(() => {
        api
        .get("/aluno")
        .then((response) => {
            setValues(response.data);
            console.log("values", values);
        })
        .catch((erro) => console.log(erro));
    }, []);

    return (
        <div style={{display: 'grid', gridTemplateColumns: "repeat(3, 1fr)"}}>
        {values.map((aluno) => {
          console.log("aluno", aluno);
            return (
                <listaSeries key={aluno.id} name={aluno.name} dataNascimento={aluno.dataNascimento} cpf={aluno.cpf} email={aluno.email} telefone={aluno.telefone} turma={aluno.turma} ano={aluno.ano} matricula={aluno.matricula} responsavel={aluno.responsavel} rua={aluno.rua} numero={aluno.numero} cep={aluno.cep} cidade={aluno.cidade} bairro={aluno.bairro}/>
            )
        })}
        </div>
    );
}
 
export default Series;