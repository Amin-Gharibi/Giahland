import { Navigate, Route, Routes } from "react-router-dom";
import UserDashboardLayout from "../../layouts/UserDashboardLayout";
import MyInfo from "./MyInfo";
import ConsultationWithPlantPathologist from "./ConsultationWithPlantPathologist";
import Messages from "./Messages";

function UserDashboard() {
	return (
		<UserDashboardLayout>
			<Routes>
				<Route path="" element={<Navigate to={"my-info"} replace />} />
				<Route path="my-info" element={<MyInfo />} />
				<Route path="consultation-with-plant-pathologist" element={<ConsultationWithPlantPathologist />} />
				<Route path="messages" element={<Messages />} />
				<Route path="messages/:chatId" element={<Messages />} />
			</Routes>
		</UserDashboardLayout>
	);
}

export default UserDashboard;
