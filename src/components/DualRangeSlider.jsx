import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import EnToFaNum from "../utils/EnToFaNum";
import { SearchContext } from "../contexts/SearchContext";
import { useSearchParams } from "react-router-dom";

function DualRangeSlider({ initialMinPrice, initialMaxPrice, minValue, maxValue, minimumGap }) {
	const { register } = useContext(SearchContext);
    const [searchParams, setSearchParams] = useSearchParams()

	const [sliderMinValue] = useState(initialMinPrice);
	const [sliderMaxValue] = useState(initialMaxPrice);

	const [minVal, setMinVal] = useState(minValue);
	const [maxVal, setMaxVal] = useState(maxValue);
	const [minInput, setMinInput] = useState(minValue);
	const [maxInput, setMaxInput] = useState(maxValue);

	const minGap = minimumGap;

	const slideMin = (e) => {
		const value = parseInt(e.target.value, 10);
		if (value >= sliderMinValue && maxVal - value >= minGap) {
			setMinVal(value);
			setMinInput(value);
            searchParams.set("min", value);
			setSearchParams(searchParams);
		}
		register("minPrice").onChange(e);
	};

	const slideMax = (e) => {
		const value = parseInt(e.target.value, 10);
		if (value <= sliderMaxValue && value - minVal >= minGap) {
			setMaxVal(value);
			setMaxInput(value);
            searchParams.set("max", value);
			setSearchParams(searchParams);
		}
		register("maxPrice").onChange(e);
	};

	const setSliderTrack = () => {
		const range = document.querySelector(".slider-track");

		if (range) {
			const minPercent = ((minVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;
			const maxPercent = ((maxVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;

			range.style.left = `${minPercent}%`;
			range.style.right = `${100 - maxPercent}%`;
		}
	};

	useEffect(() => {
		setSliderTrack();
	}, [minVal, maxVal]);

	return (
		<div className="relative flex flex-col items-stretch border border-neutral6 px-3.5 py-5 rounded-xl ltr">
			<h6 className="absolute right-3 text-neutral9 bg-white px-1 -top-3 lg:-top-4 text-xs leading-5 lg:text-base lg:leading-7">بازه قیمت</h6>
			<div className="flex items-center justify-between text-sm lg:text-base">
				<span className="rtl">{EnToFaNum(minInput, true)} تومان</span>
				<span className="rtl">{EnToFaNum(maxInput, true)} تومان</span>
			</div>
			<div className="range-slider">
				<div className="slider-track"></div>
				<input type="range" min={sliderMinValue} max={sliderMaxValue} step={100_000} {...register("minPrice", { valueAsNumber: true })} value={minVal} onChange={slideMin} className="min-val" />
				<input type="range" min={sliderMinValue} max={sliderMaxValue} step={100_000} {...register("maxPrice", { valueAsNumber: true })} value={maxVal} onChange={slideMax} className="max-val" />
			</div>
		</div>
	);
}

DualRangeSlider.propTypes = {
	initialMinPrice: PropTypes.number.isRequired,
	initialMaxPrice: PropTypes.number.isRequired,
    minValue: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
	minimumGap: PropTypes.number.isRequired,
};

export default DualRangeSlider;