import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import useResponsiveSize from "../hooks/useResponsiveSize.js";
import { useForm } from "react-hook-form";
import BreadCrumb from "../components/Breadcrumb.jsx";
import CommentItem from "../components/CommentItem.jsx";
import CustomButton from "../components/CustomButton.jsx";
import ProductSectionTitle from "../components/ProductSectionTitle.jsx";
import tempImage3 from "../assets/images/secondBgImage.png";

export default function Blog() {
	const blogId = window.location.pathname.split("/")[2];
	const [blogDetails, setBlogDetails] = useState(null);
	const [breadcrumbs, setBreadcrumbs] = useState(null);
	const [blogComments, setBlogComments] = useState([]);
	const [showMoreCommentsButton, setShowMoreCommentsButton] = useState(false);

	const showMoreCommentsButtonSize = useResponsiveSize([
		{ breakpoint: 0, value: 40 },
		{ breakpoint: 1024, value: 48 },
	]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const submitCommentHandler = (data) => {
		console.log(data);
	};

	useEffect(() => {
		// fetch data from server
        const details = {
			title: "در مورد گیاه یوکا بیشتر بدانیم!",
			enTitle: "about-yoka",
			author: {
				firstName: "امین",
				lastName: "غریبی",
			},
			createdAt: "Fri Dec 13 2024 15:14:41 GMT+0330 (Iran Standard Time)",
			views: 89,
			content: "",
			rate: 4.6,
		};
		setBlogDetails(details);
		// request to server using lastCommentIndex
		const { isThereMore, comments } = { isThereMore: false, comments: [{ user: { prof: tempImage3, firstName: "یاسر", lastName: "منصوری" }, rate: 4, comment: "گیاه یوکا یکی از گیاهان مورد علاقه", likesCount: 3, disLikesCount: 0, isLiked: true, isDisLiked: false, date: "Sun Dec 08 2024 16:13:51 GMT+0330 (Iran Standard Time)" }] };
		setShowMoreCommentsButton(isThereMore);
		setBlogComments(comments);
        setBreadcrumbs([{ name: "وبلاگ", url: "/blogs" }, { name: details.title }]);
	}, []);

	return (
		<>
			<div className={"container"}>
				<Header />
				<div className={"mt-2 sm:mt-4 md:mt-6"}>
					<BreadCrumb breadcrumbs={breadcrumbs ?? []} />

					{/*comments section*/}
					<div className={"max-w-full mt-14 sm:mt-[72px]"}>
						<ProductSectionTitle title={"دیدگاه‌ها و امتیاز"} />
						<form onSubmit={handleSubmit(submitCommentHandler)}>
							<textarea className={"w-full bg-neutral2 border border-neutral6 rounded outline-0 resize-y py-4 px-3 mt-10"} rows={8} placeholder={"نظر خود را وارد کنید..."} {...register("comment", { required: "وارد کردن متنی به عنوان نظر الزامی است" })}></textarea>
							{(errors.comment ? [errors.comment] : []).map((error, index) => (
								<div key={index} className={"cursor-default"}>
									<span className={"text-error text-xs"}>{error.message}</span>
								</div>
							))}
							<div className={"flex justify-between items-start mt-2"}>
								<div>
									<div className={"group flex items-center gap-x-1 w-max bg-neutral2 border border-neutral6 rounded py-1 px-2"}>
										<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={"fill-neutral9 "}>
											<path d="M19.6486 9.29464L14.8086 8.87464L12.9186 4.42464C12.5786 3.61464 11.4186 3.61464 11.0786 4.42464L9.18861 8.88464L4.35861 9.29464C3.47861 9.36464 3.11861 10.4646 3.78861 11.0446L7.45861 14.2246L6.35861 18.9446C6.15861 19.8046 7.08861 20.4846 7.84861 20.0246L11.9986 17.5246L16.1486 20.0346C16.9086 20.4946 17.8386 19.8146 17.6386 18.9546L16.5386 14.2246L20.2086 11.0446C20.8786 10.4646 20.5286 9.36464 19.6486 9.29464ZM11.9986 15.6546L8.23861 17.9246L9.23861 13.6446L5.91861 10.7646L10.2986 10.3846L11.9986 6.35464L13.7086 10.3946L18.0886 10.7746L14.7686 13.6546L15.7686 17.9346L11.9986 15.6546Z" />
										</svg>
										<input type={"number"} className={"w-6 text-center bg-transparent h-full outline-0 border-0 hide-arrows"} {...register("rate", { required: "باید امتیاز این محصول را وارد کنید", min: { value: 0, message: "امتیاز نمیتواند کمتر از ۰ باشد" }, max: { value: 5, message: "امتیاز نمیتواند بیشتر از ۵ باشد" }, valueAsNumber: true, value: 5 })} />
									</div>
									{(errors.rate ? [errors.rate] : []).map((error, index) => (
										<div key={index} className={"cursor-default"}>
											<span className={"text-error text-xs"}>{error.message}</span>
										</div>
									))}
								</div>
								<div className={"w-36 *:w-full"}>
									<CustomButton type={"submit"} title={"ثبت نظر"} onClick={() => true} size={40} isFilled isSquared />
								</div>
							</div>
						</form>
						<div className={"mt-10 divide-y divide-neutral3"}>
							{(blogComments.length && blogComments.map((cmnt, index) => <CommentItem key={index} {...cmnt} />)) || (
								<div className="w-full flex items-center justify-center">
									<span>هنوز کسی اینجا نظرشو نگفته، تو اولین باش :)</span>
								</div>
							)}
						</div>
						{showMoreCommentsButton && (
							<div className={"mx-auto mt-6 w-40 *:w-full"}>
								<CustomButton title={"مشاهده بیشتر"} onClick={() => true} size={showMoreCommentsButtonSize} isOutline isSquared />
							</div>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
