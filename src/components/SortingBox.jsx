import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import SortingOption from "./SortingOption";

function SortingBoxLg({ options }) {
	const [searchParams, setSearchParams] = useSearchParams();

	const onSortOptionClick = (enTitle) => {
		if (searchParams.get("sort") != enTitle) {
			searchParams.set("sort", enTitle);
		}
		setSearchParams(searchParams);
	};

	return (
		<div className={"sm:h-14 flex flex-col sm:flex-row items-stretch bg-white border border-neutral6 rounded-xl"}>
			<h6 className="self-center max-sm:py-4 px-4 lg:px-6 text-sm lg:text-base">مرتب‌سازی بر اساس:</h6>
			<div className="flex items-stretch max-sm:justify-evenly max-sm:mb-4">
				{options.map((option, index) => (
					<SortingOption key={index} title={option.title} onClick={() => onSortOptionClick(option.enTitle)} isActive={searchParams.get("sort") ? searchParams.get("sort") === option.enTitle : index === 0 ? true : false} />
				))}
			</div>
		</div>
	);
}

SortingBoxLg.propTypes = {
	options: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string.isRequired, enTitle: PropTypes.string.isRequired })),
};

export default SortingBoxLg;
