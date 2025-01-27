import { toast } from "react-toastify";

// Default configuration for all toasts
const defaultConfig = {
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
    className: "toastBody"
};

// Toast utility functions
export const showToast = {
	success: (message) => {
		toast.success(message, {
			...defaultConfig,
			theme: "light",
		});
	},
	error: (message) => {
		toast.error(message, {
			...defaultConfig,
			theme: "light",
		});
	},
	warning: (message) => {
		toast.warning(message, {
			...defaultConfig,
			theme: "light",
		});
	},
	info: (message) => {
		toast.info(message, {
			...defaultConfig,
			theme: "light",
		});
	},
};
