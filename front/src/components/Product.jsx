import { useParams } from "react-router-dom";
import useProduct from "../queries/useProduct";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { StateContext } from "../App";

const Product = () => {
  const params = useParams();
  const { isLoading, data } = useProduct(params.id);
  const [state, setState] = useContext(StateContext);

  const initialQuantity = state.cart.find(
    (item) => String(item.product.product_id) === params.id
  )?.quantity;
  const { register, handleSubmit } = useForm({
    defaultValues: { quantity: initialQuantity },
  });
  const onSubmit = (values) => {
    setState((state) => {
      return {
        ...state,
        cart: [
          ...state.cart.filter(
            (item) => item.product.product_id !== data[0].product_id
          ),
          { product: data[0], ...values },
        ],
      };
    });
  };

  if (isLoading) return <div>Cargando...</div>;
  return (
    <div>
      <h3>Producto</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <td>{data[0].product_id}</td>
          </tr>
          <tr>
            <th>Nombre</th>
            <td>{data[0].product_name}</td>
          </tr>
          <tr>
            <th>Precio</th>
            <td>{data[0].unit_price}</td>
          </tr>
        </thead>
      </table>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="quantity">Introduzca la cantidad</label>
          <input
            {...register("quantity")}
            type="number"
            className="form-control"
            id="quantity"
          />
          <button className="btn btn-primary mt-3">Agregar al carrito</button>
        </div>
      </form>
    </div>
  );
};

export default Product;
