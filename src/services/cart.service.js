import apiClient from "./api.service";

export const CartService = {
	async getUserCart() {
		try {
			const response = await apiClient.get("/cart");
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async addItemToCart(productId, quantity) {
		try {
			const response = await apiClient.post("/cart/items", { productId, quantity });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async updateQuantity(id, quantity) {
		try {
			const response = await apiClient.put(`/cart/items/${id}`, { quantity });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async removeItem(id) {
		try {
			const response = await apiClient.delete(`/cart/items/${id}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async clearCart() {
		try {
			const response = await apiClient.delete(`/cart`);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};
