import axios from "axios";
const API = import.meta.env.VITE_API_URL;

const getAllLsda = async () => {
  return axios
    .get(`${API}/api/warriors/with-weapons`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

const getAllQuestions = async () => {
  return axios
    .get(`${API}/api/questions`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

const getAllBien = async () => {
  return axios
    .get(`${API}/api/warriors/bien`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

const getAllMal = async () => {
  return axios
    .get(`${API}/api/warriors/mal`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export { getAllBien, getAllLsda, getAllMal, getAllQuestions };
