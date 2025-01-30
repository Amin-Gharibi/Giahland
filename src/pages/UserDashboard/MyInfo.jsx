import DashboardSectionTitle from "../../components/DashboardSectionTitle.jsx";
import CustomButton from "../../components/CustomButton.jsx";
import { useForm } from "react-hook-form";
import useResponsiveSize from "../../hooks/useResponsiveSize.js";
import CustomInput from "../../components/CustomInput.jsx";
import { useEffect } from "react";
import { useUserAuth } from "../../contexts/UserAuthContext.jsx";
import { PuffLoader } from "react-spinners";
import { UserService } from "../../services/user.service.js";
import { showToast } from "../../config/toast.config.js";
import { useNavigate } from "react-router-dom";
import tempProf from "../../assets/temp/ninthFlower.png";


function MyInfo() {
	const { user, isLoading, refreshUser, logout } = useUserAuth();
	const navigate = useNavigate();

	const {
		control: control1,
		handleSubmit: handleSubmit1,
		reset: reset1,
	} = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			phoneNumber: "",
			email: "",
			homeAddress: "",
			homePhoneNumber: "",
		},
	});
	const onSubmit = async (data) => {
		try {
			await UserService.updateProfile(data.firstName, data.lastName, data.phoneNumber, data.homeAddress, data.homePhoneNumber);
			await refreshUser();
			showToast.success("پروفایل با موفقیت آپدیت شد");
		} catch (error) {
			showToast.error("خطایی در آپدیت پروفایل رخ داد");
			console.log(error);
		}
	};

	const {
		control: control2,
		handleSubmit: handleSubmit2,
		reset: reset2,
	} = useForm({
		defaultValues: {
			currentPassword: "",
			newPassword: "",
		},
	});
	const onPasswordFormSubmit = async (data) => {
		try {
			const response = await UserService.updatePassword(data.currentPassword, data.newPassword);
			console.log(response);
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

	const inputSize = useResponsiveSize([
		{ breakpoint: 0, value: 48 },
		{ breakpoint: 640, value: 56 },
	]);

	useEffect(() => {
		if (user) {
			reset1({
				firstName: user.first_name ?? "",
				lastName: user.last_name ?? "",
				phoneNumber: user.phone_number ?? "",
				email: user.email ?? "",
				homeAddress: user.home_address ?? "",
				homePhoneNumber: user.home_phone_number ?? "",
			});
		}
	}, [user, isLoading]);

	if (isLoading) {
		return (
			<div className="h-screen flex items-center justify-center">
				<PuffLoader size={60} color="#417F56" />
			</div>
		);
	}

	return (
		<div className={"pt-6 md:pt-10 md:pr-6"}>
			<form onSubmit={handleSubmit1(onSubmit)} className={"w-full"}>
				<DashboardSectionTitle title={"مشخصات حساب کاربری"} />
				<div className={"flex flex-col sm:p-6 md:p-0 lg:p-6 sm:border md:border-0 lg:border border-neutral3 w-full rounded-2xl mt-4"}>
					<div className={"flex flex-col sm:flex-row md:flex-col w-full lg:flex-row items-center gap-4"}>
						<img src={tempProf} alt={user.first_name + " " + user.last_name} className={"object-cover w-20 h-20 rounded-full"} />
						<div className={"flex gap-x-4 w-full lg:w-max max-sm:*:flex-grow md:*:w-1/2 lg:*:w-max"}>
							<CustomButton title={"ویرایش با تصویر جدید"} onClick={() => true} size={40} isFilled isSquared />
							<CustomButton title={"حذف تصویر"} onClick={() => true} size={40} isOutline isSquared />
						</div>
					</div>
					<div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-8 sm:mt-12"}>
						<CustomInput
							size={inputSize}
							control={control1}
							name="firstName"
							rules={{
								required: "وارد کردن نام الزامی است",
							}}
							placeholder="نام"
							RightIcon={(props) => (
								<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
									<path d="M10.1564 5.49998C11.0731 5.49998 11.8231 6.24998 11.8231 7.16665C11.8231 8.08331 11.0731 8.83331 10.1564 8.83331C9.23975 8.83331 8.48975 8.08331 8.48975 7.16665C8.48975 6.24998 9.23975 5.49998 10.1564 5.49998ZM10.1564 13C12.4064 13 14.9897 14.075 15.1564 14.6666V15.5H5.15641V14.675C5.32308 14.075 7.90641 13 10.1564 13ZM10.1564 3.83331C8.31475 3.83331 6.82308 5.32498 6.82308 7.16665C6.82308 9.00831 8.31475 10.5 10.1564 10.5C11.9981 10.5 13.4897 9.00831 13.4897 7.16665C13.4897 5.32498 11.9981 3.83331 10.1564 3.83331ZM10.1564 11.3333C7.93141 11.3333 3.48975 12.45 3.48975 14.6666V17.1666H16.8231V14.6666C16.8231 12.45 12.3814 11.3333 10.1564 11.3333Z" />
								</svg>
							)}
						/>
						<CustomInput
							size={inputSize}
							control={control1}
							name="lastName"
							rules={{
								required: "وارد کردن نام خانوادگی الزامی است",
							}}
							placeholder="نام خانوادگی"
							RightIcon={(props) => (
								<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
									<path d="M10.1564 5.49998C11.0731 5.49998 11.8231 6.24998 11.8231 7.16665C11.8231 8.08331 11.0731 8.83331 10.1564 8.83331C9.23975 8.83331 8.48975 8.08331 8.48975 7.16665C8.48975 6.24998 9.23975 5.49998 10.1564 5.49998ZM10.1564 13C12.4064 13 14.9897 14.075 15.1564 14.6666V15.5H5.15641V14.675C5.32308 14.075 7.90641 13 10.1564 13ZM10.1564 3.83331C8.31475 3.83331 6.82308 5.32498 6.82308 7.16665C6.82308 9.00831 8.31475 10.5 10.1564 10.5C11.9981 10.5 13.4897 9.00831 13.4897 7.16665C13.4897 5.32498 11.9981 3.83331 10.1564 3.83331ZM10.1564 11.3333C7.93141 11.3333 3.48975 12.45 3.48975 14.6666V17.1666H16.8231V14.6666C16.8231 12.45 12.3814 11.3333 10.1564 11.3333Z" />
								</svg>
							)}
						/>
						<CustomInput
							size={inputSize}
							control={control1}
							name="phoneNumber"
							rules={{
								required: "وارد کردن شماره موبایل الزامی است",
								pattern: {
									value: /^09\d{9}$/,
									message: "شماره موبایل وارد شده باید با فرمت ۰۹xxxxxxxxx باشد",
								},
							}}
							placeholder="شماره موبایل"
							RightIcon={(props) => (
								<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
									<path d="M15.9104 0.833313H7.57702C6.66035 0.833313 5.91035 1.58331 5.91035 2.49998V4.99998H7.57702V3.33331H15.9104V16.6666H7.57702V15H5.91035V17.5C5.91035 18.4166 6.66035 19.1666 7.57702 19.1666H15.9104C16.827 19.1666 17.577 18.4166 17.577 17.5V2.49998C17.577 1.58331 16.827 0.833313 15.9104 0.833313ZM5.91869 11.225L3.79368 9.09998L2.73535 10.1583L5.91035 13.3333L11.902 7.34165L10.8437 6.28331L5.91869 11.225Z" />
								</svg>
							)}
						/>
						<CustomInput
							type={"email"}
							size={inputSize}
							control={control1}
							name="email"
							rules={{
								required: "وارد کردن ایمیل الزامی است",
								pattern: {
									value: /^[a-zA-Z\d]{3,}@[a-zA-Z]{4,}\.[a-zA-Z]{3,}$/,
									message: "ایمیل وارد شده معتبر نیست!",
								},
							}}
							placeholder="ایمیل"
							RightIcon={(props) => (
								<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
									<path d="M18.4895 4.16669H3.82284C2.8145 4.16669 1.99867 4.99169 1.99867 6.00002L1.9895 17C1.9895 18.0084 2.8145 18.8334 3.82284 18.8334H18.4895C19.4978 18.8334 20.3228 18.0084 20.3228 17V6.00002C20.3228 4.99169 19.4978 4.16669 18.4895 4.16669ZM18.4895 17H3.82284V7.83335L11.1562 12.4167L18.4895 7.83335V17ZM11.1562 10.5834L3.82284 6.00002H18.4895L11.1562 10.5834Z" />
								</svg>
							)}
						/>
						<CustomInput
							size={inputSize}
							control={control1}
							name="homeAddress"
							placeholder="آدرس منزل"
							RightIcon={(props) => (
								<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
									<path d="M10.1561 1.66666C6.93109 1.66666 4.32275 4.27499 4.32275 7.49999C4.32275 11.875 10.1561 18.3333 10.1561 18.3333C10.1561 18.3333 15.9894 11.875 15.9894 7.49999C15.9894 4.27499 13.3811 1.66666 10.1561 1.66666ZM5.98942 7.49999C5.98942 5.19999 7.85609 3.33332 10.1561 3.33332C12.4561 3.33332 14.3228 5.19999 14.3228 7.49999C14.3228 9.89999 11.9228 13.4917 10.1561 15.7333C8.42275 13.5083 5.98942 9.87499 5.98942 7.49999Z" />
									<path d="M10.1561 9.58332C11.3067 9.58332 12.2394 8.65058 12.2394 7.49999C12.2394 6.3494 11.3067 5.41666 10.1561 5.41666C9.00549 5.41666 8.07275 6.3494 8.07275 7.49999C8.07275 8.65058 9.00549 9.58332 10.1561 9.58332Z" />
								</svg>
							)}
						/>
						<CustomInput
							size={inputSize}
							control={control1}
							name="homePhoneNumber"
							placeholder="تلفن منزل"
							RightIcon={(props) => (
								<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
									<path d="M6.10625 4.66667C6.15625 5.40833 6.28125 6.13333 6.48125 6.825L5.48125 7.825C5.13958 6.825 4.92292 5.76667 4.84792 4.66667H6.10625ZM14.3229 14.6833C15.0312 14.8833 15.7562 15.0083 16.4896 15.0583V16.3C15.3896 16.225 14.3312 16.0083 13.3229 15.675L14.3229 14.6833ZM6.90625 3H3.98958C3.53125 3 3.15625 3.375 3.15625 3.83333C3.15625 11.6583 9.49792 18 17.3229 18C17.7812 18 18.1562 17.625 18.1562 17.1667V14.2583C18.1562 13.8 17.7812 13.425 17.3229 13.425C16.2896 13.425 15.2812 13.2583 14.3479 12.95C14.2646 12.9167 14.1729 12.9083 14.0896 12.9083C13.8729 12.9083 13.6646 12.9917 13.4979 13.15L11.6646 14.9833C9.30625 13.775 7.37292 11.85 6.17292 9.49167L8.00625 7.65833C8.23958 7.425 8.30625 7.1 8.21458 6.80833C7.90625 5.875 7.73958 4.875 7.73958 3.83333C7.73958 3.375 7.36458 3 6.90625 3Z" />
								</svg>
							)}
						/>
					</div>
					<div className={"self-end mt-6 w-full sm:w-40 md:w-full lg:w-40 *:w-full"}>
						<CustomButton type={"submit"} title={"ذخیره کردن"} onClick={() => true} size={48} isFilled isSquared />
					</div>
				</div>
			</form>
			<form onSubmit={handleSubmit2(onPasswordFormSubmit)} className={"w-full mt-6"}>
				<DashboardSectionTitle title={"تغییر رمز عبور"} />
				<div className={"flex flex-col sm:p-6 md:p-0 lg:p-6 sm:border md:border-0 lg:border border-neutral3 w-full rounded-2xl mt-4"}>
					<div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6"}>
						<CustomInput
							type="password"
							size={inputSize}
							control={control2}
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
							control={control2}
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
						<CustomButton type={"submit"} title={"ذخیره کردن"} onClick={() => true} size={48} isFilled isSquared />
					</div>
				</div>
			</form>
		</div>
	);
}

export default MyInfo;
