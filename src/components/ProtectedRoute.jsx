import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";
import { PuffLoader } from "react-spinners";

const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, isLoading } = useUserAuth();

	if (isLoading) {
		// If data is being fetched from server
		return (
			<div className="h-screen flex items-center justify-center">
				<PuffLoader size={60} color="#417F56" />
			</div>
		);
	}

	if (!isAuthenticated) {
		// If user is not logged in, redirect to login page
		return <Navigate to="/login" />;
	}

	return children;
};

export default ProtectedRoute;
