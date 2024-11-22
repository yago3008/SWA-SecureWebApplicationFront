import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import Home from "../pages/home";
import Products from "../pages/products";

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
    }

    
]);

export default routes;
