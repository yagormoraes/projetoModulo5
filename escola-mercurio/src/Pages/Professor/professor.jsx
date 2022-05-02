import React,{ useEffect, useState } from "react";
import ListaSeries from '../../Components/listaSeries/ListaSeries.jsx'
import {api} from "../../Services/API.js";
import { Link } from "react-router-dom";

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
        
        <div>
            <Link to={'/cadastro'}>Inscrever Aluno</Link>
            <div>
            {values.map((aluno) => {
            //console.log("aluno", aluno);
                return (
                    <ListaSeries 
                        key={aluno.MATRICULA}
                        nome={aluno.NOME}
                        email={aluno.EMAIL}
                        matricula={aluno.MATRICULA}
                    />

                )
            })}
            </div>
        </div>
    );
}
 
export default Professor;