import axios from "axios";
const API = import.meta.env.VITE_API_URL;

const getAllLsda = async () => {
  return axios
    .get(`${API}/api/warriors`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

const getAllQuestions = async () => {
  return axios
    .get(`${API}/api/questions`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export { getAllLsda, getAllQuestions };
