import { Navigate, Route, Routes } from "react-router-dom";
import UserDashboardLayout from "../../layouts/UserDashboardLayout";
import Addresses from "./Addresses/Addresses";
import AddOrUpdateAddress from "./Addresses/AddOrUpdateAddress";
import MyInfo from "./MyInfo/MyInfo";
import MyOrders from "./MyOrders/MyOrders";
import OrderDetails from "./MyOrders/OrderDetails";

function UserDashboard() {
	return (
		<UserDashboardLayout>
			<Routes>
				<Route path="" element={<Navigate to={"my-info"} replace />} />
				<Route path="my-info" element={<MyInfo />} />
				<Route path="addresses" element={<Addresses />} />
				<Route path="addresses/add" element={<AddOrUpdateAddress />} />
				<Route path="addresses/:id" element={<AddOrUpdateAddress />} />
				<Route path="orders" element={<MyOrders />} />
				<Route path="orders/:id" element={<OrderDetails />} />
				<Route path="*" element={<Navigate to={"/not-found"} />} />
			</Routes>
		</UserDashboardLayout>
	);
}

export default UserDashboard;
