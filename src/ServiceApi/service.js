import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const service = (page) => {
  return axios.get("/products", {
    params: {
      page: page,
    },
  });
};

export const postService = (cart, name, email, address, number, message) => {
  axios.post("/orders", { cart, name, email, address, number, message });
};
