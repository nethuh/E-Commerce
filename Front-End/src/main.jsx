import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import {Route, RouterProvider, createRoutesFromElements} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

import PrivateRoute from "./components/PrivateRoute";

// Auth
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import AdminRoute from "./pages/Admin/AdminRoute";
import Profile from "./pages/User/Profile";
import UserList from "./pages/Admin/UserList.jsx";

import CategoryList from "./pages/Admin/CategoryList";

import ProductList from "./pages/Admin/ProductList";
import AllProducts from "./pages/Admin/AllProducts.jsx";
import ProductUpdate from "./pages/Admin/ProductUpdate.jsx";

import Home from "./pages/Home.jsx";
import Favorites from "./pages/Products/Favorites.jsx";
import ProductDetails from "./pages/Products/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Shop from "./pages/Shop.jsx";
import OrderList from "./pages/Admin/OrderList.jsx";
import Order from "../../Back-End/models/orderModel.js";
import PlaceOrder from "./pages/Order/PlaceOrder.jsx";
import Shipping from "./pages/Order/Shipping.jsx";
import {PayPalScriptProvider} from "@paypal/react-paypal-js";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>

            <Route path="" element={<PrivateRoute/>}>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/shipping" element={<Shipping/>}/>
                <Route path="/placeorder" element={<PlaceOrder/>}/>
                <Route path="/order/:id" element={<Order/>}/>
            </Route>

            <Route path="/admin" element={<AdminRoute/>}>
                <Route path="userlist" element={<UserList/>}/>
                <Route path="categorylist" element={<CategoryList/>}/>
                <Route path="productlist" element={<ProductList/>}/>
                <Route path="allproductslist" element={<AllProducts/>}/>
                <Route path="productlist/:pageNumber" element={<ProductList/>}/>
                <Route path="product/update/:_id" element={<ProductUpdate/>}/>
                <Route path="orderlist" element={<OrderList/>}/>

            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route index={true} path="/" element={<Home/>}/>
            <Route path="/favorite" element={<Favorites/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/shop" element={<Shop/>}/>
        </Route>
    )
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PayPalScriptProvider>
            <RouterProvider router={router} />
        </PayPalScriptProvider>
    </Provider>
)
