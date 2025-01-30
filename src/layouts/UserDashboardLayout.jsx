import Header from "../components/Header.jsx";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EnToFaNum from "../utils/EnToFaNum.js";
import SideMenuItem from "../components/SideMenuItem.jsx";
import { useUserAuth } from "../contexts/UserAuthContext.jsx";
import { PuffLoader } from "react-spinners";
import API_CONFIG from "../config/api.config.js";


function UserDashboardLayout({ children }) {
	const navigate = useNavigate();
	const [showSideMenu, setShowSideMenu] = useState(false);
	const { isLoading, isAuthenticated, user, logout } = useUserAuth();
	const previewUrl = new URL(API_CONFIG.BASE_URL).origin + user.profile_image_url;

	// handle showing or not showing the sidebar menu
	useEffect(() => {
		const resizeHandler = () => {
			if (window.matchMedia("(min-width: 768px)").matches && (window.location.pathname.endsWith("dashboard") || window.location.pathname.endsWith("dashboard/"))) {
				navigate("/dashboard/my-info");
			}
			if (window.matchMedia("(min-width: 768px)").matches || (window.matchMedia("(max-width: 768px)").matches && (window.location.pathname.endsWith("dashboard") || window.location.pathname.endsWith("dashboard/")))) {
				setShowSideMenu(true);
			} else {
				setShowSideMenu(false);
			}
		};
		resizeHandler();
		window.addEventListener("resize", resizeHandler);
		return () => {
			window.removeEventListener("resize", resizeHandler);
		};
	}, [navigate]);

	const logoutHandler = () => {
		logout()
	}

	if (isLoading) {
		return (
			<div className="h-screen flex items-center justify-center">
				<PuffLoader size={60} color="#417F56" />
			</div>
		);
	}

	if (!isAuthenticated) {
		return <Navigate to={"/login"} />;
	}

	return (
		<div className={"container h-screen flex flex-col"}>
			<Header />
			<div className={"grid grid-cols-12 grid-rows-1 flex-grow overflow-hidden"}>
				<div className={`${showSideMenu ? "" : "hidden"} col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3 h-full flex flex-col md:border-l border-l-neutral3 p-6 pr-0`}>
					<div className={"flex justify-start items-center gap-x-2"}>
						<img src={previewUrl} alt={user.first_name + " " + user.last_name} className={"object-cover w-[60px] h-[60px] rounded-full"} />
						<div className={"flex flex-col gap-y-1"}>
							<span className={"text-sm text-black"}>{user.first_name + " " + user.last_name}</span>
							<span className={"text-sm text-neutral9"}>{EnToFaNum(user.phone_number ?? "")}</span>
						</div>
					</div>
					<div className={"flex flex-col gap-y-2.5 mt-12"}>
						<SideMenuItem
							title={"مشخصات حساب کاربری"}
							href={"/dashboard/my-info"}
							Icon={(props) => (
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
									<path d="M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z" />
								</svg>
							)}
						/>
						<SideMenuItem
							title={"آدرس‌های من"}
							href={"/dashboard/addresses"}
							Icon={() => (
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-neutral10 group-[.active]:text-primary">
									<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
								</svg>
							)}
						/>
						<SideMenuItem
							title={"مشاوره با گیاه‌پزشک"}
							href={"/dashboard/consultation-with-plant-pathologist"}
							Icon={(props) => (
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
									<path d="M10.5 15H8V12H10.5V9.5H13.5V12H16V15H13.5V17.5H10.5V15ZM19 8V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V8C5 6.9 5.9 6 7 6H17C18.1 6 19 6.9 19 8ZM17 8H7V19H17V8ZM18 3H6V5H18V3Z" />
								</svg>
							)}
						/>
						<SideMenuItem
							title={"پیام‌های دریافتی"}
							href={"/dashboard/messages"}
							Icon={(props) => (
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
									<path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 10.99L4 6H20ZM20 18H4V8L12 13L20 8V18Z" />
								</svg>
							)}
						/>
					</div>
					<div className={"mt-auto w-full"}>
						<button className={"w-full flex items-center gap-3 group active py-3 px-4 bg-bgError rounded-lg"} onClick={logoutHandler}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M17 8L15.59 9.41L17.17 11H9V13H17.17L15.59 14.58L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z" fill="#ED2E2E" />
							</svg>
							<span className={"text-lg leading-8 text-error"}>خروج از حساب کاربری</span>
						</button>
					</div>
				</div>
				<div className={`${showSideMenu ? "col-span-7 lg:col-span-8 xl:col-span-9" : "col-span-12"} overflow-y-scroll h-full hide-scrollbar`}>{children}</div>
			</div>
		</div>
	);
}

export default UserDashboardLayout;
