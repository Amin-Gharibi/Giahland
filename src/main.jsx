import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/output.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserAuthProvider } from "./contexts/UserAuthContext.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<UserAuthProvider>
				<App />
			</UserAuthProvider>
		</BrowserRouter>
	</StrictMode>
);
