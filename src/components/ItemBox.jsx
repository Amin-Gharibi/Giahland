import PropTypes from "prop-types";
import CustomButton from "./CustomButton.jsx";
import API_CONFIG from "../config/api.config.js";
import EnToFaNum from "../utils/EnToFaNum.js";

ItemBox.propTypes = {
	id: PropTypes.string,
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
};

function ItemBox({ id, image, name, price }) {
	const imagePath = new URL(API_CONFIG.BASE_URL).origin + image;
	return (
		<div className={"h-full flex flex-col sm:gap-6 border border-neutral5 rounded-xl p-4"}>
			<img className={"w-52 self-center sm:w-full h-64 object-contain max-sm:mt-4"} src={imagePath} alt={name} />
			<span className={"text-base sm:text-lg leading-8 text-start text-black cursor-default block flex-grow"}>{name}</span>
			<div className={"flex items-center justify-between max-sm:mt-2 max-sm:mb-4 cursor-default"}>
				<span className={"text-sm leading-6 text-black"}>قیمت:</span>
				<span className={"text-base sm:text-lg leading-8 text-black"}>{EnToFaNum(price, true)} تومان</span>
			</div>
			<CustomButton title={"مشاهده بیشتر"} onClick={() => id} size={40} isFilled={true} isSquared={true} />
		</div>
	);
}

export default ItemBox;
