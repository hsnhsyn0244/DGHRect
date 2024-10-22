import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NoPage from "../pages/NoPage";
import ProductDetail from "../pages/ProductDetail";

function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/product-detail/:productId" element={<ProductDetail />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default RouterConfig;
