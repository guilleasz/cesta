import { Routes, BrowserRouter, Route } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { queryClient } from "./queryClient";
import { createContext, useState } from "react";

export const StateContext = createContext(null);

const App = () => {
  const [state, setState] = useState({
    cart: [],
  });
  return (
    <StateContext.Provider value={[state, setState]}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Products />} />
              <Route path="*" element={<Products />} />
              <Route path="productos" element={<Products />} />
              <Route path="productos/:id" element={<Product />} />
              <Route path="cesta" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </StateContext.Provider>
  );
};
export default App;
