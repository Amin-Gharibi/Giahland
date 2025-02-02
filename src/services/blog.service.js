import API_CONFIG from "../config/api.config";
import apiClient from "./api.service";

export const BlogService = {
	async createOne(title, content, authorId = null) {
		try {
			const sendingData = {
				title,
				content,
			};
			authorId && (sendingData.authorId = authorId);
			const response = await apiClient.post("/blogs", sendingData);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getMany(limit, offset, sortBy = null, order = null, category = null) {
		try {
			const url = new URL(API_CONFIG.BASE_URL + "/blogs");
			url.searchParams.set("limit", limit);
			url.searchParams.set("offset", offset);
			sortBy && url.searchParams.set("sortBy", sortBy);
			order && url.searchParams.set("order", order);
			category && url.searchParams.set("category", category);

			const response = await apiClient.get(url.pathname + url.search);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async updateOne(id, title, content) {
		try {
			const response = await apiClient.put(`/blogs/${id}`, { title, content });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async deleteOne(id) {
		try {
			const response = await apiClient.delete(`/blogs/${id}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getByID(id) {
		try {
			const response = await apiClient.delete(`/blogs/${id}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};
