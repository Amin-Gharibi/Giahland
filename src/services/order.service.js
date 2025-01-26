import apiClient from "./api.service";

export const OrderService = {
	async createOne(addressId, paymentMethod, items) {
		try {
			const response = await apiClient.post("/orders", { addressId, paymentMethod, items });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getMyOrders() {
		try {
			const response = await apiClient.get("/orders/me");
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getOrderDetails(id) {
		try {
			const response = await apiClient.get(`/orders/${id}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getSellerOrders() {
		try {
			const response = await apiClient.get("/orders/seller-orders");
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async changeOrderStatus(id, status) {
		try {
			const response = await apiClient.put(`/orders/${id}/status`, { status });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};
