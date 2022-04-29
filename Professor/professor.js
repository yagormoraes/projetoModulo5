import axios from "axios";


export const api = axios.create({
    baseUrl:"https://escola-api-rest.herokuapp.com/"
})
