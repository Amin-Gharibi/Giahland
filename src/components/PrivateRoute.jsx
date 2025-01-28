import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useUserAuth } from "../contexts/UserAuthContext";
import { PuffLoader } from "react-spinners";

const PrivateRoute = ({ children, roles }) => {
	const { isAuthenticated, isLoading, user } = useUserAuth();

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

	if (roles && !roles.includes(user?.role)) {
		// If user does not have the required role, redirect to home page
		return <Navigate to="/" />;
	}

	return children;
};

PrivateRoute.propTypes = {
	roles: PropTypes.array.isRequired,
};

export default PrivateRoute;
