import axios from "axios";
import authHeader from "./auth-header";

const API_URL = `http://localhost:8080/api/admin/`;

const getProductAll = () => {
  return axios.get(API_URL + "product", { headers: authHeader() });
};
const createProduct = (
  productName,
  age,
  sizeProduct,
  colorProduct,
  priceProduct,
  typeProduct
) => {
  return axios.post(
    API_URL + "product",
    {
      productName,
      age,
      sizeProduct,
      colorProduct,
      priceProduct,
      typeProduct,
    },
    { headers: authHeader() }
  );
};
const deleteProduct = (idProduct) => {
  return axios.delete(
    API_URL + "product",
    {
      data: {
        idProduct: idProduct,
      },
    },
    { headers: authHeader() }
  );
};

const UserService = {
  getProductAll,
  createProduct,
  deleteProduct,
};

export default UserService;
