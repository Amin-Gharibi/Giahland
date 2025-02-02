import { useState, useCallback } from "react";

export default function useApi(apiFunc) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const execute = useCallback(
		async (...params) => {
			try {
				setLoading(true);
				setError(null);
				const response = await apiFunc(...params);
				setData(response.data);
				return response.data;
			} catch (error) {
				setError(error.response?.data || error.message);
				throw error;
			} finally {
				setLoading(false);
			}
		},
		[apiFunc]
	);

	return { data, error, loading, execute };
}