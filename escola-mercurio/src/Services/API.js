import axios from "axios"


export const api = axios.create({
    baseURL:"https://api-escola-mercurio.herokuapp.com/aluno"
});

