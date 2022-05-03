import React,{ useEffect, useState } from "react";
import ListaSeries from '../../Components/listaSeries/ListaSeries.jsx'
import {api} from "../../Services/API.js";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

    const NewButton = styled.button`
    background-color: #593202;
    border-radius: 10px;
    width:150px;
        :hover{
            background-color:#03A696;
        }
    
    `

    const NewDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    `

    const StyledLink = styled(Link)`
    padding: 5px;
    text-decoration:none;
    color:white;

        :visited{
            color:white;
        }
        `

    return (
        
        <NewDiv>
            <NewButton><StyledLink to={'/cadastro'}>Inscrever Aluno</StyledLink></NewButton> 
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
        </NewDiv>
    );
}
 
export default Professor;