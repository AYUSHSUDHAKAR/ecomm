import { API } from "../../backend";

export const getProducts = async () => {
  const response = await fetch(`${API}/products`, { method: "GET" })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });

  const products = await response.json();
  return products;
};
