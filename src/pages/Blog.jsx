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
import EnToFaNum from "../utils/EnToFaNum.js";

export default function Blog() {
	const blogId = window.location.pathname.split("/")[2];
	const [blogDetails, setBlogDetails] = useState(null);
	const [breadcrumbs, setBreadcrumbs] = useState(null);
	const [blogComments, setBlogComments] = useState([]);
	const [showMoreCommentsButton, setShowMoreCommentsButton] = useState(false);
    const [shortUrl, setShortUrl] = useState("http://localhost:3000")

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
			content: (
				<div>
					<p>
						<span>تصور کنید یک روز در حال بازی با کودک خود هستید و او با چشمانی پر از کنجکاوی از شما می‌پرسد: </span>
						<b>«چطور ربات‌ها می‌تونن کارهای ما رو یاد بگیرن؟»</b>
						<span> یا </span>
						<b>«هوش مصنوعی یعنی چه؟»</b>
						<span>. شاید در لحظه پاسخی آماده نداشته باشید، اما این سوال، فرصتی طلایی برای شروع یک ماجراجویی مشترک است؛ ماجراجویی که می‌تواند کودک شما را با یکی از جذاب‌ ترین حوزه‌های دنیای امروز یعنی </span>
						<a href="https://sabzlearn.ir/blog/%D9%87%D9%88%D8%B4-%D9%85%D8%B5%D9%86%D9%88%D8%B9%DB%8C-%DA%86%DB%8C%D8%B3%D8%AA%D8%9F/">
							<b>هوش مصنوعی</b>
						</a>
						<span> آشنا کند.</span>
					</p>
                    <br />
					<p>
						<span>حالا تصور کنید راهی برای توضیح این مفاهیم وجود داشته باشد که هم سرگرم‌ کننده باشد و هم آموزشی؛ جایی که کودکان، بدون ترس از پیچیدگی، با مفاهیم ابتدایی هوش مصنوعی آشنا شوند. انیمیشن </span>
						<b>Wild Robot</b>
						<span>
							{" "}
							دقیقا همین راه است. این انیمیشن با داستانی هیجان‌انگیز و احساسی، پلی میان دنیای کودکانه و فناوری می‌سازد. اگر می‌خواهید فرزندتان هم از دیدن این انیمیشن لذت ببرد و هم درباره تکنولوژی‌های آینده چیزهای جدید یاد بگیرد، این مطلب از <a href="https://sabzlearn.ir/">سبزلرن</a> راهنمای شما خواهد بود.
						</span>
					</p>
                    <br />
					<p>
						<span>انیمیشن ربات وحشی&nbsp; (</span>
						<b>
							<a href="https://www.imdb.com/title/tt29623480/" rel="nofollow noopener" target="_blank">
								Wild Robot
							</a>
							)
						</b>
						<span> یک داستان گرم و دلنشین درباره اهمیت پیدا کردن دوستان و ساختن یک جامعه خارج از چارچوب‌های معمول است. این اثر که از رمان محبوب پیتر براون اقتباس شده، شخصیت‌های دوست‌ داشتنی کتاب را زنده می‌کند و با سبکی ساده و خیال‌انگیز، حس دنیای کودکی را به زیبایی به تصویر می‌کشد. در کنار پیام اصلی این انیمیشن می‌توان تکنولوژی و ارتباط آن به دنیای پیرامون را بهتر درک کرد.</span>
					</p>
				</div>
			),
			rate: 4.6,
		};
		setBlogDetails(details);
		// request to server using lastCommentIndex
		const { isThereMore, comments } = { isThereMore: false, comments: [{ user: { prof: tempImage3, firstName: "یاسر", lastName: "منصوری" }, rate: 4, comment: "گیاه یوکا یکی از گیاهان مورد علاقه", likesCount: 3, disLikesCount: 0, isLiked: true, isDisLiked: false, date: "Sun Dec 08 2024 16:13:51 GMT+0330 (Iran Standard Time)" }] };
		setShowMoreCommentsButton(isThereMore);
		setBlogComments(comments);
        setBreadcrumbs([{ name: "وبلاگ", url: "/blogs" }, { name: details.title }]);
	}, []);

    const handleCopyingShortUrl = async () => {
        try {
            await navigator.clipboard.writeText(shortUrl)
        } catch (err) {
            console.log(err);
        }
    }

	return (
		<>
			<div className={"container"}>
				<Header />
				<div className={"mt-2 sm:mt-4 md:mt-6"}>
					<BreadCrumb breadcrumbs={breadcrumbs ?? []} />
					<div className="grid grid-cols-12 grid-rows-[repeat(2,_max-content)] gap-x-6 mt-14 sm:mt-[72px]">
						<div className="col-span-12 lg:col-span-8 xl:col-span-9">
							<div className="w-full pb-4 mb-6 border-b border-neutral5">
								<h1 className="text-xl sm:text-2xl font-bold">{blogDetails?.title}</h1>
								<div className="w-full flex items-center gap-x-6 mt-6">
									<div className="flex items-center gap-x-2">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#717171" className="size-5 xs:size-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
										</svg>
										<span className={"text-sm xs:text-base leading-7 text-neutral9"}>{blogDetails?.author.firstName + " " + blogDetails?.author.lastName}</span>
									</div>
									<div className="flex items-center gap-x-2">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#717171" className="size-5 xs:size-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
										</svg>
										<span className={"text-sm xs:text-base leading-7 text-neutral9"}>{EnToFaNum(`${new Date(blogDetails?.createdAt)?.getFullYear()}/${new Date(blogDetails?.createdAt)?.getMonth() + 1}/${new Date(blogDetails?.createdAt)?.getDate()}`)}</span>
									</div>
									<div className="flex items-center gap-x-2">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#717171" className="size-5 xs:size-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
											<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
										</svg>
										<span className={"text-sm xs:text-base leading-7 text-neutral9"}>{EnToFaNum(blogDetails?.views)}</span>
									</div>
								</div>
							</div>
							{blogDetails?.content}
						</div>
						<aside className="col-span-12 max-lg:mt-16 lg:col-span-4 xl:col-span-3 sticky top-5 h-max flex flex-col items-stretch p-4 bg-neutral1 rounded-lg">
							<div className="flex items-center justify-start gap-x-2 pb-3 border-b border-neutral5">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 xs:size-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
								</svg>
								<h6 className="xs:font-semibold">اشتراک‌گذاری مطلب</h6>
							</div>
							<div className="mt-6 py-3 px-4 flex items-center justify-between gap-x-3 bg-neutral3 text-primary border border-dashed border-primary rounded">
								<button onClick={handleCopyingShortUrl}>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 xs:size-6">
										<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
									</svg>
								</button>
								<span className="sm:text-lg">{shortUrl}</span>
							</div>
						</aside>
					</div>
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
