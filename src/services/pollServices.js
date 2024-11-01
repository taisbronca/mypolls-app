import axios from "axios";
import Cookies from "js-cookie";

const baseURL =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_API_URL_PROD
    : import.meta.env.VITE_API_URL_DEV;

export function getAllPolls() {
  const response = axios.get(`${baseURL}/polls`);
  return response;
}

export function getAllPollsByUser() {
  const response = axios.get(`${baseURL}/polls/byUserId`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function createPoll(body) {
  const response = axios.post(`${baseURL}/polls/create`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function getPollById(id) {
  const response = axios.get(`${baseURL}/polls/byIdPoll/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function editPoll(body, id) {
  const response = axios.put(`${baseURL}/polls/update/${id}`, body, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}

export function deletePoll(id) {
  const response = axios.delete(`${baseURL}/polls/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}
