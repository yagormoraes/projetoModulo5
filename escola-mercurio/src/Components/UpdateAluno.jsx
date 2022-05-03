import React,{useState,useEffect } from 'react'
import { api } from '../Services/API';
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateAluno() {
    const alunoEditado = ({id})=>{
        const [aluno, setAluno] = useState
        //const [load, setLoad] = useState(false)
        const nav = useNavigate()
        const {idMatricula} = useParams()
    

    useEffect(()=>{
        api
          .get(`/matricula/${idMatricula}`)
          .then((resp)=>{
            setAluno(resp.data.alunos[0])
            console.log("data:",resp.data.alunos[0]);
          })
          .catch(e => console.log(e))
      },[idMatricula])

    const handleUpdate = () =>{
        api.put('/id/'+aluno.ID, aluno)
        .then((resp)=>{
            console.log(resp.data.aluno)
            nav(`visualizar/${idMatricula}`)
        })
        .catch((e)=>console.log(e))
        
      }

    const handleChange = (e) =>{
        setAluno({...aluno,[e.target.name]:e.target.value})
    }

  return (
    <div>Testando</div>
  )
}
}
