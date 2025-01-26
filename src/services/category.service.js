import apiClient from "./api.service";

export const CategoryService = {
	async createOne(faName, enName) {
		try {
			const response = await apiClient.post("/categories", { faName, enName });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getAll() {
		try {
			const response = await apiClient.get("/categories");
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async updateOne(id, faName, enName) {
		try {
			const response = await apiClient.put(`/categories/${id}`, { faName, enName });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async deleteOne(id) {
		try {
			const response = await apiClient.delete(`/categories/${id}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getByID(id) {
		try {
			const response = await apiClient.get(`/categories/${id}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};
