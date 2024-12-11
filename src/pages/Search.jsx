import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CustomInput from "../components/CustomInput.jsx";
import { useSearchParams } from "react-router-dom";
import DualRangeSlider from "../components/DualRangeSlider.jsx";
import { SearchContextProvider, SearchContext } from "../contexts/SearchContext.jsx";
import CategoryItem from "../components/CategoryItem.jsx";
import SortingOption from "../components/SortingOption.jsx";
import ItemBox from "../components/ItemBox.jsx";
import firstFlower from "../assets/temp/firstFlower.png";
import secondFlower from "../assets/temp/secondFlower.png";
import thirdFlower from "../assets/temp/thirdFlower.png";
import fourthFlower from "../assets/temp/firstFlower.png";

export default function Search() {
	const [searchedItems, setSearchedItems] = useState([
		{ image: firstFlower, title: "گیاه طبیعی بابا آدم", price: 857000, identifier: "1" },
		{ image: secondFlower, title: "گیاه طبیعی یوکا", price: 560000, identifier: "2" },
		{ image: thirdFlower, title: "گیاه طبیعی سانسوریا سبز", price: 250000, identifier: "3" },
		{ image: fourthFlower, title: "گیاه طبیعی ساکولنت", price: 57000, identifier: "4" },
		{ image: firstFlower, title: "گیاه طبیعی بابا آدم", price: 857000, identifier: "5" },
		{ image: secondFlower, title: "گیاه طبیعی یوکا", price: 560000, identifier: "6" },
		{ image: thirdFlower, title: "گیاه طبیعی سانسوریا سبز", price: 250000, identifier: "7" },
		{ image: fourthFlower, title: "گیاه طبیعی ساکولنت", price: 57000, identifier: "8" },
	]);

	return (
		<div>
			<div className={"container"}>
				<Header />
				<div className={"grid grid-cols-12 gap-x-6 mt-20"}>
					<aside className={"col-span-3 sticky top-5 h-max"}>
						<SearchContextProvider>
							<SearchForm />
						</SearchContextProvider>
					</aside>
					<div className={"col-span-9 flex flex-col items-stretch"}>
						<SortingSection />
						<div className={"grid grid-cols-3 gap-6 mt-6"}>
							{searchedItems.map((item, index) => (
								<ItemBox key={index} {...item} />
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

const SearchForm = () => {
	const { register, handleSubmit, errors, getValues, searchHandler } = useContext(SearchContext);
	const [searchParams, setSearchParams] = useSearchParams();
	const [categories, setCategories] = useState([
		{ title: "گل طبیعی", enTitle: "natural-plants", isActive: false },
		{ title: "گل مصنوعی", enTitle: "artificial-plants", isActive: false },
	]);

	useEffect(() => {
		const updatedCategories = categories.map((cat) => ({
			...cat,
			isActive: searchParams.get(`${cat.enTitle}`) === "yes",
		}));
		setCategories(updatedCategories);
	}, [searchParams]);

	const onCategoryItemClick = (enTitle) => {
		const template = `${enTitle}`;
		if (searchParams.get(template)) {
			searchParams.delete(template);
		} else {
			searchParams.set(template, "yes");
		}
		setSearchParams(searchParams);
		const updatedCategories = categories.map((cat) => ({
			...cat,
			isActive: searchParams.get(`${cat.enTitle}`) === "yes",
		}));
		setCategories(updatedCategories);
	};

	return (
		<form onSubmit={handleSubmit(searchHandler)} className="flex flex-col items-stretch gap-y-6">
			<CustomInput
				size={56}
				placeholder="جستجو"
				LeftIcon={(props) => (
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
						<path d="M13.1292 11.8792H12.4709L12.2375 11.6542C13.0542 10.7042 13.5459 9.47086 13.5459 8.12919C13.5459 5.13752 11.1209 2.71252 8.12919 2.71252C5.13752 2.71252 2.71252 5.13752 2.71252 8.12919C2.71252 11.1209 5.13752 13.5459 8.12919 13.5459C9.47086 13.5459 10.7042 13.0542 11.6542 12.2375L11.8792 12.4709V13.1292L16.0459 17.2875L17.2875 16.0459L13.1292 11.8792ZM8.12919 11.8792C6.05419 11.8792 4.37919 10.2042 4.37919 8.12919C4.37919 6.05419 6.05419 4.37919 8.12919 4.37919C10.2042 4.37919 11.8792 6.05419 11.8792 8.12919C11.8792 10.2042 10.2042 11.8792 8.12919 11.8792Z" fill="#417F56" />
					</svg>
				)}
				defaultValue={searchParams.get("q")}
				{...register("searchText", { value: searchParams.get("q") })}
				onLeftIconClick={handleSubmit(searchHandler)}
				errors={errors.searchText ? [errors.searchText] : []}
				getValues={getValues}
				hasDefaultValue={!!searchParams.get("q")}
			/>
			<DualRangeSlider initialMinPrice={0} initialMaxPrice={10_000_000} minValue={+searchParams.get("min") || 0} maxValue={+searchParams.get("max") || 10_000_000} minimumGap={100_000} />
			<div className={"relative flex flex-col items-stretch border border-neutral6 px-3.5 py-5 rounded-xl"}>
				<h6 className={"absolute -top-3 right-3 text-neutral9 bg-white px-1"}>دسته‌بندی</h6>
				<div className={"flex flex-col items-stretch gap-y-2 mt-2"}>
					{categories.map((cat, index) => (
						<CategoryItem key={index} title={cat.title} onClick={() => onCategoryItemClick(cat.enTitle)} isActive={cat.isActive} />
					))}
				</div>
			</div>
		</form>
	);
};

const SortingSection = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const onSortOptionClick = (enTitle) => {
		if (searchParams.get("sort") != enTitle) {
			searchParams.set("sort", enTitle);
		}
		setSearchParams(searchParams);
	};

	return (
		<div className={"h-14 flex items-stretch bg-white border border-neutral6 rounded-xl"}>
			<h6 className="self-center px-6">مرتب‌سازی بر اساس:</h6>
			<SortingOption title="همه گیاهان" onClick={() => onSortOptionClick("all")} isActive={searchParams.get("sort") ? searchParams.get("sort") === "all" : true} />
			<SortingOption title="ارزان‌ترین" onClick={() => onSortOptionClick("cheapest")} isActive={searchParams.get("sort") === "cheapest"} />
			<SortingOption title="گران‌ترین" onClick={() => onSortOptionClick("most-expensive")} isActive={searchParams.get("sort") === "most-expensive"} />
			<SortingOption title="محبوب‌ترین" onClick={() => onSortOptionClick("popular")} isActive={searchParams.get("sort") === "popular"} />
		</div>
	);
};
