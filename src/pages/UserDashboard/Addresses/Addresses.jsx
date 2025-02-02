import React, { useEffect } from "react";
import DashboardSectionTitle from "../../../components/DashboardSectionTitle";
import useApi from "../../../hooks/useApi";
import { UserService } from "../../../services/user.service";
import { PuffLoader } from "react-spinners";
import AddressBox from "../../../components/AddressBox";
import CustomButton from "../../../components/CustomButton";
import { useNavigate } from "react-router-dom";

export default function Addresses() {
	const { data, loading, execute } = useApi(() => UserService.getAddresses());
	const navigate = useNavigate();

	useEffect(() => {
		execute();
	}, []);

	const addNewAddressHandler = () => navigate("add");

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
				<DashboardSectionTitle title={"آدرس ها"} />
				<CustomButton size={32} title="آدرس جدید" onClick={addNewAddressHandler} isFilled isDashed isSquared />
			</div>
			<div className="mt-4 flex flex-col gap-y-4">{data?.length ? data?.map((address) => <AddressBox key={address.id} addressId={address.id} address={address.address} city={address.city} province={address.province} postalCode={address.postal_code} isDefault={address.is_default} onChange={() => execute()} />) : <h6 className="text-center text-gray-600">آدرسی یافت نشد...</h6>}</div>
		</div>
	);
}
