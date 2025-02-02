import PropTypes from "prop-types";
import { PuffLoader } from "react-spinners";

CustomIconButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	size: PropTypes.oneOf([32, 40, 48, 56]).isRequired,
	icon: PropTypes.string.isRequired,
	isCurved: PropTypes.bool,
	isSquared: PropTypes.bool,
	isOutline: PropTypes.bool,
	isFilled: PropTypes.bool,
	type: PropTypes.oneOf(["button", "submit", "reset"]),
	classNames: PropTypes.string,
};

function CustomIconButton({ onClick, size, icon, isCurved, isSquared, isOutline, isFilled, type = "button", classNames = "", loading = false, disabled = false }) {
	return (
		<button type={type} onClick={onClick} disabled={disabled} style={{ height: size + "px", width: size + "px" }} className={`flex items-center justify-center ${isOutline ? "bg-white border border-primary sm:hover:bg-neutral2 text-primary" : isFilled ? "bg-primary text-white" : ""} ${isCurved ? "rounded-full" : isSquared ? "rounded-lg" : ""} transition-colors disabled:opacity-50 ${classNames}`}>
			{loading ? <PuffLoader color={isFilled ? "#FFFFFF" : "#417F56"} size={30} /> : icon && <img src={icon} className={`${size === 32 ? "w-5 h-5" : size === 56 ? "w-8 h-8" : "w-6 h-6"} text-white`} />}
		</button>
	);
}

export default CustomIconButton;
