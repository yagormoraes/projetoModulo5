import React,{ useEffect, useState } from "react";
import ListaSeries from '../../Components/listaSeries/ListaSeries.jsx'
import {api} from "../../Services/API.js";
import {Container} from './professorStyled'
function Professor() {
    const [values, setValues] = useState([]);
    useEffect(() => {
        api
        .get("")
        .then((response)=>{
            setValues(response.data.alunos)
        })
        .catch((e)=>console.log(e))
    },[values])

    return (
        <Container>
        <div>
        {values.map((aluno) => {
          //console.log("aluno", aluno);
            return (
                <ListaSeries key={aluno.ID} nome={aluno.NOME} turma ={aluno.TURMA} bairro={aluno.BAIRRO} ano={aluno.ANO} responsavel={aluno.RESPOSAVEL} cidade={aluno.CIDADE}/>
            )
        })}
        </div>
        </Container>
    );
}
 
export default Professor;