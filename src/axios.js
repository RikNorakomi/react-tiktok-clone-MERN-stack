import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-mern-backend-tutorial.herokuapp.com/",
});

export default instance;
