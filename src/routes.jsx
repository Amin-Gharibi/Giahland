import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import UserDashboard from "./pages/UserDashboard/UserDashboard.jsx";
import NotFound from "./pages/NotFound.jsx";

const routes = [
    {path: '/', element: <Home/>},
    {path: '/login', element: <Login/>},
    {path: '/signup', element: <Signup/>},
    {path: '/dashboard', element: <UserDashboard/>},
    {path: '*', element: <NotFound/>}
]

export default routes