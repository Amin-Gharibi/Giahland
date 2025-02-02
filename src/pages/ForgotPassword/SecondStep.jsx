import React from "react";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import useResponsiveSize from "../../hooks/useResponsiveSize";
import CustomButton from "../../components/CustomButton";
import loginBgImage from "../../assets/images/loginBgImage.png";
import { showToast } from "../../config/toast.config";
import { AuthService } from "../../services/auth.service";
import { useNavigate, useParams } from "react-router-dom";

export default function FirstStep() {
	const { token } = useParams();
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm({
		defaultValues: {
			newPassword: "",
		},
	});
	const navigate = useNavigate();

	const inputSize = useResponsiveSize([
		{ breakpoint: 0, value: 48 },
		{ breakpoint: 470, value: 56 },
	]);

	const onSubmit = async (data) => {
		try {
			await AuthService.resetPassword(token, data.newPassword);
			showToast.success("رمز عبور با موفقیت بازیابی شد. لطفا دوباره وارد شوید");
			navigate("/login");
		} catch (error) {
			showToast.error("خطایی هنگام بازیابی رمز عبور رخ داد. لطفا دوباره تلاش کنید");
			console.log(error);
		}
	};

	return (
		<>
			<div className={"flex flex-col md:flex-row md:*:w-1/2 md:*:h-screen"}>
				<div className={"container max-xs:-mt-3 bg-white max-md:order-2 lg:px-24 xl:px-40 flex justify-center items-center max-md:rounded-t-xl overflow-hidden"}>
					<form onSubmit={handleSubmit(onSubmit)} className={"w-full"}>
						<h1 className={"xs:font-semibold text-xl leading-7 text-black mb-8 max-md:text-center max-md:mt-4"}>فراموشی رمز عبور</h1>
						<CustomInput
							type="password"
							size={inputSize}
							name="newPassword"
							control={control}
							rules={{
								required: "وارد کردن رمز عبور جدید الزامی است",
							}}
							placeholder="رمز عبور جدید"
							RightIcon={(props) => (
								<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
									<path d="M19.4061 9.66667H11.7519C11.0003 7.53083 8.96525 6 6.57275 6C3.53859 6 1.07275 8.46583 1.07275 11.5C1.07275 14.5342 3.53859 17 6.57275 17C8.96525 17 11.0003 15.4692 11.7519 13.3333H12.0728L13.9061 15.1667L15.7394 13.3333L17.5728 15.1667L21.2394 11.4633L19.4061 9.66667ZM6.57275 14.25C5.06025 14.25 3.82275 13.0125 3.82275 11.5C3.82275 9.9875 5.06025 8.75 6.57275 8.75C8.08525 8.75 9.32275 9.9875 9.32275 11.5C9.32275 13.0125 8.08525 14.25 6.57275 14.25Z" />
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
