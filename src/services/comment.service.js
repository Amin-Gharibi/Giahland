import apiClient from "./api.service";

export const CommentService = {
	async createOne(parentType, parentId, content, rating) {
		try {
			const response = await apiClient.post(`/comments/${parentType}/${parentId}`, { content, rating });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getPageComments(parentType, parentId) {
		try {
			const response = await apiClient.get(`/comments/${parentType}/${parentId}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async updateStatus(id, status) {
		try {
			const response = await apiClient.put(`/comments/${id}/status`, { status });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async deleteComment(id) {
		try {
			const response = await apiClient.delete(`/comments/${id}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};
