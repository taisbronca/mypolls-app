import axios from "axios";
import Cookies from "js-cookie";

const baseURL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_API_URL_PROD
    : import.meta.env.VITE_API_URL_DEV;

export function signup(data) {
  const body = {
    ...data,
  };
  const response = axios.post(`${baseURL}/user/create`, body);
  return response;
}

export function signin(data) {
  const response = axios.post(`${baseURL}/auth/login`, data);
  return response;
}

export function userLogged() {
  const response = axios.get(`${baseURL}/user/findById`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}
