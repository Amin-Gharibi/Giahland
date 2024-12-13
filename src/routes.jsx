import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import UserDashboard from "./pages/UserDashboard/UserDashboard.jsx";
import NotFound from "./pages/NotFound.jsx";
import MyInfo from "./pages/UserDashboard/MyInfo.jsx";
import ConsultationWithPlantPathologist from "./pages/UserDashboard/ConsultationWithPlantPathologist.jsx";
import Messages from "./pages/UserDashboard/Messages.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Search from "./pages/Search.jsx";
import SearchBlogs from "./pages/SearchBlogs.jsx";
import Blog from "./pages/Blog.jsx";

const routes = [
	{ path: "/", element: <Home /> },
	{ path: "/login", element: <Login /> },
	{ path: "/signup", element: <Signup /> },
	{
		path: "/dashboard/*",
		children: [
			{ path: "", element: <UserDashboard /> },
			{ path: "my-info", element: <UserDashboard DynamicParts={(props) => <MyInfo {...props} />} /> },
			{ path: "consultation-with-plant-pathologist", element: <UserDashboard DynamicParts={(props) => <ConsultationWithPlantPathologist {...props} />} /> },
			{
				path: "messages",
				children: [
					{ path: "", element: <UserDashboard DynamicParts={(props) => <Messages {...props} />} /> },
					{ path: ":chatId", element: <UserDashboard /> },
				],
			},
			{ path: "*", element: <NotFound /> },
		],
	},
	{ path: "/product/*", element: <Product /> },
	{ path: "/cart", element: <Cart /> },
	{ path: "/search", element: <Search /> },
	{ path: "/blogs", element: <SearchBlogs /> },
	{ path: "/blog/*", element: <Blog /> },
	{ path: "*", element: <NotFound /> },
];

export default routes;
