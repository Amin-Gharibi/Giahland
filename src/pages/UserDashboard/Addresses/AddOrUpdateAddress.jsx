import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardSectionTitle from "../../../components/DashboardSectionTitle";
import { useForm } from "react-hook-form";
import useApi from "../../../hooks/useApi";
import { UserService } from "../../../services/user.service";
import CustomInput from "../../../components/CustomInput";
import useResponsiveSize from "../../../hooks/useResponsiveSize";
import CustomButton from "../../../components/CustomButton";
import { PuffLoader } from "react-spinners";
import { showToast } from "../../../config/toast.config";

export default function AddOrUpdateAddress() {
	const { id } = useParams();
	const { data, loading, execute } = useApi(() => UserService.getAddressByID(id));
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = useForm({
		defaultValues: {
			province: "",
			city: "",
			address: "",
			postalCode: "",
		},
	});
	const navigate = useNavigate();

	useEffect(() => {
		if (id) {
			execute();
		}
	}, []);

    useEffect(() => {
        if (data) {
            reset({
                province: data.province,
                city: data.city,
                address: data.address,
                postalCode: data.postal_code
            })
        }
    }, [data])

	const inputSize = useResponsiveSize([
		{ breakpoint: 0, value: 48 },
		{ breakpoint: 640, value: 48 },
	]);

	const submitHandler = async (data) => {
		try {
			if (id) {
				await UserService.updateAddress(id, data.address, data.city, data.province, data.postalCode);
				showToast.success("آدرس مورد نظر با موفقیت تغییر کرد");
			} else {
				await UserService.addAddress(data.address, data.city, data.province, data.postalCode);
				showToast.success("آدرس مورد نظر با موفقیت اضافه شد");
			}
			reset();
			navigate("/dashboard/addresses");
		} catch (error) {
			if (id) {
				showToast.error("خطایی در بروزرسانی آدرس رخ داد");
			} else {
				showToast.error("خطایی در ایجاد آدرس رخ داد");
			}
			console.log("error", error);
		}
	};

	if (loading) {
		return (
			<div className="h-screen flex items-center justify-center">
				<PuffLoader size={60} color="#417F56" />
			</div>
		);
	}

	return (
		<div className={"pt-6 md:pt-10 md:pr-6"}>
			<div className="flex items-center justify-between">
				<DashboardSectionTitle title={id ? "ویرایش آدرس" : "اضافه کردن آدرس"} />
			</div>
			<form onSubmit={handleSubmit(submitHandler)} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 mt-8 sm:mt-12">
				<CustomInput
					size={inputSize}
					control={control}
					name="province"
					rules={{
						required: "وارد کردن نام استان الزامی است",
					}}
					placeholder="استان"
				/>
				<CustomInput
					size={inputSize}
					control={control}
					name="city"
					rules={{
						required: "وارد کردن نام شهرستان الزامی است",
					}}
					placeholder="شهرستان"
				/>
				<CustomInput
					size={inputSize}
					control={control}
					name="address"
					rules={{
						required: "وارد کردن آدرس دقیق الزامی است",
					}}
					placeholder="آدرس"
				/>
				<CustomInput
					size={inputSize}
					control={control}
					name="postalCode"
					rules={{
						required: "وارد کردن کد پستی الزامی است",
					}}
					placeholder="کد پستی"
				/>
				<CustomButton size={inputSize} title="ثبت" type="submit" isFilled isSquared loading={isSubmitting} disabled={isSubmitting} classNames="sm:col-span-2 md:col-span-1 lg:col-span-2 w-full sm:w-80 md:w-full lg:w-80 max-w-full mx-auto" />
			</form>
		</div>
	);
}
