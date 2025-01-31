import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import UserDashboard from "./pages/UserDashboard/UserDashboard.jsx";
import NotFound from "./pages/NotFound.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Search from "./pages/Search.jsx";
import SearchBlogs from "./pages/SearchBlogs.jsx";
import Blog from "./pages/Blog.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.jsx";

const routes = [
	{ path: "/", element: <Home /> },
	{ path: "/login", element: <Login /> },
	{ path: "/signup", element: <Signup /> },
	{
		path: "/dashboard/*",
		element: (
			<PrivateRoute roles={["customer"]}>
				<UserDashboard />
			</PrivateRoute>
		),
	},
	{ path: "/forgot-password/*", element: <ForgotPassword /> },
	{ path: "/product/*", element: <Product /> },
	{ path: "/cart", element: <Cart /> },
	{ path: "/search", element: <Search /> },
	{ path: "/blogs", element: <SearchBlogs /> },
	{ path: "/blog/*", element: <Blog /> },
	{ path: "/contact-us", element: <ContactUs /> },
	{ path: "/not-found", element: <NotFound /> },
	{ path: "*", element: <NotFound /> },
];

export default routes;
