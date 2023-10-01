import axios from "axios";

// Base URL which point out the resource,

const url = "http://localhost:8080/api/students";

export const getCall = (q: string, size: number, page: number) => {
    return axios.get(`${url}?q=${q}&size=${size}&page=${page}`)
}