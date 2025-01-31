import React, { useEffect } from "react";
import DashboardSectionTitle from "../../../components/DashboardSectionTitle";
import useApi from "../../../hooks/useApi";
import { OrderService } from "../../../services/order.service";
import { PuffLoader } from "react-spinners";
import { useNavigate, useParams } from "react-router-dom";

export default function Addresses() {
	const { id } = useParams();
	const { data, loading, execute } = useApi(() => OrderService.getMyOrders());
	const navigate = useNavigate();

	useEffect(() => {
		execute();
	}, []);

	const orderDetails = () => navigate(id);

	if (loading) {
		return (
			<div className="h-screen flex items-center justify-center">
				<PuffLoader size={60} color="#417F56" />
			</div>
		);
	}

	return (
		<div className={"pt-6 md:pt-10 md:pr-6"}>
			<DashboardSectionTitle title={"سفارش‌های من"} />
			<div className="mt-4 flex flex-col gap-y-4">{data?.length ? data?.map((orders) => true) : <h6 className="text-center text-gray-600">سفارشی یافت نشد...</h6>}</div>
		</div>
	);
}
