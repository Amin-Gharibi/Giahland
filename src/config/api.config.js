const API_CONFIG = {
	BASE_URL: import.meta.env.API_BASE_URL || "https://giahland-backend.liara.run/api",
	TIMEOUT: 30000,
	HEADERS: {
		"Content-Type": "application/json",
	},
};

export default API_CONFIG;
