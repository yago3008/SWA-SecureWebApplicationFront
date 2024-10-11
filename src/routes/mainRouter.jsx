import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/register";

const routes = createBrowserRouter([
    { 
        path: "/register",
        element: (
            <Register/>
        )
    }
    
]);

export default routes;
