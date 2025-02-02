import API_CONFIG from "../config/api.config";
import apiClient from "./api.service";

export const SellerService = {
	async addSeller(userId, shopName) {
		try {
			const response = await apiClient.post("/sellers/add-seller", { userId, shopName });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getMany(limit, offset, status = null, sortBy = null, order = null) {
		try {
			const url = new URL(API_CONFIG.BASE_URL + "/sellers/list");
			url.searchParams.set("limit", limit);
			url.searchParams.set("offset", offset);
			sortBy && url.searchParams.set("sortBy", sortBy);
			order && url.searchParams.set("order", order);
			status && url.searchParams.set("status", status);

			const response = await apiClient.get(url.pathname + url.search);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async updateOne(shopName) {
		try {
			const response = await apiClient.put("/sellers/profile", { shopName });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getPrivateProfile() {
		try {
			const response = await apiClient.get("/sellers");
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getPublicProfile(id) {
		try {
			const response = await apiClient.get(`/sellers/${id}/profile`);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getSellerProducts(id, limit, offset, sortBy = null, order = null, status = null, category = null, minPrice = null, maxPrice = null, search = null) {
		try {
			const url = new URL(API_CONFIG.BASE_URL + `/sellers/${id}/products`);
			url.searchParams.set("limit", limit);
			url.searchParams.set("offset", offset);
			sortBy && url.searchParams.set("sortBy", sortBy);
			order && url.searchParams.set("order", order);
			status && url.searchParams.set("status", status);
			category && url.searchParams.set("category", category);
			minPrice && url.searchParams.set("minPrice", minPrice);
			maxPrice && url.searchParams.set("maxPrice", maxPrice);
			search && url.searchParams.set("search", search);

			const response = await apiClient.get(url.pathname + url.search);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getSellerOrders() {
		try {
			const response = await apiClient.get("/sellers/orders");
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getSellerStatistics() {
		try {
			const response = await apiClient.get("/sellers/statistics");
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};
