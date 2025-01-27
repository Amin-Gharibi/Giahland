import React, { createContext, useContext, useState, useEffect } from "react";
import TokenService from "../services/token.service";
import { UserService } from "../services/user.service";

const UserAuthContext = createContext();

export const useUserAuth = () => useContext(UserAuthContext);

export const UserAuthProvider = ({ children }) => {
	const [authState, setAuthState] = useState({
		isAuthenticated: false,
		user: null,
		isLoading: true,
	});

	// Function to fetch user data
	const fetchUserData = async () => {
		try {
			const response = await UserService.getMe();
			setAuthState((prev) => ({
				...prev,
				user: response.data,
				isLoading: false,
			}));
		} catch (error) {
			// If getMe fails, user is not authenticated
			setAuthState({
				isAuthenticated: false,
				user: null,
				isLoading: false,
			});
			TokenService.clearTokens();
		}
	};

	useEffect(() => {
		const initializeAuth = async () => {
			const tokens = TokenService.getTokens();

			if (tokens && !TokenService.isTokenExpired()) {
				setAuthState((prev) => ({ ...prev, isAuthenticated: true }));
				await fetchUserData();
			} else if (tokens && TokenService.isTokenExpired()) {
				await TokenService.refreshTokens();
				setAuthState((prev) => ({ ...prev, isAuthenticated: true }));
			} else {
				setAuthState({
					isAuthenticated: false,
					user: null,
					isLoading: false,
				});
			}
		};

		initializeAuth();
	}, []);

	const login = async (tokens) => {
		TokenService.setTokens(tokens.access, tokens.refresh);
		setAuthState((prev) => ({ ...prev, isAuthenticated: true }));
		await fetchUserData();
	};

	const logout = () => {
		TokenService.clearTokens();
		setAuthState({
			isAuthenticated: false,
			user: null,
			isLoading: false,
		});
	};

	return (
		<UserAuthContext.Provider
			value={{
				...authState,
				login,
				logout,
				isAdmin: () => authState.user?.role === "admin",
				isSeller: () => authState.user?.role === "seller",
				refreshUser: fetchUserData, // method to refresh user data
			}}>
			{children}
		</UserAuthContext.Provider>
	);
};
