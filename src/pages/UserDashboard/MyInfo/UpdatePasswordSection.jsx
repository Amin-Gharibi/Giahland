import React from "react";
import { useUserAuth } from "../../../contexts/UserAuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserService } from "../../../services/user.service";
import { showToast } from "../../../config/toast.config";
import DashboardSectionTitle from "../../../components/DashboardSectionTitle";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import useResponsiveSize from "../../../hooks/useResponsiveSize";

export default function UpdatePasswordSection() {
	const { logout } = useUserAuth();

	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm({
		defaultValues: {
			currentPassword: "",
			newPassword: "",
		},
	});

	const navigate = useNavigate();

	const inputSize = useResponsiveSize([
		{ breakpoint: 0, value: 48 },
		{ breakpoint: 640, value: 56 },
	]);

	const onPasswordFormSubmit = async (data) => {
		try {
			await UserService.updatePassword(data.currentPassword, data.newPassword);
			showToast.success("رمز عبور با موفقیت آپدیت شد");
			await logout();
			navigate("/login");
		} catch (error) {
			if (error.response?.status === 400) {
				showToast.error("رمز عبور کنونی شما صحیح نیست");
			} else {
				showToast.error("خطایی در آپدیت رمز عبور شما رخ داد");
			}
			console.log(error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onPasswordFormSubmit)} className={"w-full mt-6"}>
			<DashboardSectionTitle title={"تغییر رمز عبور"} />
			<div className={"flex flex-col sm:p-6 md:p-0 lg:p-6 sm:border md:border-0 lg:border border-neutral3 w-full rounded-2xl mt-4"}>
				<div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6"}>
					<CustomInput
						type="password"
						size={inputSize}
						control={control}
						name="currentPassword"
						rules={{
							required: "وارد کردن رمز عبور کنونی الزامی است",
						}}
						placeholder="رمز عبور کنونی"
						RightIcon={(props) => (
							<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
								<g clipPath="url(#clip0_9165_1620)">
									<path d="M17.6564 8.83333H10.6981C10.0147 6.89167 8.16475 5.5 5.98975 5.5C3.23141 5.5 0.989746 7.74167 0.989746 10.5C0.989746 13.2583 3.23141 15.5 5.98975 15.5C8.16475 15.5 10.0147 14.1083 10.6981 12.1667H10.9897L12.6564 13.8333L14.3231 12.1667L15.9897 13.8333L19.3231 10.4667L17.6564 8.83333ZM5.98975 13C4.61475 13 3.48975 11.875 3.48975 10.5C3.48975 9.125 4.61475 8 5.98975 8C7.36475 8 8.48975 9.125 8.48975 10.5C8.48975 11.875 7.36475 13 5.98975 13Z" />
								</g>
								<defs>
									<clipPath id="clip0_9165_1620">
										<rect width="20" height="20" fill="white" transform="translate(0.15625 0.5)" />
									</clipPath>
								</defs>
							</svg>
						)}
					/>
					<CustomInput
						type="password"
						size={inputSize}
						control={control}
						name="newPassword"
						rules={{
							required: "وارد کردن رمز عبور جدید الزامی است",
							pattern: {
								value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
								message: "رمز عبور جدید شما باید حداقل ۶ حرف شامل حروف کوچک و بزرگ انگلیسی و اعداد باشد",
							},
						}}
						placeholder="رمز عبور جدید"
						RightIcon={(props) => (
							<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
								<g clipPath="url(#clip0_9165_1620)">
									<path d="M17.6564 8.83333H10.6981C10.0147 6.89167 8.16475 5.5 5.98975 5.5C3.23141 5.5 0.989746 7.74167 0.989746 10.5C0.989746 13.2583 3.23141 15.5 5.98975 15.5C8.16475 15.5 10.0147 14.1083 10.6981 12.1667H10.9897L12.6564 13.8333L14.3231 12.1667L15.9897 13.8333L19.3231 10.4667L17.6564 8.83333ZM5.98975 13C4.61475 13 3.48975 11.875 3.48975 10.5C3.48975 9.125 4.61475 8 5.98975 8C7.36475 8 8.48975 9.125 8.48975 10.5C8.48975 11.875 7.36475 13 5.98975 13Z" />
								</g>
								<defs>
									<clipPath id="clip0_9165_1620">
										<rect width="20" height="20" fill="white" transform="translate(0.15625 0.5)" />
									</clipPath>
								</defs>
							</svg>
						)}
					/>
				</div>
				<div className={"self-end mt-6 w-full sm:w-40 md:w-full lg:w-40 *:w-full max-sm:mb-6 md:mb-6 lg:mb-0"}>
					<CustomButton type={"submit"} title={"ذخیره کردن"} size={48} isFilled isSquared loading={isSubmitting} disabled={isSubmitting} />
				</div>
			</div>
		</form>
	);
}
