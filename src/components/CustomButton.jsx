import PropTypes from "prop-types";
import { PuffLoader } from "react-spinners";

CustomButton.propTypes = {
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	size: PropTypes.oneOf([32, 40, 48, 56]).isRequired,
	icon: PropTypes.string,
	leftIcon: PropTypes.bool,
	rightIcon: PropTypes.bool,
	isCurved: PropTypes.bool,
	isSquared: PropTypes.bool,
	isDashed: PropTypes.bool,
	isOutline: PropTypes.bool,
	isFilled: PropTypes.bool,
	type: PropTypes.oneOf(["button", "submit", "reset"]),
	classNames: PropTypes.string,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
};

function CustomButton({ title, onClick, size, icon, leftIcon, rightIcon, isCurved, isSquared, isDashed, isOutline, isFilled, type = "button", classNames = "", loading = false, disabled = false }) {
	return (
		<button type={type} onClick={onClick} disabled={disabled} style={{ height: size + "px" }} className={`flex items-center justify-center ${size === 32 ? "px-2 gap-x-1 text-sm" : size === 40 ? "px-2 gap-x-2 text-sm" : size === 48 || size === 56 ? "px-4 gap-x-2 sm:text-lg" : ""} ${isOutline ? "border border-primary sm:hover:bg-neutral2 text-primary" : isFilled ? "bg-primary text-white" : ""} ${isDashed ? "border-dashed" : ""} ${isCurved ? "rounded-full" : isSquared ? "rounded-lg" : ""} transition-colors ${classNames}`}>
			{loading ? (
				<PuffLoader color={isFilled ? "#FFFFFF" : "#417F56"} size={30} />
			) : (
				<>
					{icon && rightIcon && <img src={icon} alt={title} className={`${size === 32 ? "w-5 h-5" : size === 56 ? "w-8 h-8" : "w-6 h-6"}`} />}
					<span>{title}</span>
					{icon && leftIcon && <img src={icon} alt={title} className={`${size === 32 ? "w-5 h-5" : size === 56 ? "w-8 h-8" : "w-6 h-6"}`} />}
				</>
			)}
		</button>
	);
}

export default CustomButton;
