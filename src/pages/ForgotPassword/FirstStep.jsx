import React from "react";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import useResponsiveSize from "../../hooks/useResponsiveSize";
import CustomButton from "../../components/CustomButton";
import loginBgImage from "../../assets/images/loginBgImage.png";
import { showToast } from "../../config/toast.config";
import { AuthService } from "../../services/auth.service";

export default function FirstStep() {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm({
		defaultValues: {
			email: "",
		},
	});

	const inputSize = useResponsiveSize([
		{ breakpoint: 0, value: 48 },
		{ breakpoint: 470, value: 56 },
	]);

	const onSubmit = async (data) => {
		try {
			await AuthService.forgotPassword(data.email);
			showToast.success("ایمیلی حاوی دستورالعمل بازیابی رمز عبور به ایمیل شما ارسال شد");
		} catch (error) {
			if (error.response?.status === 404) {
				showToast.error("کاربری با همچین ایمیلی وجود ندارد");
			} else {
				showToast.error("خطایی هنگام شروع فرایند بازیابی رمز عبور رخ داد");
			}
			console.log(error);
		}
	};

	return (
		<>
			<div className={"container"}>
				<Header onlyMobileSize />
			</div>
			<div className={"flex flex-col md:flex-row md:*:w-1/2 md:*:h-screen"}>
				<div className={"container max-xs:-mt-3 bg-white max-md:order-2 lg:px-24 xl:px-40 flex justify-center items-center max-md:rounded-t-xl overflow-hidden"}>
					<form onSubmit={handleSubmit(onSubmit)} className={"w-full"}>
						<h1 className={"xs:font-semibold text-xl leading-7 text-black mb-8 max-md:text-center max-md:mt-4"}>فراموشی رمز عبور</h1>
						<CustomInput
							size={inputSize}
							name="email"
							control={control}
							rules={{
								required: "وارد کردن ایمیل الزامی است",
							}}
							placeholder="ایمیل"
							RightIcon={(props) => (
								<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
									<path d="M15.9104 0.833313H7.57702C6.66035 0.833313 5.91035 1.58331 5.91035 2.49998V4.99998H7.57702V3.33331H15.9104V16.6666H7.57702V15H5.91035V17.5C5.91035 18.4166 6.66035 19.1666 7.57702 19.1666H15.9104C16.827 19.1666 17.577 18.4166 17.577 17.5V2.49998C17.577 1.58331 16.827 0.833313 15.9104 0.833313ZM5.91869 11.225L3.79368 9.09998L2.73535 10.1583L5.91035 13.3333L11.902 7.34165L10.8437 6.28331L5.91869 11.225Z" />
								</svg>
							)}
						/>
						<div className={"w-full *:w-full mt-8"}>
							<CustomButton type={"submit"} title={"بازیابی رمز عبور"} size={inputSize} isFilled={true} isSquared={true} loading={isSubmitting} disabled={isSubmitting} />
						</div>
					</form>
				</div>
				<div>
					<img src={loginBgImage} alt={"گیاه لند"} className={"w-full h-[250px] md:h-full object-none md:object-cover"} />
				</div>
			</div>
		</>
	);
}
