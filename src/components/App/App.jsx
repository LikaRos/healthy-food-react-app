import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "../SharedLayout/SharedLayout";

import "./vars.scss";
import "./reset.scss";
import "./base.scss";

import "./mixins.scss";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CartPage = lazy(() => import("../../pages/CartPage/CartPage"));
const ThankPage = lazy(() => import("../../pages/ThankPage/ThankPage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<p>Loading ...</p>}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/thanks" element={<ThankPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};
