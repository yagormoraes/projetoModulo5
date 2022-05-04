import React from "react"; 
import{ useState } from "react";
import {api} from "../../Services/API.js";
import "./cadastro.css"



function Cadastro() {
    const [cadastro, setCadastro]=useState({})
     function Cadastra(e){
         e.preventDefault()
         api.post("", cadastro)
            .then((response)=>{
                
            }).catch((e)=>{
                console.log(e)
            })
        }
       
     function handleOnChange(e){
        setCadastro({...cadastro,[e.target.name]: e.target.value}) 
     }
   
  return (
    <>
      <form className="label"onSubmit= {(e)=>Cadastra(e)} >
          <input name="nome" value={cadastro.nome}  onChange={handleOnChange}/>
          <label>Nome</label>
          <input name="dataDeNascimento" value={cadastro.dataDeNascimento} onChange={handleOnChange}/>
          <label>Data de Nascimento</label>
          <input name="cpf" value={cadastro.cpf}  onChange={handleOnChange}/>
          <label>Cpf</label>
          <input name="email"  value={cadastro.email} onChange={handleOnChange}/>
          <label>Email</label>
          <input name="telefone" value={cadastro.telefone}  onChange={handleOnChange}/>
          <label>Telefone</label>
          <input name="turma"  value={cadastro.turma} onChange={handleOnChange}/>
          <label>Turma</label>
          <input name="ano" value={cadastro.ano} onChange={handleOnChange}/>
          <label>Ano</label>
          <input name="matricula" value={cadastro.matricula}  onChange={handleOnChange}/>
          <label>Matricula</label>
          <input name="responsavel" value={cadastro.responsavel}  onChange={handleOnChange}/>
          <label>Responsavel</label>
          <input name="rua"  value={cadastro.rua} onChange={handleOnChange}/>
          <label>Rua</label>
          <input name="numero" value={cadastro.numero}  onChange={handleOnChange}/>
          <label>Numero</label>
          <input name="cep" value={cadastro.cep}  onChange={handleOnChange}/>
          <label>Cep</label>
          <input name="cidade" value={cadastro.cidade} onChange={handleOnChange}/>
          <label>Cidade</label>
          <input name="bairro" value={cadastro.bairro}  onChange={handleOnChange}/>
          <label>Bairro</label>
          
          <button >Cadastro</button>
      </form>
      
  
        
  </>
  );
}

export default Cadastro