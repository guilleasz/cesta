import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="text-end">
        <Link className="mx-2" to="/cesta">
          Cesta
        </Link>
        <Link className="mx-2" to="/productos">
          Productos
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
