import { useQuery } from "react-query";

const useProduct = (id) => {
  return useQuery(["product", id], async () => {
    const res = await fetch(`http://localhost:5555/products/${id}`);
    return res.json();
  });
};

export default useProduct;
