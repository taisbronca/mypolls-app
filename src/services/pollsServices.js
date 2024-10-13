import axios from "axios";

const baseURL = "http://localhost:3000"

export function getAllPolls() {
    const response = axios.get(`${baseURL}/poll`);
    return response;
}