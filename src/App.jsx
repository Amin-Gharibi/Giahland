import {useRoutes} from "react-router-dom";
import routes from "./routes.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const router = useRoutes(routes)
    return (
		<>
			{router}
			<ToastContainer rtl={true} />
		</>
	);
}

export default App
