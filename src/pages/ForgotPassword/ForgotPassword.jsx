import { Navigate, Route, Routes } from "react-router-dom";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { useUserAuth } from "../../contexts/UserAuthContext";
import { PuffLoader } from "react-spinners";

function UserDashboard() {
	const { isLoading, isAuthenticated } = useUserAuth();

	if (isLoading) {
		return (
			<div className="h-screen flex items-center justify-center">
				<PuffLoader size={60} color="#417F56" />
			</div>
		);
	}

	if (isAuthenticated) {
		// if user is already logged in
		if (isAdmin()) {
			return <Navigate to={"/admin-dashboard"} />;
		}
		if (isSeller()) {
			return <Navigate to={"/seller-dashboard"} />;
		}
		return <Navigate to={"/dashboard"} />;
	}
	return (
		<Routes>
			<Route path="" element={<FirstStep />} />
			<Route path="reset/:token" element={<SecondStep />} />
		</Routes>
	);
}

export default UserDashboard;
