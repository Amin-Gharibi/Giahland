import PropTypes from "prop-types";
import EnToFaNum from "../utils/EnToFaNum.js";
import { useNavigate } from "react-router-dom";
import ToolTip from "./ToolTip.jsx";
import { showToast } from "../config/toast.config.js";
import { UserService } from "../services/user.service.js";

AddressBox.propTypes = {
	addressId: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	province: PropTypes.string.isRequired,
	postalCode: PropTypes.string.isRequired,
	isDefault: PropTypes.bool.isRequired,
	onChange: PropTypes.func,
};

function AddressBox({ addressId, address, city, province, postalCode, isDefault, onChange = () => true }) {
	const navigate = useNavigate();

	const editHandler = () => {
		navigate(`/dashboard/addresses/${addressId}`);
	};

	const activateAddress = async (e) => {
		try {
			e.target.disabled = true;
			await UserService.setDefaultAddress(addressId);
			showToast.success("آدرس فعال با موفقیت تغییر کرد");
		} catch (error) {
			showToast.error("خطایی در فعالسازی آدرس رخ داد");
			console.log(error);
		} finally {
			e.target.disabled = false;
			onChange();
		}
	};

	const deleteAddress = async (e) => {
		try {
			e.target.disabled = true;
			await UserService.deleteAddress(addressId);
			showToast.success("آدرس با موفقیت حذف شد");
		} catch (error) {
			showToast.error("خطایی در حذف آدرس رخ داد");
			console.log(error);
		} finally {
			e.target.disabled = false;
			onChange();
		}
	};

	return (
		<div className={"w-full flex flex-col-reverse sm:flex-row md:flex-col-reverse lg:flex-row gap-x-1 gap-y-6 justify-between items-center px-4 sm:px-6 py-4 border border-neutral3 rounded-2xl"}>
			<div className={"flex flex-col items-start gap-4"}>
				<div className={"flex gap-x-10 gap-y-4 flex-wrap"}>
					<Item title={"استان:"} value={province} />
					<Item title={"شهرستان:"} value={city} />
					<Item title={"آدرس:"} value={address} />
				</div>
				<div>
					<Item title={"کد پستی:"} value={EnToFaNum(postalCode)} />
				</div>
			</div>
			<div className="flex items-center gap-x-4">
				{isDefault ? (
					<ToolTip title="آدرس فعال">
						<div className="-mt-1.5">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-primary size-6">
								<path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
							</svg>
						</div>
					</ToolTip>
				) : (
					<ToolTip title="فعالسازی">
						<button onClick={activateAddress}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-neutral8 size-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
							</svg>
						</button>
					</ToolTip>
				)}
				<ToolTip title="ویرایش">
					<button onClick={editHandler}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-neutral8 size-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
						</svg>
					</button>
				</ToolTip>
				<ToolTip title="حذف آدرس">
					<button onClick={deleteAddress}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-error size-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
						</svg>
					</button>
				</ToolTip>
			</div>
		</div>
	);
}

function Item({ title, value }) {
	return (
		<div className="flex items-center gap-x-1">
			<p className="text-sm leading-[1]">
				<span className="inline-block ml-1.5 text-gray-600">{title}</span>
				{value}
			</p>
		</div>
	);
}

export default AddressBox;
