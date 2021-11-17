import axios from "@/api/axios";

const products = () => {
  return axios.get("/food/random_food", { params: { size: 20 } });
};

export default {
  products,
};
