import apiClient from "./api.service";

export const AuthService = {
	async register(firstName, lastName, email, password, phoneNumber) {
		try {
			const response = await apiClient.post("/auth/register", { firstName, lastName, email, password, phoneNumber });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async login(email, password) {
		try {
			const response = await apiClient.post("/auth/login", { email, password });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async refreshToken(refreshToken) {
		try {
			const response = await apiClient.post("/auth/refresh-token", { refreshToken });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async forgotPassword(email) {
		try {
			const response = await apiClient.post("/auth/forgot-password", { email });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async resetPassword(token, newPassword) {
		try {
			const response = await apiClient.post("/auth/reset-password", { token, newPassword });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async requestVerificationCode() {
		try {
			const response = await apiClient.post("/auth/req-code");
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async verifyEmail(code) {
		try {
			const response = await apiClient.post("/auth/verify-email", { code });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};
