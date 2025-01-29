import apiClient from "./api.service";

export const UserService = {
	async getMe() {
		try {
			const response = await apiClient.get("/users/me");
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async updateProfile(firstName, lastName, phoneNumber, homeAddress, homePhoneNumber) {
		try {
			const response = await apiClient.put("/users/profile", { firstName, lastName, phoneNumber, homeAddress, homePhoneNumber });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async updatePassword(currentPassword, newPassword) {
		try {
			const response = await apiClient.put("/users/password", { currentPassword, newPassword });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async addAddress(address, city, province, postalCode) {
		try {
			const response = await apiClient.post("/users/addresses", { address, city, province, postalCode });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getAddresses() {
		try {
			const response = await apiClient.get("/users/addresses");
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async updateAddress(id, address, city, province, postalCode) {
		try {
			const response = await apiClient.put(`/users/addresses/${id}`, { address, city, province, postalCode });
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async deleteAddress(id) {
		try {
			const response = await apiClient.delete(`/users/addresses/${id}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getAddressByID(id) {
		try {
			const response = await apiClient.get(`/users/addresses/${id}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async setDefaultAddress(id) {
		try {
			const response = await apiClient.put(`/users/addresses/${id}/default`);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};
