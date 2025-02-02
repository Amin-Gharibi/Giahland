import { createRoot } from "react-dom/client";
import "./style/output.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserAuthProvider } from "./contexts/UserAuthContext.jsx";

createRoot(document.getElementById("root")).render(
		<BrowserRouter>
			<UserAuthProvider>
				<App />
			</UserAuthProvider>
		</BrowserRouter>
);
