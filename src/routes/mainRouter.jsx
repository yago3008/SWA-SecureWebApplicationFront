import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import Home from "../pages/home";
import Products from "../pages/products";
import Cart from "../pages/cart";
import Payment from "../pages/payment";
import PaymentStatus from "../pages/payment/paymentStatus";

const routes = createBrowserRouter([
    { 
        path: "/register",
        element: (
            <Register/>
        )
    },
    {
        path: "/login",
        element: (
            <Login/>
        )
    },
    {
        path: "/",
        element: (
            <Home/>
        )
    },
    {
        path: "/products",
        element: (
            <Products/>
        )
    },
    {
        path: "/cart",
        element: (
            <Cart/>
        )
    },
    {
        path: "/payment",
        element: (
            <Payment/>
        )
    },
    {
        path: "/payment/status/:transactionId",
        element: (
            <PaymentStatus/>
        )
    }


    
]);

export default routes;
