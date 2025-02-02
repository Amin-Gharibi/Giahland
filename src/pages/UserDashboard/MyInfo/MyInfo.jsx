import DashboardSectionTitle from "../../../components/DashboardSectionTitle.jsx";
import { useUserAuth } from "../../../contexts/UserAuthContext.jsx";
import { PuffLoader } from "react-spinners";
import ProfilePhotoSection from "./ProfilePhotoSection.jsx";
import UserDetailsSection from "./UserDetailsSection.jsx";
import VerifyEmailSection from "./VerifyEmailSection.jsx";
import UpdatePasswordSection from "./UpdatePasswordSection.jsx";

function MyInfo() {
	const { isLoading } = useUserAuth();

	if (isLoading) {
		return (
			<div className="h-screen flex items-center justify-center">
				<PuffLoader size={60} color="#417F56" />
			</div>
		);
	}

	return (
		<div className={"pt-6 md:pt-10 md:pr-6"}>
			<div className={"w-full"}>
				<DashboardSectionTitle title={"مشخصات حساب کاربری"} />
				<div className="sm:p-6 md:p-0 lg:p-6 sm:border md:border-0 lg:border border-neutral3 w-full rounded-2xl mt-4">
					<ProfilePhotoSection />
					<UserDetailsSection />
					<VerifyEmailSection />
				</div>
			</div>
			<UpdatePasswordSection />
		</div>
	);
}

export default MyInfo;
