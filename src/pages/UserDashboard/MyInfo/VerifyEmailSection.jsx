import React, { useState } from "react";
import { useUserAuth } from "../../../contexts/UserAuthContext";
import { useForm } from "react-hook-form";
import { AuthService } from "../../../services/auth.service";
import { showToast } from "../../../config/toast.config";
import CustomInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";

export default function VerifyEmailSection() {
	const { user, refreshUser } = useUserAuth();
	const [isVerificationCodeSent, setIsVerificationCodeSent] = useState(false);
	const [isSending, setIsSending] = useState(false);
	const {
		control,
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = useForm({
		defaultValues: {
			verificationCode: "",
		},
	});

	const sendVerificationCode = async () => {
		try {
			setIsSending(true);
			await AuthService.requestVerificationCode();
			showToast.success("کد فعالسازی با موفقیت به ایمیل شما ارسال شد");
			setIsVerificationCodeSent(true);
		} catch (error) {
			showToast.error("خطایی هنگام ارسال کد فعالسازی رخ داد");
			console.log("error", error);
			setIsVerificationCodeSent(false);
		} finally {
			setIsSending(false);
		}
	};

	const verifyCodeHandler = async (data) => {
		try {
			await AuthService.verifyEmail(data.verificationCode);
			showToast.success("ایمیل شما با موفقیت تایید شد");
			await refreshUser();
			reset();
		} catch (error) {
			showToast.error("خطایی هنگام اعتبارسنجی کد رخ داد");
			console.log("verify code error", error);
		}
	};
	return user.is_verified ? (
		""
	) : (
		<form onSubmit={handleSubmit(verifyCodeHandler)} className="grid grid-cols-2 gap-x-6 gap-y-4">
			<span className="text-error text-xs cursor-default">ایمیل شما تایید نشده است!</span>
			<CustomInput
				type="text"
				size={48}
				control={control}
				name="verificationCode"
				rules={{
					required: "وارد کردن کد فعالسازی الزامی است",
				}}
				placeholder="کد فعالسازی"
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
				classNames="row-start-2"
			/>
			{isVerificationCodeSent ? <CustomButton type={"submit"} title={"تایید ایمیل"} size={40} isFilled isSquared loading={isSubmitting} disabled={isSubmitting} classNames="w-24 row-start-2 my-auto !h-full" /> : <CustomButton type={"button"} title={"ارسال کد"} onClick={sendVerificationCode} size={40} isOutline isDashed isSquared loading={isSending} disabled={isSending} classNames="w-24 row-start-2 my-auto !h-full" />}
		</form>
	);
}
