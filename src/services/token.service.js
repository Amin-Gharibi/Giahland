import { AuthService } from "./auth.service";

const TOKEN_KEY = "auth_tokens";

const tokenService = {
	// Store tokens securely
	setTokens(accessToken, refreshToken) {
		try {
			const tokens = {
				accessToken,
				refreshToken,
				expiry: new Date().getTime() + 15 * 60 * 1000, // 15 minutes from now
			};
			localStorage.setItem(TOKEN_KEY, JSON.stringify(tokens));
		} catch (error) {
			console.error("Error saving tokens:", error);
		}
	},

	// Get tokens
	getTokens() {
		try {
			const tokens = JSON.parse(localStorage.getItem(TOKEN_KEY));
			return tokens || null;
		} catch {
			return null;
		}
	},

	// if tokens were expired and tokens were available in localstorage then refresh tokens
	async refreshTokens() {
		try {
			const {refreshToken} = this.getTokens()
			const {access: newAccessToken, refresh: newRefreshToken} = await AuthService.refreshToken(refreshToken)
			this.setTokens(newAccessToken, newRefreshToken)
		} catch (error) {
			throw error;
		}
	},

	// Clear tokens on logout
	clearTokens() {
		localStorage.removeItem(TOKEN_KEY);
	},

	// Check if token is expired
	isTokenExpired() {
		const tokens = this.getTokens();
		if (!tokens) return true;
		return new Date().getTime() > tokens.expiry;
	},
};

export default tokenService;
