import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import Header from "./Home/Header";
import HeaderPage from "./HeaderPage/HeaderPage";
import AboutPage from "./AboutPage/AboutPage";
import ShopPage from "./ShopPage/ShopPage";
import ContantPage from "./ContantPage/ContantPage";
import SeachPage from "./Search/SearchPage";
import ProductPage from "./ProductPage/ProductPage"
import CardPage from "./CardPage/CardPage"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "header",
    element: <HeaderPage/>
  },
  {
    path: "about",
    element: <AboutPage/>
  },
  {
    path: "shop",
    element: <ShopPage/>
  },
  {
    path: "/contant",
    element: <ContantPage/>
  },
  {
    path: "/search",
    element: <SeachPage/>
  },
  {
    path: "/product",
    element: <ProductPage/>
  },
  {
    path: "/card",
    element: <CardPage/>
  },
  
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);