import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useForm } from "react-hook-form";
import CustomInput from "../components/CustomInput.jsx";
import SortingBoxLg from "../components/SortingBox.jsx";
import useResponsiveSize from "../hooks/useResponsiveSize.js";
import CustomButton from "../components/CustomButton.jsx";
import BlogItemBox from "../components/BlogItemBox.jsx";
import useApi from "../hooks/useApi.js";
import { useSearchParams } from "react-router-dom";
import { BlogService } from "../services/blog.service.js";
import { PuffLoader } from "react-spinners";
import { showToast } from "../config/toast.config.js";

export default function SearchBlogs() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [limit, setLimit] = useState(12);
	const [sortBy, setSortBy] = useState(null);
	const [order, setOrder] = useState(null);
	const [searchText, setSearchText] = useState(searchParams.get("q") || "");
	const { data: blogsResult, loading: blogsLoading, error: blogsError, execute: blogsExecute } = useApi(() => BlogService.getMany(limit, 0, sortBy, order, searchText));

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (searchParams.get("sortBy")) {
			translateSortOptions(searchParams.get("sortBy"));
		}
		blogsExecute();
	}, [searchText, sortBy, order, limit]);

	useEffect(() => {
		if (blogsResult !== null) {
			setIsLoading(false);
		}
	}, [blogsResult]);

	const translateSortOptions = (title) => {
		if (title === "default") {
			setOrder(null);
			setSortBy(null);
		} else if (title === "newest") {
			setOrder("DESC");
			setSortBy("created_at");
		} else if (title === "oldest") {
			setOrder("ASC");
			setSortBy("created_at");
		} else if (title === "most-viewed") {
			setOrder("DESC");
			setSortBy("views");
		}
	};

	const responsiveSize = useResponsiveSize([
		{ breakpoint: 0, value: 48 },
		{ breakpoint: 1024, value: 56 },
	]);
	const { control, handleSubmit } = useForm({
		defaultValues: {
			searchText: searchText,
		},
	});

	const handleSearching = (data) => {
		setSearchText(data.searchText);
		searchParams.set("q", data.searchText);
		setSearchParams(searchParams);
	};

	if (isLoading) {
		return (
			<div className="h-screen flex items-center justify-center">
				<PuffLoader size={60} color="#417F56" />
			</div>
		);
	}

	if (blogsError) {
		showToast.error("خطایی در بارگذاری اطلاعات مقالات رخ داد");
	}

	return (
		<>
			<div className={"container"}>
				<Header />
				<div className={"grid grid-cols-12 gap-x-6 mt-20"}>
					<aside className={"col-span-12 lg:col-span-4 xl:col-span-3 lg:sticky top-5 h-max"}>
						<form onSubmit={handleSubmit(handleSearching)}>
							<CustomInput
								control={control}
								name="searchText"
								size={responsiveSize}
								placeholder="جستجو"
								LeftIcon={(props) => (
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
										<path d="M13.1292 11.8792H12.4709L12.2375 11.6542C13.0542 10.7042 13.5459 9.47086 13.5459 8.12919C13.5459 5.13752 11.1209 2.71252 8.12919 2.71252C5.13752 2.71252 2.71252 5.13752 2.71252 8.12919C2.71252 11.1209 5.13752 13.5459 8.12919 13.5459C9.47086 13.5459 10.7042 13.0542 11.6542 12.2375L11.8792 12.4709V13.1292L16.0459 17.2875L17.2875 16.0459L13.1292 11.8792ZM8.12919 11.8792C6.05419 11.8792 4.37919 10.2042 4.37919 8.12919C4.37919 6.05419 6.05419 4.37919 8.12919 4.37919C10.2042 4.37919 11.8792 6.05419 11.8792 8.12919C11.8792 10.2042 10.2042 11.8792 8.12919 11.8792Z" fill="#417F56" />
									</svg>
								)}
								onLeftIconClick={handleSubmit(handleSearching)}
							/>
						</form>
					</aside>
					<div className={"col-span-12 lg:col-span-8 xl:col-span-9 mt-6 lg:mt-0 flex flex-col items-stretch"}>
						<div>
							<SortingBoxLg
								options={[
									{ title: "عادی", enTitle: "default" },
									{ title: "جدید ترین", enTitle: "newest" },
									{ title: "قدیمی‌ ترین", enTitle: "oldest" },
									{ title: "دیده‌شده ترین", enTitle: "most-viewed" },
								]}
								searchParamTitle="sortBy"
								onOptionChange={translateSortOptions}
							/>
						</div>
						<div className={"grid sm:grid-cols-2 xl:grid-cols-3 gap-4 xs:gap-6 mt-6"}>
							{blogsResult?.blogs?.map((item) => (
								<BlogItemBox key={item.id} title={item.title} banner={item.image_url} description={item.content} author={{ firstName: item.author_first_name, lastName: item.author_last_name }} createdAt={item.created_at} identifier={item.en_title} />
							))}
							{blogsLoading ? (
								<div className="col-span-2 xl:col-span-3 w-full h-[250px] flex items-center justify-center">
									<PuffLoader size={50} color="#417F56" />
								</div>
							) : blogsResult?.blogs?.length ? (
								""
							) : (
								<>
									<div className="col-span-2 xl:col-span-3 w-full h-[250px] flex items-center justify-center">
										<span className="text-gray-600">مقاله‌ای یافت نشد</span>
									</div>
								</>
							)}
						</div>
						{blogsResult?.pagination?.total > blogsResult?.pagination?.limit ? (
							<div className={"mx-auto mt-6 w-40 *:w-full"}>
								<CustomButton title={"مشاهده بیشتر"} onClick={() => setLimit((prev) => prev + 12)} size={responsiveSize} isOutline isSquared />
							</div>
						) : (
							""
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
