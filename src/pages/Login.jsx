import loginBgImage from "../assets/images/loginBgImage.png";
import CustomInput from "../components/CustomInput.jsx";
import CustomButton from "../components/CustomButton.jsx";
import { useForm } from "react-hook-form";
import useResponsiveSize from "../hooks/useResponsiveSize.js";
import Header from "../components/Header.jsx";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { AuthService } from "../services/auth.service.js";
import { useUserAuth } from "../contexts/UserAuthContext.jsx";
import { showToast } from "../config/toast.config.js";
import { PuffLoader } from "react-spinners";
import { useEffect } from "react";

function Login() {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const { login, isAuthenticated, isLoading, isAdmin, isSeller } = useUserAuth();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const inputSize = useResponsiveSize([
		{ breakpoint: 0, value: 48 },
		{ breakpoint: 470, value: 56 },
	]);

	useEffect(() => {
		if (searchParams.has("session_expire", "true")) {
			showToast.info("نشست شما پایان یافته است، لطفا دوباره وارد شوید");
		}
	}, [searchParams]);

	const onSubmit = async (data) => {
		try {
			const res = await AuthService.login(data.email, data.password);
			await login({ access: res.accessToken, refresh: res.refreshToken });

			if (res.user?.role === "admin") {
				navigate("/admin-dashboard");
			} else if (res.user?.role === "seller") {
				navigate("/seller-dashboard");
			} else {
				navigate("/dashboard/my-info");
			}
		} catch (error) {
			if (error.response?.status === 400) {
				// if email or password was not correct
				showToast.error("ایمیل یا رمزعبور وارد شده صحیح نیست!");
			} else {
				// Handle other errors
				console.error("Registration failed:", error);
			}
		}
	};

	if (isLoading) {
		return (
			<div className="h-screen flex items-center justify-center">
				<PuffLoader size={60} color="#417F56" />
			</div>
		);
	}

	if (isAuthenticated) {
		// if user is already logged in
		if (isAdmin()) {
			return <Navigate to={"/admin-dashboard"} />;
		}
		if (isSeller()) {
			return <Navigate to={"/seller-dashboard"} />;
		}
		return <Navigate to={"/dashboard/my-info"} />;
	}

	return (
		<>
			<div className={"container"}>
				<Header onlyMobileSize />
			</div>
			<div className={"flex flex-col md:flex-row md:*:w-1/2 md:*:h-screen"}>
				<div className={"container max-xs:-mt-3 bg-white max-md:order-2 lg:px-24 xl:px-40 flex justify-center items-center max-md:rounded-t-xl overflow-hidden"}>
					<form onSubmit={handleSubmit(onSubmit)} className={"w-full"}>
						<h1 className={"xs:font-semibold text-xl leading-7 text-black mb-8 max-md:text-center max-md:mt-4"}>ورود</h1>
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
						<div className={"mt-6"}>
							<CustomInput
								type={"password"}
								size={inputSize}
								name="password"
								control={control}
								rules={{
									required: "وارد کردن رمز عبور الزامی است",
								}}
								placeholder="رمز عبور"
								RightIcon={(props) => (
									<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
										<path d="M19.4061 9.66667H11.7519C11.0003 7.53083 8.96525 6 6.57275 6C3.53859 6 1.07275 8.46583 1.07275 11.5C1.07275 14.5342 3.53859 17 6.57275 17C8.96525 17 11.0003 15.4692 11.7519 13.3333H12.0728L13.9061 15.1667L15.7394 13.3333L17.5728 15.1667L21.2394 11.4633L19.4061 9.66667ZM6.57275 14.25C5.06025 14.25 3.82275 13.0125 3.82275 11.5C3.82275 9.9875 5.06025 8.75 6.57275 8.75C8.08525 8.75 9.32275 9.9875 9.32275 11.5C9.32275 13.0125 8.08525 14.25 6.57275 14.25Z" />
									</svg>
								)}
							/>
						</div>
						<Link to={'/forgot-password'} className={"inline-block text-sm text-primary border-none outline-none mt-4"}>بازیابی رمز عبور</Link>
						<div className={"w-full *:w-full mt-8"}>
							<CustomButton type={"submit"} title={"ورود"} onClick={() => true} size={inputSize} isFilled={true} isSquared={true} loading={isSubmitting} disabled={isSubmitting} />
						</div>
						<div className={"mt-3 text-center leading-7 text-sm xs:text-base"}>
							<span>حساب کاربری ندارید؟ </span>
							<Link to={"/signup"} className={"text-primary"}>
								ثبت نام
							</Link>
							<span> کنید</span>
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

export default Login;
