import React,{ useEffect, useState } from "react";
import ListaSeries from '../../Components/listaSeries/ListaSeries.jsx'
import {api} from "../../Services/API.js";

function Professor() {
    const [values, setValues] = useState([]);
    useEffect(() => {
        api
        .get("")
        .then((response)=>{
            setValues(response.data.alunos)
            //console.log(response.data.alunos)
        })
        .catch((e)=>console.log(e))
    },[values])

    return (
        <div>
        <h1>Lista de Alunos</h1>
        {values.map((aluno) => {
          //console.log("aluno", aluno);
            return (
                <ListaSeries key={aluno.ID} nome={aluno.NOME}/>
            )
        })}
        </div>
    );
}
 
export default Professor;