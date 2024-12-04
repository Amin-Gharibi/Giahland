import Header from "../components/Header.jsx";
import CustomButton from "../components/CustomButton.jsx";
import arrowLeftPrimary from "../assets/svg/arrowLeft-primary.svg"
import landingBg from "../assets/svg/landingBg.svg"
import landingBgSm from "../assets/svg/landingBgSm.svg"
import cardPrimary from "../assets/svg/card-primary.svg"
import checkBoxPrimary from "../assets/svg/checkbox-primary.svg"
import truckPrimary from "../assets/svg/truck-primary.svg"
import bannerBg1 from "../assets/svg/bannerBg1.svg"
import bannerBg2 from "../assets/svg/bannerBg2.svg"
import CountUp from "react-countup";
import FeatureOption from "../components/FeatureOption.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import SwipingSlider from "../components/SwipingSlider.jsx";
import firstFlower from "../assets/temp/firstFlower.png";
import secondFlower from "../assets/temp/secondFlower.png";
import thirdFlower from "../assets/temp/thirdFlower.png";
import fourthFlower from "../assets/temp/firstFlower.png";

function Home() {
    return (
        <div className={'container'}>
            <Header/>
            {/*hero section*/}
            <section
                className={'mt-4 lg:mt-[77px] flex flex-col lg:flex-row items-center justify-between gap-x-6 xl:gap-x-28'}>
                <div className={'max-lg:order-2'}>
                    <h2 className={'font-bold text-black text-xl xs:text-2xl sm:text-3xl lg:text-[40px] max-sm:mt-10 max-lg:mt-4 max-lg:text-center'}>
                        خرید راحت گیاه، با
                        <span className={'text-primary'}> گیاه لند!</span>
                    </h2>
                    <p className={'text-sm xs:text-base sm:text-lg lg:text-xl leading-7 md:leading-9 mt-3 md:mt-8 max-lg:text-center'}>
                        با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه استفاده کن.علاوه بر اینها میتونی
                        به صورت رایگان از گیاه پزشک سایت مشاوره بگیری.
                    </p>
                    <div className={'flex items-center mt-6 md:mt-8 *:w-1/2 gap-4 xl:gap-6'}>
                        <CustomButton title={'گیاهان تخفیف دار'} onClick={() => true} size={56} isFilled={true}
                                      isSquared={true}/>
                        <CustomButton title={'مشاوره با گیاه پزشک'} onClick={() => true} size={56} isOutline={true}
                                      isSquared={true} isDashed={true} icon={arrowLeftPrimary} leftIcon={true}/>
                    </div>
                    <div
                        className={'flex flex-wrap justify-center sm:justify-between items-start mt-12 gap-6 max-w-[80%] mx-auto'}>
                        <div
                            className={'flex flex-col justify-center items-center text-xl md:text-2xl xl:text-[32px] text-shade3'}>
                            <CountUp
                                start={0}
                                end={934}
                                duration={4}
                                formattingFn={num => num.toLocaleString('fa-IR') + '+'}
                            />
                            <span className={'text-base sm:text-lg md:text-xl'}>گیاه خانگی</span>
                        </div>
                        <div
                            className={'flex flex-col justify-center items-center text-xl md:text-2xl xl:text-[32px] text-shade3'}>
                            <CountUp
                                start={0}
                                end={234}
                                duration={4}
                                formattingFn={num => num.toLocaleString('fa-IR') + '+'}
                            />
                            <span className={'text-base sm:text-lg md:text-xl'}>گیاه تزئینی</span>
                        </div>
                        <div
                            className={'flex flex-col justify-center items-center text-xl md:text-2xl xl:text-[32px] text-shade3'}>
                            <CountUp
                                start={0}
                                end={128}
                                duration={4}
                                formattingFn={num => num.toLocaleString('fa-IR') + '+'}
                            />
                            <span className={'text-base sm:text-lg md:text-xl'}>گیاه کادویی</span>
                        </div>
                    </div>
                </div>
                <div className={'lg:min-w-[50%]'}>
                    <img src={landingBg} alt={'خرید راحت گیاه با گیاه لند!'}
                         className={'hidden md:block w-full h-full'}/>
                    <img src={landingBgSm} alt={'خرید راحت گیاه با گیاه لند!'} className={'md:hidden w-full h-full'}/>
                </div>
            </section>
            {/*features section*/}
            <section
                className={'mt-20 flex max-md:flex-col justify-center items-center lg:justify-between lg:items-start gap-6 md:gap-20'}>
                <FeatureOption icon={cardPrimary} title={'پرداخت آسان و آنی'}
                               description={'برای ایجاد اطمینان خاطر مشتریان،علاوه بر پرداخت آنلاین امکان پرداخت درب منزل وجود دارد'}/>
                <FeatureOption icon={checkBoxPrimary} title={'ضمانت محصول'}
                               description={'به مدت دو هفته پس از دریافت محصول در صورت وجود مشکل میتوانید مرجوع کنید'}/>
                <FeatureOption icon={truckPrimary} title={'تحویل درب منزل'}
                               description={'با ایجاد آدرس منزل خود در پروفایل کاربری،محصول خود را درب منزل تحویل بگیرید'}/>
            </section>
            {/*banners section*/}
            <section
                className={'mt-20 flex flex-col lg:flex-row items-center gap-6 *:w-full *:h-[150px] xs:*:h-[180px] sm:*:h-60'}>
                <div className={'grow rounded-2xl overflow-hidden'}>
                    <img src={bannerBg1} alt={'بنر اول'} className={'w-full h-full object-cover'}/>
                </div>
                <div className={'grow rounded-2xl overflow-hidden'}>
                    <img src={bannerBg2} alt={'بنر دوم'} className={'w-full h-full object-cover'}/>
                </div>
            </section>
            {/*apartment flowers section*/}
            <section className={'mt-16'}>
                <SectionTitle title={'گیاهان آپارتمانی'}/>
                <div className={'mt-6'}>
                    <SwipingSlider items={[
                        {image: firstFlower, title: 'گیاه طبیعی بابا آدم', price: 857000, identifier: '1'},
                        {image: secondFlower, title: 'گیاه طبیعی یوکا', price: 560000, identifier: '2'},
                        {image: thirdFlower, title: 'گیاه طبیعی سانسوریا سبز', price: 250000, identifier: '3'},
                        {image: fourthFlower, title: 'گیاه طبیعی ساکولنت', price: 57000, identifier: '4'},
                        {image: firstFlower, title: 'گیاه طبیعی بابا آدم', price: 857000, identifier: '5'},
                        {image: secondFlower, title: 'گیاه طبیعی یوکا', price: 560000, identifier: '6'},
                        {image: thirdFlower, title: 'گیاه طبیعی سانسوریا سبز', price: 250000, identifier: '7'},
                        {image: fourthFlower, title: 'گیاه طبیعی ساکولنت', price: 57000, identifier: '8'},
                    ]} slidesPerView={4} spaceBetween={24}/>
                </div>
            </section>
        </div>
    );
}

export default Home;