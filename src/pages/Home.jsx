import Header from "../components/Header.jsx";
import CustomButton from "../components/CustomButton.jsx";
import arrowLeftPrimary from "../assets/svg/arrowLeft-primary.svg";
import landingBg from "../assets/svg/landingBg.svg";
import landingBgSm from "../assets/svg/landingBgSm.svg";
import cardPrimary from "../assets/svg/card-primary.svg";
import checkBoxPrimary from "../assets/svg/checkbox-primary.svg";
import truckPrimary from "../assets/svg/truck-primary.svg";
import bannerBg1 from "../assets/svg/bannerBg1.svg";
import bannerBg2 from "../assets/svg/bannerBg2.svg";
import CountUp from "react-countup";
import FeatureOption from "../components/FeatureOption.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import SwipingSlider from "../components/SwipingSlider.jsx";
import firstBgImage from "../assets/images/firstBgImage.png";
import secondBgImage from "../assets/images/secondBgImage.png";
import thirdBgImage from "../assets/images/thirdBgImage.png";
import fourthBgImage from "../assets/images/fourthBgImage.png";
import LinkingBannersGroup from "../components/LinkingBannersGroup.jsx";
import flower1Primary from "../assets/svg/flower1-primary.svg";
import flower2Primary from "../assets/svg/flower2-primary.svg";
import flower3Primary from "../assets/svg/flower3-primary.svg";
import flower4Primary from "../assets/svg/flower4-primary.svg";
import flower5Primary from "../assets/svg/flower5-primary.svg";
import flower6Primary from "../assets/svg/flower6-primary.svg";
import flower7Primary from "../assets/svg/flower7-primary.svg";
import flower8Primary from "../assets/svg/flower8-primary.svg";
import ServiceItem from "../components/ServiceItem.jsx";
import ninthFlower from "../assets/temp/ninthFlower.png";
import tenthFlower from "../assets/temp/tenthFlower.png";
import eleventhFlower from "../assets/temp/eleventhFlower.png";
import twelfthFlower from "../assets/temp/twelfthFlower.png";
import Footer from "../components/Footer.jsx";
import useResponsiveSize from "../hooks/useResponsiveSize.js";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext.jsx";
import { PuffLoader } from "react-spinners";
import useApi from "../hooks/useApi.js";
import { ProductService } from "../services/product.service.js";
import { useEffect } from "react";

function Home() {
	const heroSectionButtonsSize = useResponsiveSize([
		{ breakpoint: 0, value: 40 },
		{ breakpoint: 470, value: 48 },
		{ breakpoint: 1024, value: 56 },
	]);
	const navigate = useNavigate();
	const { isLoading } = useUserAuth();
	const { data: apartmentFlowers, loading: apartmentFlowersLoading, error: apartmentFlowersError, execute: apartmentFlowersExecute } = useApi(() => ProductService.getByCategory("apartment-flowers"));
	const { data: decorativeFlowers, loading: decorativeFlowersLoading, error: decorativeFlowersError, execute: decorativeFlowersExecute } = useApi(() => ProductService.getByCategory("decorative-flowers"));
	const { data: giftFlowers, loading: giftFlowersLoading, error: giftFlowersError, execute: giftFlowersExecute } = useApi(() => ProductService.getByCategory("gift-flowers"));

	useEffect(() => {
		Promise.all([apartmentFlowersExecute(), decorativeFlowersExecute(), giftFlowersExecute()]);
	}, []);

	if (isLoading || apartmentFlowersLoading || decorativeFlowersLoading || giftFlowersLoading) {
		return (
			<div className="h-screen flex items-center justify-center">
				<PuffLoader size={60} color="#417F56" />
			</div>
		);
	}

	return (
		<>
			<div className={"container"}>
				<Header />
				{/*hero section*/}
				<section className={"mt-4 lg:mt-[77px] flex flex-col lg:flex-row items-center justify-between gap-x-6 xl:gap-x-28"}>
					<div className={"max-lg:order-2"}>
						<h2 className={"font-bold text-black text-xl xs:text-2xl sm:text-3xl lg:text-[40px] max-sm:mt-10 max-lg:mt-4 max-lg:text-center"}>
							خرید راحت گیاه، با
							<span className={"text-primary"}> گیاه لند!</span>
						</h2>
						<p className={"text-sm xs:text-base sm:text-lg lg:text-xl leading-7 md:leading-9 mt-3 md:mt-8 max-lg:text-center"}>با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه استفاده کن.علاوه بر اینها میتونی به صورت رایگان از گیاه پزشک سایت مشاوره بگیری.</p>
						<div className={"flex items-center mt-6 md:mt-8 *:w-1/2 gap-4 xl:gap-6"}>
							<CustomButton title={"گیاهان محبوب"} onClick={() => navigate("/search?sort=popular")} size={heroSectionButtonsSize} isFilled={true} isSquared={true} />
							<CustomButton title={"مشاوره با گیاه پزشک"} onClick={() => navigate("/dashboard/consultation-with-plant-pathologist")} size={heroSectionButtonsSize} isOutline={true} isSquared={true} isDashed={true} icon={arrowLeftPrimary} leftIcon={true} />
						</div>
						<div className={"flex flex-wrap justify-center sm:justify-between items-start mt-12 gap-6 max-w-[80%] mx-auto"}>
							<div className={"flex flex-col justify-center items-center text-xl md:text-2xl xl:text-[32px] text-shade3"}>
								<CountUp start={0} end={934} duration={4} formattingFn={(num) => num.toLocaleString("fa-IR") + "+"} />
								<span className={"text-base sm:text-lg md:text-xl"}>گیاه خانگی</span>
							</div>
							<div className={"flex flex-col justify-center items-center text-xl md:text-2xl xl:text-[32px] text-shade3"}>
								<CountUp start={0} end={234} duration={4} formattingFn={(num) => num.toLocaleString("fa-IR") + "+"} />
								<span className={"text-base sm:text-lg md:text-xl"}>گیاه تزئینی</span>
							</div>
							<div className={"flex flex-col justify-center items-center text-xl md:text-2xl xl:text-[32px] text-shade3"}>
								<CountUp start={0} end={128} duration={4} formattingFn={(num) => num.toLocaleString("fa-IR") + "+"} />
								<span className={"text-base sm:text-lg md:text-xl"}>گیاه کادویی</span>
							</div>
						</div>
					</div>
					<div className={"lg:min-w-[50%]"}>
						<img src={landingBg} alt={"خرید راحت گیاه با گیاه لند!"} className={"hidden md:block w-full h-full"} />
						<img src={landingBgSm} alt={"خرید راحت گیاه با گیاه لند!"} className={"md:hidden w-full h-full"} />
					</div>
				</section>
				{/*features section*/}
				<section className={"mt-10 sm:mt-20 flex max-md:flex-col justify-center items-center lg:justify-between lg:items-start gap-6 md:gap-20"}>
					<FeatureOption icon={cardPrimary} title={"پرداخت آسان و آنی"} description={"برای ایجاد اطمینان خاطر مشتریان،علاوه بر پرداخت آنلاین امکان پرداخت درب منزل وجود دارد"} />
					<FeatureOption icon={checkBoxPrimary} title={"ضمانت محصول"} description={"به مدت دو هفته پس از دریافت محصول در صورت وجود مشکل میتوانید مرجوع کنید"} />
					<FeatureOption icon={truckPrimary} title={"تحویل درب منزل"} description={"با ایجاد آدرس منزل خود در پروفایل کاربری،محصول خود را درب منزل تحویل بگیرید"} />
				</section>
				{/*banners section*/}
				<section className={"mt-10 sm:mt-20 flex flex-col lg:flex-row items-center gap-6 *:w-full *:h-[150px] xs:*:h-[180px] sm:*:h-60"}>
					<div className={"grow rounded-2xl overflow-hidden"}>
						<img src={bannerBg1} alt={"بنر اول"} className={"w-full h-full object-cover"} />
					</div>
					<div className={"grow rounded-2xl overflow-hidden"}>
						<img src={bannerBg2} alt={"بنر دوم"} className={"w-full h-full object-cover"} />
					</div>
				</section>
				{/*apartment flowers section*/}
				<section className={"mt-14 sm:mt-16"}>
					<SectionTitle title={"گیاهان آپارتمانی"} />
					<div className={"mt-6"}>
						<SwipingSlider items={apartmentFlowers?.products || [] } slidesPerView={4.5} spaceBetween={24} />
					</div>
				</section>
				{/*linking banners section*/}
				<section className={"mt-11 sm:mt-16"}>
					<LinkingBannersGroup
						items={[
							{ image: firstBgImage, title: "گیاه بونسای", href: "/product/9ae7b2a8-a0a9-47e0-8527-17b1a7c0a85c" },
							{ image: secondBgImage, title: "گیاه سانسوریا", href: "/product/485aedb9-a736-4a9d-86b4-11bbe9436a9d" },
							{ image: thirdBgImage, title: "گیاه پتوس", href: "/product/b1c2fb05-0afb-41b5-9184-fad0d2453e54" },
							{ image: fourthBgImage, title: "گیاه پاچیرا", href: "/product/6b546106-d55e-496c-887b-fddd81ef4e3e" },
						]}
					/>
				</section>
				{/*plant medicine services*/}
				<section className={"mt-10 sm:mt-16"}>
					<SectionTitle title={"خدمات گیاه‌پزشکی"} />
					<div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-y-12 mt-8"}>
						<ServiceItem icon={flower1Primary} title={"چک کردن اسید خاک"} description={"با استفاده از ابزار مخصوص اسید خاک گیاه چک میشود"} />
						<ServiceItem icon={flower2Primary} title={"برسی مواد معدنی خاک"} description={"یکی از موارد مهم خاک، مقدار مواد معدنی آن است که با دقت برسی میشود"} />
						<ServiceItem icon={flower3Primary} title={"مشاهده بهترین دما"} description={"از موارد مهم برای گیاه مقدار دمای محیط است که باید اندازه گیری شود"} />
						<ServiceItem icon={flower4Primary} title={"برسی آسیب های احتمالی"} description={"تمامی آسیب های احتمالی برسی میگردد تا از وقوع مشکلات آینده جلوگیری شود"} />
						<ServiceItem icon={flower5Primary} title={"از بین بردن عناصر آلوده خاک"} description={"با استفاده از روش های نوین،عناصر آلوده از خاک گیاهان شما جمع آوری میشوند"} />
						<ServiceItem icon={flower6Primary} title={"برسی ظاهر"} description={"ظاهر گیاه بیانگر مسائل مهمی هست.میتوان با مشاهده ظاهر گیاه آفات و ... را متوجه شد"} />
						<ServiceItem icon={flower7Primary} title={"اندازه گیری EC"} description={"این اندازه گیری نشانی از مقدار کل مواد مغذی موجود برای گیاهان می‌دهد"} />
						<ServiceItem icon={flower8Primary} title={"ارائه مکمل"} description={"برای رشد بهتر گیاهان و رفع آفات از مکمل ها میتوان استفاده کرد"} />
					</div>
				</section>
				{/*decorative plants*/}
				<section className={"mt-10 sm:mt-16 flex flex-col gap-y-6"}>
					<SectionTitle title={"گیاهان تزئینی"} />
					<SwipingSlider items={decorativeFlowers?.products || []} spaceBetween={24} />
				</section>
				{/*linking banners section*/}
				<section className={"mt-11 sm:mt-16"}>
					<LinkingBannersGroup
						items={[
							{ image: ninthFlower, title: "گیاه رزماری", href: "/product/88d6fbac-1321-4591-af82-932424f725b9" },
							{ image: tenthFlower, title: "گیاه آدنیوم", href: "/product/c54e7218-92e5-493c-803d-08c555a76a03" },
							{ image: eleventhFlower, title: "گیاه آشیانتوس", href: "/product/0d6c4833-b877-4656-8cd3-7a4032f8b478" },
							{ image: twelfthFlower, title: "گیاه آناناسی", href: "/product/41eb3373-0d84-42d5-ab15-ee0b44d4e686" },
						]}
					/>
				</section>
				{/*cardamom flowers section*/}
				<section className={"mt-10 sm:mt-16 flex flex-col gap-y-6"}>
					<SectionTitle title={"گیاهان کادوئی"} />
					<SwipingSlider items={giftFlowers?.products || []} spaceBetween={24} />
				</section>
			</div>
			<Footer />
		</>
	);
}

export default Home;
