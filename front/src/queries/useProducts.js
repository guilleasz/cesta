import { useQuery } from "react-query";

const useProducts = () => {
  return useQuery("products", async () => {
    const res = await fetch("http://localhost:5555/products");
    return res.json();
  });
};

export default useProducts;
