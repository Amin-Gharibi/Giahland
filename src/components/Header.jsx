import menuIcon from "../assets/svg/menu.svg";
import searchPrimary from "../assets/svg/search-primary.svg";
import shoppingCartPrimary from "../assets/svg/shoppintCart-primary.svg";
import loginPrimary from "../assets/svg/login-primary.svg";
import login2Primary from "../assets/svg/login2-primary.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomIconButton from "./CustomIconButton.jsx";
import CustomButton from "./CustomButton.jsx";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useState } from "react";

Header.propTypes = {
	onlyMobileSize: PropTypes.bool,
};

function Header({ onlyMobileSize = false }) {
	const {
		register: searchRegister,
		handleSubmit: searchHandleSubmit
	} = useForm();
	const location = useLocation();
    const navigate = useNavigate();

    const [showSearchInput, setShowSearchInput] = useState(false)

	const handleSearchingLg = (data) => {
		const dt = {searchText: data.searchTextLg}
        handleSearching(dt)
	};

    const handleSearchingSm = (data) => {
        const dt = {searchText: data.searchTextSm}
        handleSearching(dt)
    };

    const handleSearching = (data) => {
        navigate(`/search?q=${data.searchText}`)
    };

	return (
		<div className={`flex flex-col items-stretch mt-6 pb-6 border-b border-b-neutral5 ${onlyMobileSize ? "md:hidden" : ""}`}>
			<div className={"w-full flex justify-between items-center"}>
				<div className={"flex justify-between items-center gap-x-3 sm:gap-x-6 lg:gap-x-4 xl:gap-x-6"}>
					<button className={"w-8 h-8 md:w-10 md:h-10 p-1 flex justify-center items-center rounded-lg bg-neutral3 lg:hidden"}>
						<img src={menuIcon} alt="menu" className={"w-5 h-5 md:w-6 md:h-6"} />
					</button>
					<Link to={"/"} className={"cursor-pointer"}>
						<h1 className={"font-medium text-primary sm:font-bold text-2xl"}>گیاه لند</h1>
					</Link>
					<div className={"hidden lg:flex items-center lg:gap-x-4 xl:gap-x-8 max-sm:hidden lg:*:text-base xl:*:text-lg"}>
						<Link className={location.pathname === "/" ? "text-primary" : ""} to={"/"}>
							صفحه اصلی
						</Link>
						<Link className={location.pathname === "/dashboard/consultation-with-plant-pathologist" ? "text-primary" : ""} to={"/dashboard/consultation-with-plant-pathologist"}>
							گیاه پزشک
						</Link>
						<Link className={location.pathname === "/blogs" ? "text-primary" : ""} to={"/blogs"}>
							وبلاگ
						</Link>
						<Link className={location.pathname === "/contact-us" ? "text-primary" : ""} to={"/contact-us"}>
							تماس با ما
						</Link>
						<Link className={location.pathname === "/about-us" ? "text-primary" : ""} to={"/about-us"}>
							درباره ما
						</Link>
					</div>
				</div>
				<div className={"flex items-stretch gap-x-2 sm:gap-x-4"}>
					<div className={"max-sm:hidden h-auto"}>
						{showSearchInput ? (
							<form onSubmit={searchHandleSubmit(handleSearchingLg)} className="h-full flex items-stretch bg-transparent py-2 px-2.5 rounded-lg bg-neutral1 border border-dashed border-primary">
								<input type="text" placeholder="جستجو گیاه" {...searchRegister("searchTextLg")} className="max-md:w-[170px] lg:w-[150px] xl:w-auto bg-transparent border-none outline-none text-sm xl:text-base text-neutral9" />
								<button type="submit" className={"bg-white border border-primary rounded-lg outline-none flex items-center justify-center py-1 px-2"}>
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M13.1292 11.8792H12.4709L12.2375 11.6542C13.0542 10.7042 13.5459 9.47086 13.5459 8.12919C13.5459 5.13752 11.1209 2.71252 8.12919 2.71252C5.13752 2.71252 2.71252 5.13752 2.71252 8.12919C2.71252 11.1209 5.13752 13.5459 8.12919 13.5459C9.47086 13.5459 10.7042 13.0542 11.6542 12.2375L11.8792 12.4709V13.1292L16.0459 17.2875L17.2875 16.0459L13.1292 11.8792ZM8.12919 11.8792C6.05419 11.8792 4.37919 10.2042 4.37919 8.12919C4.37919 6.05419 6.05419 4.37919 8.12919 4.37919C10.2042 4.37919 11.8792 6.05419 11.8792 8.12919C11.8792 10.2042 10.2042 11.8792 8.12919 11.8792Z" fill="#417F56" />
									</svg>
								</button>
							</form>
						) : (
							<CustomIconButton onClick={() => setShowSearchInput(true)} size={48} icon={searchPrimary} isOutline={true} isSquared={true} />
						)}
					</div>
					<div className={"max-sm:hidden"}>
						<CustomIconButton onClick={() => navigate('/cart')} size={48} icon={shoppingCartPrimary} isOutline={true} isSquared={true} />
					</div>
					<div className={"sm:hidden"}>
						<CustomIconButton onClick={() => navigate('/cart')} size={32} icon={shoppingCartPrimary} isOutline={true} isSquared={true} />
					</div>
					<div className={"max-sm:hidden"}>
						<CustomButton title={"ورود | ثبت نام"} onClick={() => navigate('/login')} size={48} icon={loginPrimary} leftIcon={true} isOutline={true} isSquared={true} />
					</div>
					<div className={"sm:hidden"}>
						<CustomIconButton onClick={() => navigate('/login')} size={32} icon={login2Primary} isOutline={true} isSquared={true} />
					</div>
				</div>
			</div>
			<form onSubmit={searchHandleSubmit(handleSearchingSm)} className={"sm:hidden mt-4"}>
				<div className="flex items-stretch h-10 bg-neutral3 py-2 px-2.5 rounded-lg">
					<input type="text" placeholder="جستجو گیاه" {...searchRegister("searchTextSm")} className="flex-grow bg-transparent border-none outline-none text-sm text-neutral9" />
					<button type="submit" className={"outline-none flex items-center justify-center p-1"}>
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.1292 11.8792H12.4709L12.2375 11.6542C13.0542 10.7042 13.5459 9.47086 13.5459 8.12919C13.5459 5.13752 11.1209 2.71252 8.12919 2.71252C5.13752 2.71252 2.71252 5.13752 2.71252 8.12919C2.71252 11.1209 5.13752 13.5459 8.12919 13.5459C9.47086 13.5459 10.7042 13.0542 11.6542 12.2375L11.8792 12.4709V13.1292L16.0459 17.2875L17.2875 16.0459L13.1292 11.8792ZM8.12919 11.8792C6.05419 11.8792 4.37919 10.2042 4.37919 8.12919C4.37919 6.05419 6.05419 4.37919 8.12919 4.37919C10.2042 4.37919 11.8792 6.05419 11.8792 8.12919C11.8792 10.2042 10.2042 11.8792 8.12919 11.8792Z" fill="#717171" />
						</svg>
					</button>
				</div>
			</form>
		</div>
	);
}

export default Header;
