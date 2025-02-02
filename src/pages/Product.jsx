import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import BreadCrumb from "../components/Breadcrumb.jsx";
import ProductImagesSlider from "../components/ProductImagesSlider.jsx";
import { Link, Navigate, useParams } from "react-router-dom";
import ProductFeatureBox from "../components/ProductFeatureBox.jsx";
import CustomButton from "../components/CustomButton.jsx";
import shopIcon from "../assets/svg/shopIcon-gray.svg";
import EnToFaNum from "../utils/EnToFaNum.js";
import SwipingSlider from "../components/SwipingSlider.jsx";
import ProductSectionTitle from "../components/ProductSectionTitle.jsx";
import { useForm } from "react-hook-form";
import CommentItem from "../components/CommentItem.jsx";
import useResponsiveSize from "../hooks/useResponsiveSize.js";
import useApi from "../hooks/useApi.js";
import { ProductService } from "../services/product.service.js";
import { PuffLoader } from "react-spinners";
import { CommentService } from "../services/comment.service.js";
import { showToast } from "../config/toast.config.js";
import { useUserAuth } from "../contexts/UserAuthContext.jsx";
import { CartService } from "../services/cart.service.js";
import CustomIconButton from "../components/CustomIconButton.jsx";
import addIcon from "../assets/svg/add-white.svg";
import minusIcon from "../assets/svg/minus-white.svg";

function Product() {
	const { id } = useParams();
	const { data, loading, error, execute } = useApi(() => ProductService.getByID(id));
	const { data: similarProducts, loading: similarProductsLoading, error: similarProductsError, execute: similarProductsExecute } = useApi((category) => ProductService.getByCategory(category));
	const { data: comments, loading: commentsLoading, error: commentsError, execute: commentsExecute } = useApi(() => CommentService.getPageComments("product", id));
	const { data: isProductInMyCart, loading: isProductInMyCartLoading, error: isProductInMyCartError, execute: isProductInMyCartExecute } = useApi(() => CartService.isProductInMyCart(id));
	const [breadcrumbs, setBreadcrumbs] = useState(null);
	const { isAuthenticated } = useUserAuth();
	const [cartLoading, setCartLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({});

	const showMoreCommentsButtonSize = useResponsiveSize([
		{ breakpoint: 0, value: 40 },
		{ breakpoint: 1024, value: 48 },
	]);

	useEffect(() => {
		if (isAuthenticated) {
			Promise.all([execute(), commentsExecute(), isProductInMyCartExecute()]);
		} else {
			Promise.all([execute(), commentsExecute()]);
		}
	}, [id]);

	useEffect(() => {
		if (data) {
			similarProductsExecute(data.categories[0].en_name);
			setBreadcrumbs([{ name: data.categories[0].fa_name, url: "/category/" + data.categories[0].en_name }, { name: data.name }]);
		}
	}, [data]);

	const submitCommentHandler = async (data) => {
		if (!isAuthenticated) {
			showToast.info("برای ثبت نظر ابتدا وارد شوید");
			return;
		}
		try {
			await CommentService.createOne("product", id, data.comment, data.rate);
			showToast.success("نظر با موفقیت ثبت شد و پس از تایید نمایش داده خواهد شد");
		} catch (error) {
			showToast.error("خطایی هنگام ثبت نظر رخ داد");
			console.log("error creating comment", error);
		} finally {
			reset();
		}
	};

	const addToCartHandler = async () => {
        if (!isAuthenticated) {
			showToast.info("برای اضافه کردن محصول به سبد خرید ابتدا وارد شوید");
			return;
		}
		try {
			setCartLoading(true);
			await CartService.addItemToCart(id, 1);
			showToast.success("محصول با موفقیت به سبد خرید اضافه شد");
		} catch (error) {
			showToast.error("خطایی رخ داد هنگام اضافه کردن محصول به سبد خرید");
			console.log("error adding product to cart", error);
		} finally {
			isProductInMyCartExecute();
			setCartLoading(false);
		}
	};

	const deleteFromCartHandler = async () => {
        if (!isAuthenticated) {
			showToast.info("برای حذف کردن محصول از سبد خرید ابتدا وارد شوید");
			return;
		}
		try {
			setCartLoading(true);
			await CartService.removeItem(isProductInMyCart?.cartItem?.id);
			showToast.success("محصول با موفقیت از سبد خرید حذف شد");
		} catch (error) {
			showToast.error("خطایی رخ داد هنگام حذف کردن محصول به سبد خرید");
			console.log("error deleting product from cart", error);
		} finally {
			isProductInMyCartExecute();
			setCartLoading(false);
		}
	};

	const updateQuantityHandler = async (type) => {
        if (!isAuthenticated) {
			showToast.info("برای تغییر تعداد محصول ابتدا وارد شوید");
			return;
		}
		try {
			setCartLoading(true);
			const newQuantity = type === "add" ? isProductInMyCart?.cartItem?.quantity + 1 : isProductInMyCart?.cartItem?.quantity - 1;
			if (newQuantity === 0) {
				return await deleteFromCartHandler();
			}
			await CartService.updateQuantity(isProductInMyCart?.cartItem?.id, newQuantity);
			showToast.success("تعداد کالا تغییر کرد");
		} catch (error) {
			showToast.error("خطایی هنگام تغییر تعداد کالاها رخ داد");
			console.log("error while updating quantity", error);
		} finally {
			isProductInMyCartExecute();
			setCartLoading(false);
		}
	};

	if (loading || similarProductsLoading || commentsLoading || isProductInMyCartLoading) {
		return (
			<div className="h-screen flex items-center justify-center">
				<PuffLoader size={60} color="#417F56" />
			</div>
		);
	}

	if (error || similarProductsError || commentsError || isProductInMyCartError) {
		showToast.error("خطایی هنگام نمایش محصول رخ داد");
		return <Navigate to={"/"} />;
	}

	return (
		<>
			<div className={"container"}>
				<Header />
				<div className={"mt-2 sm:mt-4 md:mt-6"}>
					<BreadCrumb breadcrumbs={breadcrumbs ?? []} />
					<div className={"sm:mt-10 md:mt-16 lg:mt-[90px] max-w-full"}>
						<div className={"max-sm:border-b max-sm:pb-6 border-b-neutral6 max-w-full flex flex-col lg:flex-row items-start gap-x-7 flex-grow"}>
							<div className={"max-w-full lg:w-1/2 xl:w-[350px] h-max max-lg:mx-auto"}>
								<ProductImagesSlider images={data?.images || []} />
								<div className={"max-lg:hidden lg:block xl:hidden mt-10 flex-grow border border-neutral7 rounded-2xl py-8 px-6"}>
									<span className={"font-medium text-neutral12"}>فروشنده</span>
									<div className={"border-b border-b-neutral7 mt-3"}>
										<div className={"flex items-center gap-x-2"}>
											<img src={shopIcon} className={"w-6 h-6"} />
											<span>{data?.seller_name}</span>
										</div>
										<span className={"text-sm text-neutral12 my-6 mr-4 block"}>{EnToFaNum(data?.seller_rating)}</span>
									</div>
									<div className={"flex justify-between items-center my-6"}>
										<span className={"leading-7 text-neutral12"}>قیمت</span>
										<span className={"text-xl leading-9 text-black"}>{EnToFaNum(data?.price, true)} تومان</span>
									</div>
									<div className={"w-full *:w-full"}>
										{isProductInMyCart?.inCart ? (
											<div className="flex flex-col gap-y-3">
												<CustomButton title="حذف از سبد" size={48} isOutline isSquared loading={cartLoading} disabled={cartLoading} />
												<div className="flex gap-x-4 *:flex-grow">
													<CustomIconButton icon={addIcon} size={48} isFilled isSquared onClick={() => updateQuantityHandler("add")} loading={cartLoading} disabled={cartLoading} />
													<span className="text-base md:text-xl text-center my-auto">۱ عدد</span>
													<CustomIconButton icon={minusIcon} size={48} isFilled isSquared onClick={() => updateQuantityHandler("minus")} loading={cartLoading} disabled={cartLoading} />
												</div>
											</div>
										) : (
											<CustomButton title={"افزودن به سبد خرید"} onClick={addToCartHandler} size={48} isFilled isSquared loading={cartLoading} disabled={cartLoading} />
										)}
									</div>
								</div>
							</div>
							<div className={"w-full flex flex-col xl:flex-row items-start flex-grow gap-x-20"}>
								<div className={"max-xl:w-full flex-grow-[2] max-lg:mt-10"}>
									<Link to={`/category/${data?.categories[0]?.en_name}`} className={"text-sm sm:text-base font-medium text-primary"}>
										{data?.categories[0]?.fa_name}
									</Link>
									<h1 className={"mt-4 font-semibold text-xl leading-7 text-neutral12 pb-4 border-b border-b-neutral7"}>{data?.name}</h1>
									<div className={"mt-7"}>
										<h6 className={"font-semibold text-base sm:text-lg leading-8 text-neutral12"}>ویژگی‌ها</h6>
										<div className={"grid grid-cols-2 gap-6 sm:gap-y-10 mt-4"}>
											{data?.features?.map((feature, index) => (
												<ProductFeatureBox key={index} {...feature} />
											))}
										</div>
										<div className={"mx-auto w-max mt-6 sm:mt-10"}>
											<CustomButton title={"مشاهده همه ویژگی‌ها"} onClick={() => true} size={40} isOutline isSquared />
										</div>
									</div>
								</div>
								<div className={"lg:hidden xl:block max-lg:mt-10 max-lg:w-full flex-grow sm:border border-neutral7 rounded-2xl sm:py-8 sm:px-6"}>
									<span className={"font-medium text-neutral12"}>فروشنده</span>
									<div className={"border-b border-b-neutral7 mt-3"}>
										<div className={"flex items-center gap-x-2"}>
											<img src={shopIcon} className={"w-6 h-6"} />
											<span>{data?.seller_name}</span>
										</div>
										<span className={"text-sm text-neutral12 my-6 mr-4 block"}>{EnToFaNum(data?.seller_rating)}</span>
									</div>
									<div className={"flex justify-between items-center my-6"}>
										<span className={"text-sm sm:text-base leading-7 text-neutral12"}>قیمت</span>
										<span className={"text-lg sm:text-xl leading-9 text-black"}>{EnToFaNum(data?.price, true)} تومان</span>
									</div>
									<div className={"w-full *:w-full"}>
										{isProductInMyCart?.inCart ? (
											<div className="flex flex-col gap-y-3">
												<CustomButton title="حذف از سبد" size={48} isOutline isSquared loading={cartLoading} disabled={cartLoading} onClick={deleteFromCartHandler} />
												<div className="flex gap-x-4 *:flex-grow">
													<CustomIconButton icon={addIcon} size={48} isFilled isSquared onClick={() => updateQuantityHandler("add")} loading={cartLoading} disabled={cartLoading} />
													<span className="text-base md:text-lg text-center my-auto">{EnToFaNum(isProductInMyCart?.cartItem?.quantity)} عدد</span>
													<CustomIconButton icon={minusIcon} size={48} isFilled isSquared onClick={() => updateQuantityHandler("minus")} loading={cartLoading} disabled={cartLoading} />
												</div>
											</div>
										) : (
											<CustomButton title={"افزودن به سبد خرید"} onClick={addToCartHandler} size={48} isFilled isSquared loading={cartLoading} disabled={cartLoading} />
										)}
									</div>
								</div>
							</div>
						</div>
						{/*similar plants section*/}
						<div className={"max-w-full mt-14 sm:mt-[72px]"}>
							<ProductSectionTitle title={"گیاه‌های مشابه"} />
							<div className={"mt-8"}>
								<SwipingSlider items={similarProducts?.products || []} slidesPerView={5} spaceBetween={24} />
							</div>
						</div>
						{/*comments section*/}
						<div className={"max-w-full mt-14 sm:mt-[72px]"}>
							<ProductSectionTitle title={"دیدگاه‌ها و امتیاز"} />
							<form onSubmit={handleSubmit(submitCommentHandler)}>
								<textarea className={"w-full bg-neutral2 border border-neutral6 rounded outline-0 resize-y py-4 px-3 mt-10"} rows={8} placeholder={"نظر خود را وارد کنید..."} {...register("comment", { required: "وارد کردن متنی به عنوان نظر الزامی است" })}></textarea>
								{(errors.comment ? [errors.comment] : []).map((error, index) => (
									<div key={index} className={"cursor-default"}>
										<span className={"text-error text-xs"}>{error.message}</span>
									</div>
								))}
								<div className={"flex justify-between items-start mt-2"}>
									<div>
										<div className={"group flex items-center gap-x-1 w-max bg-neutral2 border border-neutral6 rounded py-1 px-2"}>
											<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={"fill-neutral9 "}>
												<path d="M19.6486 9.29464L14.8086 8.87464L12.9186 4.42464C12.5786 3.61464 11.4186 3.61464 11.0786 4.42464L9.18861 8.88464L4.35861 9.29464C3.47861 9.36464 3.11861 10.4646 3.78861 11.0446L7.45861 14.2246L6.35861 18.9446C6.15861 19.8046 7.08861 20.4846 7.84861 20.0246L11.9986 17.5246L16.1486 20.0346C16.9086 20.4946 17.8386 19.8146 17.6386 18.9546L16.5386 14.2246L20.2086 11.0446C20.8786 10.4646 20.5286 9.36464 19.6486 9.29464ZM11.9986 15.6546L8.23861 17.9246L9.23861 13.6446L5.91861 10.7646L10.2986 10.3846L11.9986 6.35464L13.7086 10.3946L18.0886 10.7746L14.7686 13.6546L15.7686 17.9346L11.9986 15.6546Z" />
											</svg>
											<input type={"number"} className={"w-6 text-center bg-transparent h-full outline-0 border-0 hide-arrows"} {...register("rate", { required: "باید امتیاز این محصول را وارد کنید", min: { value: 0, message: "امتیاز نمیتواند کمتر از ۰ باشد" }, max: { value: 5, message: "امتیاز نمیتواند بیشتر از ۵ باشد" }, valueAsNumber: true, value: 5 })} />
										</div>
										{(errors.rate ? [errors.rate] : []).map((error, index) => (
											<div key={index} className={"cursor-default"}>
												<span className={"text-error text-xs"}>{error.message}</span>
											</div>
										))}
									</div>
									<div className={"w-36 *:w-full"}>
										<CustomButton type={"submit"} title={"ثبت نظر"} onClick={() => true} size={40} isFilled isSquared />
									</div>
								</div>
							</form>
							<div className={"mt-10 divide-y divide-neutral3"}>{comments?.comments?.length ? comments?.comments?.map((comment) => <CommentItem key={comment.id} comment={comment.content} rate={comment.rating} user={comment.user} date={comment.updated_at} firstName={comment.first_name} lastName={comment.last_name} profile={comment.profile_image_url} />) : <h6 className="text-center text-gray-600">کامنتی یافت نشد... اولین نفر باش که کامنت میذاری!</h6>}</div>
							{comments?.pagination?.total > comments?.pagination?.limit ? (
								<div className={"mx-auto mt-6 w-40 *:w-full"}>
									<CustomButton title={"مشاهده بیشتر"} onClick={() => true} size={showMoreCommentsButtonSize} isOutline isSquared />
								</div>
							) : (
								""
							)}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Product;
