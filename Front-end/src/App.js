import Register from "./pages/admin/Register";
import Login from "./pages/admin/Login";
import Admin from "./pages/admin/Admin";
import "./App.css";
import "./dashboard.css";
import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/admin/products/ProductList";
import ProductDetail from "./pages/admin/products/ProductDetail";
import ProductAdd from "./pages/admin/products/ProductAdd";
import ProudctEdit from "./pages/admin/products/ProudctEdit";
import CategoryList from "./pages/admin/product-categories/CategoryList";
import CategoryAdd from "./pages/admin/product-categories/CategoryAdd";
import CategoryDetail from "./pages/admin/product-categories/CategoryDetail";
import CategoryEdit from "./pages/admin/product-categories/CategoryEdit";
import Dashboard from "./pages/admin/dashboard /Dashboard";
import Orders from "./pages/admin/order/Orders";
import TwoColumns from "./pages/user/layout/TwoColumns";
import OneColumn from "./pages/user/layout/OneColumn";
import Home from "./pages/user/home/Home";
import MyAcct from "./pages/user/myaccount/MyAcct";
import LoginRegister from "./pages/user/myaccount/LoginRegister";
import HiUser from "./pages/user/myaccount/HiUser";
import UserProductDetail from "./pages/user/product/UserProductDetail";
import SearchResults from "./pages/user/search-results/SearchResults";
import Category from "./pages/user/category/Category";
import ShoppingCart from "./pages/user/cart/ShoppingCart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/_cpanel" element={<Admin />}>
          <Route path="" element={<Dashboard />}></Route>
          <Route path="/_cpanel/product-add" element={<ProductAdd />}></Route>
          <Route path="/_cpanel/products" element={<ProductList />}></Route>
          <Route path="/_cpanel/products/:id" element={<ProductDetail />}></Route>
          <Route path="/_cpanel/products/edit/:id" element={<ProudctEdit />}></Route>
          <Route path="/_cpanel/categories" element={<CategoryList />}></Route>
          <Route path="/_cpanel/categories/add" element={<CategoryAdd />}></Route>
          <Route path="/_cpanel/categories/:id" element={<CategoryDetail />}></Route>
          <Route path="/_cpanel/categories/edit/:id" element={<CategoryEdit />}></Route>
          <Route path="/_cpanel/orders" element={<Orders />}></Route>
        </Route>
        <Route path="" element={<OneColumn />} >
          <Route path="" element={<TwoColumns />}>
            <Route path="" element={<Home />}></Route>
            <Route path="/search-results" element={<SearchResults />}></Route>
            <Route path="/category/:categoryName/:categoryID" element={<Category />}></Route>
          </Route>
          <Route path="/product/:id" element={<UserProductDetail />}></Route>
          <Route path="/_mycart" element={<ShoppingCart />}></Route>
          <Route path="/_myacct" element={<MyAcct />}>
            <Route path="/_myacct/login-register" element={<LoginRegister />}></Route>
            <Route path="/_myacct" element={<HiUser />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
