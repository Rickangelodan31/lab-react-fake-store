import "./App.css";
import Navbar from "./components/Navbar";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

import { Routes, Route, useParams } from "react-router-dom";

function App() {
  let { productId } = useParams();

  return (
    <div className="App relative z-20 pt-20">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route
          path="/products/details/:productId"
          element={<ProductDetailsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
