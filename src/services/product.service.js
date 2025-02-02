import API_CONFIG from "../config/api.config";
import apiClient from "./api.service";

export const ProductService = {
	async createProduct(name, price, description, categories, stock, features) {
		try {
			const response = await apiClient.post("/products", { name, price, description, categories, stock, features });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async uploadImages(id, images) {
		try {
			const response = await apiClient.post(`/products/${id}/images`, { images });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getMany(limit, offset, sortBy = null, order = null, category = null, minPrice = null, maxPrice = null, q = "") {
		try {
			const url = new URL(API_CONFIG.BASE_URL + "/products");
			url.searchParams.set("limit", limit);
			url.searchParams.set("offset", offset);
			sortBy && url.searchParams.set("sortBy", sortBy);
			order && url.searchParams.set("order", order);
			category && url.searchParams.set("category", category);
			minPrice && url.searchParams.set("minPrice", minPrice);
			maxPrice && url.searchParams.set("maxPrice", maxPrice);
			q && url.searchParams.set("q", q);

			const response = await apiClient.get(url.pathname + url.search);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async updateProduct(id, name, price, description, categories, stock, features, status) {
		try {
			const response = await apiClient.post(`/products/${id}`, { name, price, description, categories, stock, features, status });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async deleteProduct(id) {
		try {
			const response = await apiClient.delete(`/products/${id}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async deleteProductImage(productId, imageId) {
		try {
			const response = await apiClient.delete(`/products/${productId}/images/${imageId}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getByID(id) {
		try {
			const response = await apiClient.get(`/products/${id}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getByCategory(categoryId) {
		try {
			const response = await apiClient.get(`/products/category/${categoryId}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getFeaturedProducts() {
		try {
			const response = await apiClient.get("/products/featured");
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getBestSellerProducts() {
		try {
			const response = await apiClient.get("/products/best-sellers");
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getNewArrivalProducts() {
		try {
			const response = await apiClient.get("/products/new-arrivals");
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};
