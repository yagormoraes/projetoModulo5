import axios from "axios";


export const api = axios.create({
    baseUrl:"https://api-escola-mercurio.herokuapp.com/aluno"
});

