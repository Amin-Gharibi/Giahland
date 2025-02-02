import React from "react";
import CustomButton from "../../../components/CustomButton";
import { useUserAuth } from "../../../contexts/UserAuthContext";
import { UserService } from "../../../services/user.service";
import { showToast } from "../../../config/toast.config";
import API_CONFIG from "../../../config/api.config";

export default function ProfilePhotoSection() {
	const { user, refreshUser } = useUserAuth();
	const previewUrl = new URL(API_CONFIG.BASE_URL).origin + user.profile_image_url;

	const handleFileChange = async (e) => {
		const file = e.target.files[0];
		if (file) {
			// Validate file type
			if (!file.type.startsWith("image/")) {
				alert("Please select an image file");
				return;
			}

			try {
				await UserService.setProfilePhoto(file);
				await refreshUser();
				showToast.success("پروفایل شما با موفقیت بروزرسانی شد");
			} catch (error) {
				showToast.error("خطایی هنگام بروزرسانی پروفایل رخ داد");
				console.error("Error uploading image:", error);
			}
		}
	};

	const handleProfileDeleting = async () => {
		try {
			await UserService.deleteProfilePhoto();
			await refreshUser();
			showToast.success("پروفایل با موفقیت حذف شد");
		} catch (error) {
			showToast.error("خطایی هنگام حذف عکس پروفایل رخ داد");
			console.log("error deleting profile photo", error);
		}
	};

	return (
		<form className={"flex flex-col sm:flex-row md:flex-col w-full lg:flex-row items-center gap-4"}>
			<img src={previewUrl} alt={user.first_name + " " + user.last_name} className={"object-cover w-20 h-20 rounded-full"} />
			<div className={"flex gap-x-4 w-full lg:w-max max-sm:*:flex-grow md:*:w-1/2 lg:*:w-max"}>
				<label htmlFor="file-input">
					<input id="file-input" type="file" accept="image/*" className="opacity-0 invisible w-0 h-0 absolute" onChange={handleFileChange} />
					<div className="flex items-center justify-center px-2 gap-x-2 text-sm bg-primary text-white rounded-lg transition-colors cursor-pointer" style={{ height: "40px" }}>
						<span>ویرایش با تصویر جدید</span>
					</div>
				</label>
				<CustomButton title={"حذف تصویر"} onClick={handleProfileDeleting} size={40} isOutline isSquared />
			</div>
		</form>
	);
}
