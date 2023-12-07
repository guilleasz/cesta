import { useContext, useEffect, useState } from "react";
import { StateContext } from "../App";
import { ethers } from "ethers";

const Cart = () => {
  const [state] = useContext(StateContext);
  const [account, setAccount] = useState(null);
  const [txOk, setTxOk] = useState(null);
  const [txKo, setTxKo] = useState(null);

  const handleSetAccount = (accounts) => {
    setAccount(accounts[0]);
  };
  useEffect(() => {
    window.ethereum &&
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then(handleSetAccount);
    window.ethereum.on("accountsChanged", handleSetAccount);
    return () =>
      window.ethereum.removeListener("accountChanged", handleSetAccount);
  }, []);

  const handlePay = async () => {
    console.log(ethers);
    const txParams = {
      to: "0xF96c48C48F9301631B1Ed281eA863cb37CE7D472",
      from: account,
      value: ethers.toBeHex(ethers.parseEther(total.toString())),
    };
    try {
      setTxKo(null);
      const tx = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [txParams],
      });
      setTxOk(tx);
    } catch (error) {
      setTxKo(error);
    }
  };
  const total = state.cart.reduce(
    (memo, { product, quantity }) => memo + product.unit_price * quantity,
    0
  );

  return (
    <div>
      <h2>Cesta</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map(({ product, quantity }) => (
            <tr key={product.product_id}>
              <td>{product.product_id}</td>
              <td>{product.product_name}</td>
              <td>{product.unit_price}</td>
              <td>{quantity}</td>
              <td>{product.unit_price * quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: {total} </h3>
      <h4>Selected Account: {account}</h4>
      <button onClick={handlePay} className="btn btn-primary">
        Pagar
      </button>
      {txOk && <p className="alert alert-success">{txOk}</p>}
      {txKo && <p className="alert alert-error">{txKo}</p>}
    </div>
  );
};

export default Cart;
