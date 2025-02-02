import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CustomInput from "../components/CustomInput.jsx";
import { Controller, useForm } from "react-hook-form";
import CustomButton from "../components/CustomButton.jsx";

export default function ContactUs() {
	const { control, handleSubmit } = useForm({
		defaultValues: {
			fullName: "",
			email: "",
			subject: "",
			text: ""
		}
	});

	const submitFormHandler = (data) => {
		console.log(data);
	};

	return (
		<>
			<div className="container">
				<Header />
				<div className="mt-10 lg:mt-20 flex flex-col items-center">
					<p className="text-neutral10">ما در مجموعه گیاه‌لند همواره به نظرات، پیشنهادات و سوالات شما عزیزان ارزش قائلیم و مشتاقانه منتظر کمک به شما هستیم.</p>
					<div className="w-full md:w-[485px] lg:w-max mt-14 flex flex-col lg:flex-row lg:gap-20 border border-neutral6 rounded p-4">
						<div className="h-auto flex flex-col">
							<h2 className="text-xl font-semibold m-2">راه‌های ارتباطی</h2>
							<div className="flex-grow flex flex-col items-stretch justify-center gap-y-4 mt-6">
								<div className="flex items-center gap-x-2">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#717171" className="size-5">
										<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
										<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
									</svg>
									<span className="text-neutral12">آدرس:</span>
									<span className="text-neutral9">تهران، میدان آزادی، خیابان آزادی، کوچه ۱۳</span>
								</div>
								<div className="flex items-center gap-x-2">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#717171" className="size-5">
										<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
									</svg>
									<span className="text-neutral12">شماره تماس:</span>
									<span className="text-neutral9">۰۲۱-۷۶۹۱۵۴۳۲</span>
								</div>
								<div className="flex items-center gap-x-2">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#717171" className="size-5">
										<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
									</svg>
									<span className="text-neutral12">ایمیل:</span>
									<span className="text-neutral9">giahland@gmail.com</span>
								</div>
							</div>
						</div>
						<div className="self-center border border-neutral7 rounded overflow-hidden w-max h-max max-lg:mt-10">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.0388669029664!2d51.33660519135053!3d35.69970467432911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe05732c2e91%3A0xfcbec017befd15f4!2sAzadi%20Tower!5e0!3m2!1sen!2sus!4v1734110697289!5m2!1sen!2sus" width={300} height={300} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
					<p className="text-neutral10 mt-14">درصورتی که سوالی دارید یا نیاز به راهنمایی دارید، لطفا از فرم زیر برای تماس با ما استفاده کنید. تیم پشتیبانی ما در اسرع وقت پاسخگوی شما خواهد بود.</p>
					<div className="mt-14  border border-neutral6 rounded p-4">
						<h2 className="text-xl font-semibold m-2">فرم ارتباط با ما</h2>
						<form onSubmit={handleSubmit(submitFormHandler)} className="flex flex-col lg:flex-row gap-6 mt-6">
							<div className="flex flex-col gap-y-6">
								<CustomInput control={control} name={"fullName"} size={56} placeholder={"نام و نام خانوادگی"} rules={{ required: "وارد کردن نام و نام خانوادگی الزامی است" }} />
								<CustomInput control={control} name={"email"} size={56} placeholder={"ایمیل"} rules={{ required: "وارد کردن ایمیل الزامی است" }} />
								<CustomInput control={control} name={"subject"} size={56} placeholder={"موضوع"} rules={{ required: "وارد کردن موضوع الزامی است" }} />
							</div>
							<div className="*:w-full">
								<div className="mb-3">
									<Controller
										control={control}
										name="text"
										rules={{ required: "وارد کردن متن پیام الزامی است" }}
										render={({ fieldState }) => (
											<>
												<textarea name={"text"} control={control} className={"w-full bg-neutral2 border border-neutral6 rounded outline-0 resize-y py-4 px-3"} rows={8} cols={41} placeholder={"پیام خود را وارد کنید..."}></textarea>
												{fieldState?.error && <span className="text-error text-xs cursor-default">{fieldState.error.message}</span>}
											</>
										)}
									/>
								</div>
								<CustomButton type="submit" title="ارسال پیام" size={48} onClick={() => true} isFilled isSquared />
							</div>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
