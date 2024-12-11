import React from "react";
import PropTypes from "prop-types";

function CategoryItem({ title, onClick, isActive }) {
	return (
		<button type="button" onClick={onClick} className={"w-full flex items-center gap-x-2 transition-colors"}>
			<label className={`w-4 h-4 rounded ${isActive ? "bg-primary" : "bg-neutral5"}`}>
				<input type="checkbox" className={"opacity-0 invisible absolute"} />
			</label>
			<span className={"text-neutral12"}>{title}</span>
		</button>
	);
}

CategoryItem.propTypes = {
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	isActive: PropTypes.bool.isRequired,
};

export default CategoryItem;
