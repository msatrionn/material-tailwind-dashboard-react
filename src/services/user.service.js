import axios from "axios";
import authHeader from "./auth-header";

const API_URL = `${import.meta.env.VITE_API_URL}/api/test/`;

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getAdminBoard,
};

export default UserService;
