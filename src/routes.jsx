import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import UserDashboard from "./pages/UserDashboard/UserDashboard.jsx";
import NotFound from "./pages/NotFound.jsx";
import MyInfo from "./pages/UserDashboard/MyInfo.jsx";
import ConsultationWithPlantPathologist from "./pages/UserDashboard/ConsultationWithPlantPathologist.jsx";
import Messages from "./pages/UserDashboard/Messages.jsx";

const routes = [
    {path: '/', element: <Home/>},
    {path: '/login', element: <Login/>},
    {path: '/signup', element: <Signup/>},
    {
        path: '/dashboard/*',
        children: [
            {path: '', element: <UserDashboard/>},
            {path: 'my-info', element: <UserDashboard DynamicParts={(props) => <MyInfo {...props}/>}/>},
            {path: 'consultation-with-plant-pathologist', element: <UserDashboard DynamicParts={(props) => <ConsultationWithPlantPathologist {...props}/>}/>},
            {path: 'messages', element: <UserDashboard DynamicParts={(props) => <Messages {...props}/>}/>},
            {path: '*', element: <NotFound/>}
        ]
    },
    {path: '*', element: <NotFound/>}
]

export default routes