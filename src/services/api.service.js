import axios from "axios";
import API_CONFIG from "../config/api.config";
import TokenService from "./token.service";

const apiClient = axios.create({
	baseURL: API_CONFIG.BASE_URL,
	timeout: API_CONFIG.TIMEOUT,
	headers: API_CONFIG.HEADERS,
});

// Request interceptor
apiClient.interceptors.request.use(
	(config) => {
		// Add auth token if exists
		const tokens = TokenService.getTokens();
		if (tokens?.accessToken) {
			config.headers.Authorization = `Bearer ${tokens.accessToken}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// Response interceptor
apiClient.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		// If error is 401 and we haven't tried to refresh token yet and the request that has failed is not refreshing token
		if (error.response?.status === 401 && !originalRequest._retry && originalRequest.url !== "/auth/refresh-token") {
			originalRequest._retry = true;

			try {
				const { newAccessToken } = await TokenService.refreshTokens();

				// Retry the original request
				originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
				return axios(originalRequest);
			} catch (refreshError) {
				// If refresh token is invalid, logout user
				TokenService.clearTokens();
				window.location.href = "/login?session_expire=true";
				return Promise.reject({
					response: {
						status: 401,
						data: {
							message: "Session expired. Please login again.",
							originalError: refreshError,
						},
					},
				});
			}
		}
		return Promise.reject(error);
	}
);

export default apiClient;
