import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CustomInput from "../components/CustomInput.jsx";
import { useSearchParams } from "react-router-dom";
import DualRangeSlider from "../components/DualRangeSlider.jsx";
import CategoryItem from "../components/CategoryItem.jsx";
import ItemBox from "../components/ItemBox.jsx";
import CustomButton from "../components/CustomButton.jsx";
import useResponsiveSize from "../hooks/useResponsiveSize.js";
import SortingBox from "../components/SortingBox.jsx";
import useApi from "../hooks/useApi.js";
import { ProductService } from "../services/product.service.js";
import { CategoryService } from "../services/category.service.js";
import { useForm } from "react-hook-form";
import { PuffLoader } from "react-spinners";
import { showToast } from "../config/toast.config.js";

export default function Search() {
	const [searchParams] = useSearchParams();
	const [limit, setLimit] = useState(12);
	const [sortBy, setSortBy] = useState(null);
	const [order, setOrder] = useState(null);
	const [searchCategories, setSearchCategories] = useState([]);
	const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || 0);
	const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || 5_000_000);
	const [searchText, setSearchText] = useState(searchParams.get("q") || "");
	const { data: productsResult, loading: productsLoading, error: productsError, execute: productsExecute } = useApi(() => ProductService.getMany(limit, 0, sortBy, order, searchCategories.map((item) => item.id).join(","), minPrice, maxPrice, searchText));
	const { data: categoriesResult, error: categoriesError, execute: categoriesExecute } = useApi(() => CategoryService.getAll());

	const [isLoading, setIsLoading] = useState(true);

	const {
		control,
		handleSubmit,
	} = useForm({
		defaultValues: {
			searchText: searchText,
			minPrice: minPrice,
			maxPrice: maxPrice,
		},
	});

	const showMoreButtonSize = useResponsiveSize([
		{ breakpoint: 0, value: 48 },
		{ breakpoint: 1024, value: 56 },
	]);

	useEffect(() => {
		categoriesExecute();
		if (searchParams.get("sortBy")) {
			translateSortOptions(searchParams.get("sortBy"));
		}
	}, []);

	useEffect(() => {
		if (categoriesResult) {
			const params = [];
			searchParams.forEach((value, key) => {
				if (value.toLowerCase() === "yes") {
					params.push(key);
				}
			});

			const searhcedCategories = [];
			categoriesResult.forEach((item) => {
				if (params.includes(item.en_name)) {
					searhcedCategories.push(item);
					item.isActive = true;
				} else {
					item.isActive = false;
				}
			});

			setSearchCategories(searhcedCategories);
		}
	}, [categoriesResult]);

	useEffect(() => {
		productsExecute();
	}, [searchCategories, searchText, minPrice, maxPrice, sortBy, order, limit]);

	useEffect(() => {
		if (productsResult !== null) {
			setIsLoading(false);
		}
	}, [productsResult]);

	const translateSortOptions = (title) => {
		if (title === "all") {
			setOrder(null);
			setSortBy(null);
		} else if (title === "cheapest") {
			setOrder("ASC");
			setSortBy("price");
		} else if (title === "most-expensive") {
			setOrder("DESC");
			setSortBy("price");
		}
	};

	if (isLoading) {
		return (
			<div className="h-screen flex items-center justify-center">
				<PuffLoader size={60} color="#417F56" />
			</div>
		);
	}

	if (productsError) {
		showToast.error("خطایی در بارگذاری اطلاعات محصولات رخ داد")
	}

	if (categoriesError) {
		showToast.error("خطایی در بارگذاری اطلاعات دسته بندی ها رخ داد")
	}

	return (
		<div>
			<div className={"container"}>
				<Header />
				<div className={"grid grid-cols-12 gap-x-6 mt-20"}>
					<aside className={"col-span-12 lg:col-span-4 xl:col-span-3 lg:sticky top-5 h-max"}>
						<SearchForm control={control} handleSubmit={handleSubmit} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} setSearchText={setSearchText} categories={categoriesResult} setCategories={setSearchCategories} />
					</aside>
					<div className={"col-span-12 lg:col-span-8 xl:col-span-9 mt-6 lg:mt-0 flex flex-col items-stretch"}>
						<div>
							<div className="max-md:hidden">
								<SortingBox
									options={[
										{ title: "همه گیاهان", enTitle: "all" },
										{ title: "ارزان‌ترین", enTitle: "cheapest" },
										{ title: "گران‌ترین", enTitle: "most-expensive" },
									]}
									searchParamTitle={"sortBy"}
									onOptionChange={translateSortOptions}
								/>
							</div>
							<div className={"grid md:hidden grid-cols-2 gap-x-4 xs:gap-x-6"}>
								<CustomButton size={40} title="فیلتر" onClick={() => true} isFilled isSquared />
								<CustomButton size={40} title="مرتب‌سازی" onClick={() => true} isOutline isSquared />
							</div>
						</div>
						<div className={"grid grid-cols-2 xl:grid-cols-3 gap-4 xs:gap-6 mt-6"}>
							{productsResult?.products?.map((item) => (
								<ItemBox key={item.id} id={item.id} name={item.name} price={item.price} image={item.images.find((item) => item.is_main).image_url} />
							))}
							{productsLoading ? (
								<div className="col-span-2 xl:col-span-3 w-full h-[250px] flex items-center justify-center">
									<PuffLoader size={50} color="#417F56" />
								</div>
							) : productsResult?.products?.length ? (
								""
							) : (
								<>
									<div className="col-span-2 xl:col-span-3 w-full h-[250px] flex items-center justify-center">
										<span className="text-gray-600">محصولی یافت نشد</span>
									</div>
								</>
							)}
						</div>
						{productsResult?.pagination?.total > productsResult?.pagination?.limit ? (
							<div className={"mx-auto mt-6 w-40 *:w-full"}>
								<CustomButton title={"مشاهده بیشتر"} onClick={() => setLimit((prev) => prev + 12)} size={showMoreButtonSize} isOutline isSquared />
							</div>
						) : (
							""
						)}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

const SearchForm = ({ control, handleSubmit, setMinPrice, setMaxPrice, setSearchText, categories, setCategories }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const onCategoryItemClick = (cat) => {
		setCategories((prev) => {
			let newCats = [];
			if (cat.isActive) {
				newCats = prev.filter((item) => item.id !== cat.id);
				searchParams.delete(cat.en_name);
			} else {
				newCats = [...prev, cat];
				searchParams.set(cat.en_name, "yes");
			}
			setSearchParams(searchParams);
			cat.isActive = !cat.isActive;
			return newCats;
		});
	};

	const searchHandler = (data) => {
		setSearchText(data.searchText);
		setMinPrice(data.minPrice);
		setMaxPrice(data.maxPrice);
		searchParams.set("q", data.searchText);
		searchParams.set("minPrice", data.minPrice);
		searchParams.set("maxPrice", data.maxPrice);
		setSearchParams(searchParams);
	};

	const searchInputSize = useResponsiveSize([
		{ breakpoint: 0, value: 48 },
		{ breakpoint: 1024, value: 56 },
	]);

	return (
		<form onSubmit={handleSubmit(searchHandler)} className="flex flex-col items-stretch gap-y-6">
			<CustomInput
				size={searchInputSize}
				placeholder="جستجو"
				LeftIcon={(props) => (
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
						<path d="M13.1292 11.8792H12.4709L12.2375 11.6542C13.0542 10.7042 13.5459 9.47086 13.5459 8.12919C13.5459 5.13752 11.1209 2.71252 8.12919 2.71252C5.13752 2.71252 2.71252 5.13752 2.71252 8.12919C2.71252 11.1209 5.13752 13.5459 8.12919 13.5459C9.47086 13.5459 10.7042 13.0542 11.6542 12.2375L11.8792 12.4709V13.1292L16.0459 17.2875L17.2875 16.0459L13.1292 11.8792ZM8.12919 11.8792C6.05419 11.8792 4.37919 10.2042 4.37919 8.12919C4.37919 6.05419 6.05419 4.37919 8.12919 4.37919C10.2042 4.37919 11.8792 6.05419 11.8792 8.12919C11.8792 10.2042 10.2042 11.8792 8.12919 11.8792Z" fill="#417F56" />
					</svg>
				)}
				control={control}
				name="searchText"
				onLeftIconClick={handleSubmit(searchHandler)}
			/>
			<div className="max-md:hidden">
				<DualRangeSlider control={control} minValue={0} maxValue={5_000_000} minName="minPrice" maxName="maxPrice" minimumGap={100_000} />
			</div>
			<div className={"max-md:hidden relative flex flex-col items-stretch border border-neutral6 px-3.5 py-5 rounded-xl"}>
				<h6 className={"absolute right-3 text-neutral9 bg-white px-1 -top-3 lg:-top-4 text-xs leading-5 lg:text-base lg:leading-7"}>دسته‌بندی</h6>
				<div className={"flex flex-col items-stretch gap-y-2 mt-2"}>
					{categories?.map((cat) => (
						<CategoryItem key={cat.id} title={cat.fa_name} onClick={() => onCategoryItemClick(cat)} isActive={cat.isActive} />
					))}
				</div>
			</div>
		</form>
	);
};
