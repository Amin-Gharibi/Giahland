import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import EnToFaNum from "../utils/EnToFaNum";
import { useSearchParams } from "react-router-dom";
import { useController } from "react-hook-form";

function DualRangeSlider({ minName, maxName, control, minValue, maxValue, minimumGap, changeUrl = false }) {
	const [searchParams, setSearchParams] = useSearchParams();

	// Initialize values from URL params or defaults
	const initialMin = parseInt(searchParams.get(minName)) || minValue;
	const initialMax = parseInt(searchParams.get(maxName)) || maxValue;

	const [minVal, setMinVal] = useState(initialMin);
	const [maxVal, setMaxVal] = useState(initialMax);
	const [minInput, setMinInput] = useState(initialMin);
	const [maxInput, setMaxInput] = useState(initialMax);

	// Setup react-hook-form controllers
	const { field: minField } = useController({
		name: minName,
		control,
		defaultValue: initialMin,
	});

	const { field: maxField } = useController({
		name: maxName,
		control,
		defaultValue: initialMax,
	});

	const slideMin = (e) => {
		const value = parseInt(e.target.value, 10);
		if (value >= minValue && maxVal - value >= minimumGap) {
			setMinVal(value);
			setMinInput(value);
			if (changeUrl) {
				searchParams.set(minName, value.toString());
				setSearchParams(searchParams);
			}
			minField.onChange(value);
		}
	};

	const slideMax = (e) => {
		const value = parseInt(e.target.value, 10);
		if (value <= maxValue && value - minVal >= minimumGap) {
			setMaxVal(value);
			setMaxInput(value);
			if (changeUrl) {
				searchParams.set(maxName, value.toString());
				setSearchParams(searchParams);
			}
			maxField.onChange(value);
		}
	};

	const setSliderTrack = () => {
		const range = document.querySelector(".slider-track");
		if (range) {
			const minPercent = ((minVal - minValue) / (maxValue - minValue)) * 100;
			const maxPercent = ((maxVal - minValue) / (maxValue - minValue)) * 100;
			range.style.left = `${minPercent}%`;
			range.style.width = `${maxPercent - minPercent}%`;
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
			<div className="range-slider mt-4 relative h-2">
				<div className="slider-track absolute h-2 bg-primary rounded"></div>
				<input type="range" min={minValue} max={maxValue} step={100000} value={minVal} onChange={slideMin} className="min-val absolute w-full pointer-events-none appearance-none bg-transparent" style={{ height: "5px", zIndex: 2 }} />
				<input type="range" min={minValue} max={maxValue} step={100000} value={maxVal} onChange={slideMax} className="max-val absolute w-full pointer-events-none appearance-none bg-transparent" style={{ height: "5px", zIndex: 2 }} />
			</div>
		</div>
	);
}

DualRangeSlider.propTypes = {
	minName: PropTypes.string.isRequired,
	maxName: PropTypes.string.isRequired,
	control: PropTypes.object.isRequired,
	minValue: PropTypes.number.isRequired,
	maxValue: PropTypes.number.isRequired,
	minimumGap: PropTypes.number.isRequired,
	changeUrl: PropTypes.bool,
};

export default DualRangeSlider;
