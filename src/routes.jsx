import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

const routes = [
    {path: '/', element: <Home/>},
    {path: '/login', element: <Login/>},
    {path: '/signup', element: <Signup/>}
]

export default routes