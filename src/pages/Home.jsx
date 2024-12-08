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
import fifthFlower from "../assets/temp/fifthFlower.png";
import sixthFlower from "../assets/temp/sixthFlower.png";
import seventhFlower from "../assets/temp/seventhFlower.png";
import eighthFlower from "../assets/temp/eighthFlower.png";
import ninthFlower from "../assets/temp/ninthFlower.png";
import tenthFlower from "../assets/temp/tenthFlower.png";
import eleventhFlower from "../assets/temp/eleventhFlower.png";
import twelfthFlower from "../assets/temp/twelfthFlower.png";
import thirteenthFlower from "../assets/temp/thirteenthFlower.png";
import fourteenthFlower from "../assets/temp/fourteenthFlower.png";
import fifteenthFlower from "../assets/temp/fifteenthFlower.png";
import sixteenthFlower from "../assets/temp/sixteenthFlower.png";
import Footer from "../components/Footer.jsx";

function Home() {
    return (
        <>
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
                            با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه استفاده کن.علاوه بر اینها
                            میتونی
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
                        <img src={landingBgSm} alt={'خرید راحت گیاه با گیاه لند!'}
                             className={'md:hidden w-full h-full'}/>
                    </div>
                </section>
                {/*features section*/}
                <section
                    className={'mt-10 sm:mt-20 flex max-md:flex-col justify-center items-center lg:justify-between lg:items-start gap-6 md:gap-20'}>
                    <FeatureOption icon={cardPrimary} title={'پرداخت آسان و آنی'}
                                   description={'برای ایجاد اطمینان خاطر مشتریان،علاوه بر پرداخت آنلاین امکان پرداخت درب منزل وجود دارد'}/>
                    <FeatureOption icon={checkBoxPrimary} title={'ضمانت محصول'}
                                   description={'به مدت دو هفته پس از دریافت محصول در صورت وجود مشکل میتوانید مرجوع کنید'}/>
                    <FeatureOption icon={truckPrimary} title={'تحویل درب منزل'}
                                   description={'با ایجاد آدرس منزل خود در پروفایل کاربری،محصول خود را درب منزل تحویل بگیرید'}/>
                </section>
                {/*banners section*/}
                <section
                    className={'mt-10 sm:mt-20 flex flex-col lg:flex-row items-center gap-6 *:w-full *:h-[150px] xs:*:h-[180px] sm:*:h-60'}>
                    <div className={'grow rounded-2xl overflow-hidden'}>
                        <img src={bannerBg1} alt={'بنر اول'} className={'w-full h-full object-cover'}/>
                    </div>
                    <div className={'grow rounded-2xl overflow-hidden'}>
                        <img src={bannerBg2} alt={'بنر دوم'} className={'w-full h-full object-cover'}/>
                    </div>
                </section>
                {/*apartment flowers section*/}
                <section className={'mt-14 sm:mt-16'}>
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
                        ]} slidesPerView={4.5} spaceBetween={24}/>
                    </div>
                </section>
                {/*linking banners section*/}
                <section className={'mt-11 sm:mt-16'}>
                    <LinkingBannersGroup items={[
                        {image: firstBgImage, title: 'گیاه بونسای', href: '/'},
                        {image: secondBgImage, title: 'گیاه سانسوریا', href: '/'},
                        {image: thirdBgImage, title: 'گیاه پتوس', href: '/'},
                        {image: fourthBgImage, title: 'گیاه پاچیرا', href: '/'},
                    ]}/>
                </section>
                {/*plant medicine services*/}
                <section className={'mt-10 sm:mt-16'}>
                    <SectionTitle title={'خدمات گیاه‌پزشکی'}/>
                    <div
                        className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-y-12 mt-8'}>
                        <ServiceItem icon={flower1Primary} title={'چک کردن اسید خاک'}
                                     description={'با استفاده از ابزار مخصوص اسید خاک گیاه چک میشود'}/>
                        <ServiceItem icon={flower2Primary} title={'برسی مواد معدنی خاک'}
                                     description={'یکی از موارد مهم خاک، مقدار مواد معدنی آن است که با دقت برسی میشود'}/>
                        <ServiceItem icon={flower3Primary} title={'مشاهده بهترین دما'}
                                     description={'از موارد مهم برای گیاه مقدار دمای محیط است که باید اندازه گیری شود'}/>
                        <ServiceItem icon={flower4Primary} title={'برسی آسیب های احتمالی'}
                                     description={'تمامی آسیب های احتمالی برسی میگردد تا از وقوع مشکلات آینده جلوگیری شود'}/>
                        <ServiceItem icon={flower5Primary} title={'از بین بردن عناصر آلوده خاک'}
                                     description={'با استفاده از روش های نوین،عناصر آلوده از خاک گیاهان شما جمع آوری میشوند'}/>
                        <ServiceItem icon={flower6Primary} title={'برسی ظاهر'}
                                     description={'ظاهر گیاه بیانگر مسائل مهمی هست.میتوان با مشاهده ظاهر گیاه آفات و ... را متوجه شد'}/>
                        <ServiceItem icon={flower7Primary} title={'اندازه گیری EC'}
                                     description={'این اندازه گیری نشانی از مقدار کل مواد مغذی موجود برای گیاهان می‌دهد'}/>
                        <ServiceItem icon={flower8Primary} title={'ارائه مکمل'}
                                     description={'برای رشد بهتر گیاهان و رفع آفات از مکمل ها میتوان استفاده کرد'}/>
                    </div>
                </section>
                {/*decorative plants*/}
                <section className={'mt-10 sm:mt-16 flex flex-col gap-y-6'}>
                    <SectionTitle title={'گیاهان تزئینی'}/>
                    <SwipingSlider items={[
                        {identifier: '1', image: fifthFlower, title: 'گیاه طبیعی کراسولا', price: 90000},
                        {identifier: '2', image: sixthFlower, title: 'گیاه طبیعی یشم', price: 1500000},
                        {identifier: '3', image: seventhFlower, title: 'گیاه طبیعی بونسای پاچیرا', price: 880000},
                        {identifier: '4', image: eighthFlower, title: 'گیاه طبیعی کراسولا خرفه ای', price: 169000},
                        {identifier: '5', image: fifthFlower, title: 'گیاه طبیعی کراسولا', price: 90000},
                        {identifier: '6', image: sixthFlower, title: 'گیاه طبیعی یشم', price: 1500000},
                        {identifier: '7', image: seventhFlower, title: 'گیاه طبیعی بونسای پاچیرا', price: 880000},
                        {identifier: '8', image: eighthFlower, title: 'گیاه طبیعی کراسولا خرفه ای', price: 169000},
                    ]} spaceBetween={24}/>
                </section>
                {/*linking banners section*/}
                <section className={'mt-11 sm:mt-16'}>
                    <LinkingBannersGroup items={[
                        {image: ninthFlower, title: 'گیاه رزماری', href: '/'},
                        {image: tenthFlower, title: 'گیاه آدنیوم', href: '/'},
                        {image: eleventhFlower, title: 'گیاه آشیانتوس', href: '/'},
                        {image: twelfthFlower, title: 'گیاه آناناسی', href: '/'},
                    ]}/>
                </section>
                {/*cardamom flowers section*/}
                <section className={'mt-10 sm:mt-16 flex flex-col gap-y-6'}>
                    <SectionTitle title={'گیاهان کادوئی'}/>
                    <SwipingSlider items={[
                        {identifier: '1', image: thirteenthFlower, title: 'گیاه طبیعی بنت قنسول گلیتال', price: 176000},
                        {identifier: '2', image: fourteenthFlower, title: 'گیاه طبیعی آنتوریوم', price: 459000},
                        {identifier: '3', image: fifteenthFlower, title: 'گیاه طبیعی بونسای پاچیرا', price: 880000},
                        {identifier: '4', image: sixteenthFlower, title: 'گیاه طبیعی آنتوریوم', price: 498000},
                        {identifier: '5', image: thirteenthFlower, title: 'گیاه طبیعی بنت قنسول گلیتال', price: 176000},
                        {identifier: '6', image: fourteenthFlower, title: 'گیاه طبیعی آنتوریوم', price: 459000},
                        {identifier: '7', image: fifteenthFlower, title: 'گیاه طبیعی بونسای پاچیرا', price: 880000},
                        {identifier: '8', image: sixteenthFlower, title: 'گیاه طبیعی آنتوریوم', price: 498000},
                    ]} spaceBetween={24}/>
                </section>
            </div>
            <Footer/>
        </>
    );
}

export default Home;