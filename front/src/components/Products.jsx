import { Link } from "react-router-dom";
import useProducts from "../queries/useProducts";

const Products = () => {
  const productsQuery = useProducts();
  if (productsQuery.isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <h2>Productos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {productsQuery.data.map((product) => (
            <tr key={product.product_id}>
              <td>
                <Link to={`/productos/${product.product_id}`}>
                  {product.product_name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Products;
