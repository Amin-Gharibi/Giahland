import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useForm } from "react-hook-form";
import CustomInput from "../components/CustomInput.jsx";
import SortingBoxLg from "../components/SortingBox.jsx";
import useResponsiveSize from "../hooks/useResponsiveSize.js";
import firstFlower from "../assets/temp/firstFlower.png";
import secondFlower from "../assets/temp/secondFlower.png";
import thirdFlower from "../assets/temp/thirdFlower.png";
import fourthFlower from "../assets/temp/firstFlower.png";
import { useSearchParams } from "react-router-dom";
import CustomButton from "../components/CustomButton.jsx";
import ItemBox from "../components/ItemBox.jsx";

export default function SearchBlogs() {
    const [searchParams] = useSearchParams()
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

	const responsiveSize = useResponsiveSize([
		{ breakpoint: 0, value: 48 },
		{ breakpoint: 1024, value: 56 },
	]);
    const {register, handleSubmit, formState: {errors}, getValues} = useForm()

    const handleSearching = (data) => {
        console.log(data);
    }

	return (
		<>
			<div className={"container"}>
				<Header />
				<div className={"grid grid-cols-12 gap-x-6 mt-20"}>
					<aside className={"col-span-12 lg:col-span-4 xl:col-span-3 lg:sticky top-5 h-max"}>
						<form onSubmit={handleSubmit(handleSearching)}>
							<CustomInput
								size={responsiveSize}
								placeholder="جستجو"
								LeftIcon={(props) => (
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
										<path d="M13.1292 11.8792H12.4709L12.2375 11.6542C13.0542 10.7042 13.5459 9.47086 13.5459 8.12919C13.5459 5.13752 11.1209 2.71252 8.12919 2.71252C5.13752 2.71252 2.71252 5.13752 2.71252 8.12919C2.71252 11.1209 5.13752 13.5459 8.12919 13.5459C9.47086 13.5459 10.7042 13.0542 11.6542 12.2375L11.8792 12.4709V13.1292L16.0459 17.2875L17.2875 16.0459L13.1292 11.8792ZM8.12919 11.8792C6.05419 11.8792 4.37919 10.2042 4.37919 8.12919C4.37919 6.05419 6.05419 4.37919 8.12919 4.37919C10.2042 4.37919 11.8792 6.05419 11.8792 8.12919C11.8792 10.2042 10.2042 11.8792 8.12919 11.8792Z" fill="#417F56" />
									</svg>
								)}
								defaultValue={searchParams.get("q")}
								{...register("searchText", { value: searchParams.get("q") })}
								onLeftIconClick={handleSubmit(handleSearching)}
								errors={errors.searchText ? [errors.searchText] : []}
								getValues={getValues}
								hasDefaultValue={!!searchParams.get("q")}
							/>
						</form>
					</aside>
					<div className={"col-span-12 lg:col-span-8 xl:col-span-9 mt-6 lg:mt-0 flex flex-col items-stretch"}>
						<div>
							<SortingBoxLg options={[
                                {title: 'عادی', enTitle: 'default'},
                                {title: 'جدید ترین', enTitle: 'newest'},
                                {title: 'قدیمی‌ترین', enTitle: 'oldest'},
                                {title: 'پرنظر‌ها', enTitle: 'most-commented'},
                            ]} />
						</div>
						<div className={"grid grid-cols-2 xl:grid-cols-3 gap-4 xs:gap-6 mt-6"}>
							{searchedItems.map((item, index) => (
								<ItemBox key={index} {...item} />
							))}
						</div>
						<div className="flex items-center justify-center mt-8 *:w-56">
							<CustomButton size={responsiveSize} title="مشاهده بیشتر" onClick={() => true} isOutline isDashed isSquared />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
