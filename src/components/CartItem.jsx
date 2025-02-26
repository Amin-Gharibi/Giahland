import React from "react";
import PropTypes from "prop-types";
import plusPrimary from "../assets/svg/plus-primary.svg";
import trashError from "../assets/svg/trash-error.svg";
import EnToFaNum from "../utils/EnToFaNum";
import API_CONFIG from "../config/api.config";

function CartItem({ image, name, price, count, onCountUpClick, onCountDownClick, updating }) {
	const imagePath = new URL(API_CONFIG.BASE_URL).origin + image;
	return (
		<div className={"flex items-stretch gap-x-4"}>
			<img src={imagePath} alt={name} loading="lazy" className={"max-w-32 lg:w-36 object-contain"} />
			<div className={"flex flex-col"}>
				<h6 className={"min-h-16 flex-grow font-semibold text-lg lg:text-xl leading-7 text-neutral12"}>{name}</h6>
				<div className={"flex items-center gap-x-6"}>
					<span className={"text-sm lg:text-base leading-7 text-neutral11"}>قیمت:</span>
					<span className={"text-base lg:text-xl leading-9 text-black whitespace-nowrap"}>{EnToFaNum(price, true)} تومان</span>
				</div>
				<div className={"flex justify-evenly lg:justify-center items-center gap-x-3 lg:gap-x-6 mt-3 rounded-lg border border-neutral7 py-1.5 px-2"}>
					<button onClick={onCountUpClick} disabled={updating}>
						<img src={plusPrimary} className={"w-5 h-5 lg:w-7 lg:h-7"} />
					</button>
					<div className={"flex flex-col items-center"}>
						<span className={"font-semibold text-base lg:text-xl leading-7 text-neutral12"}>{EnToFaNum(count)}</span>
						<span className={"text-xs lg:text-sm text-neutral12"}>تعداد</span>
					</div>
					<button onClick={onCountDownClick} disabled={updating}>
						<img src={trashError} className={"w-5 h-5 lg:w-7 lg:h-7"} />
					</button>
				</div>
			</div>
		</div>
	);
}

CartItem.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
	onCountUpClick: PropTypes.func.isRequired,
	onCountDownClick: PropTypes.func.isRequired,
    updating: PropTypes.bool.isRequired
};

export default CartItem;
