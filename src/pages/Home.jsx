import Header from "../components/Header.jsx";
import CustomButton from "../components/CustomButton.jsx";
import arrowLeftPrimary from "../assets/svg/arrowLeft-primary.svg"
import landingBg from "../assets/svg/landingBg.svg"
import landingBgSm from "../assets/svg/landingBgSm.svg"
import CountUp from "react-countup";

function Home() {
    return (
        <div className={'container'}>
            <Header/>
            {/*hero section*/}
            <section
                className={'mt-4 lg:mt-[77px] flex flex-col lg:flex-row items-center justify-between gap-x-6 xl:gap-x-28'}>
                <div className={'max-lg:order-2'}>
                    <h2 className={'font-bold text-black text-3xl lg:text-[40px] max-sm:mt-10 max-lg:mt-4 max-lg:text-center'}>
                        خرید راحت گیاه، با
                        <span className={'text-primary'}> گیاه لند!</span>
                    </h2>
                    <p className={'text-lg lg:text-xl leading-9 mt-3 md:mt-8 max-lg:text-center'}>
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
                        className={'flex flex-wrap justify-center sm:justify-between items-start mt-12 gap-6 max-lg:max-w-[80%] mx-auto'}>
                        <div
                            className={'flex flex-col justify-center items-center text-xl md:text-2xl xl:text-[32px] text-shade3'}>
                            <CountUp
                                start={0}
                                end={934}
                                duration={4}
                                formattingFn={num => num.toLocaleString('fa-IR') + '+'}
                            />
                            <span>گیاه خانگی</span>
                        </div>
                        <div
                            className={'flex flex-col justify-center items-center text-xl md:text-2xl xl:text-[32px] text-shade3'}>
                            <CountUp
                                start={0}
                                end={234}
                                duration={4}
                                formattingFn={num => num.toLocaleString('fa-IR') + '+'}
                            />
                            <span>گیاه تزئینی</span>
                        </div>
                        <div
                            className={'flex flex-col justify-center items-center text-xl md:text-2xl xl:text-[32px] text-shade3'}>
                            <CountUp
                                start={0}
                                end={128}
                                duration={4}
                                formattingFn={num => num.toLocaleString('fa-IR') + '+'}
                            />
                            <span>گیاه کادویی</span>
                        </div>
                    </div>
                </div>
                <div className={'lg:min-w-[50%]'}>
                    <img src={landingBg} alt={'خرید راحت گیاه با گیاه لند!'}
                         className={'hidden md:block w-full h-full'}/>
                    <img src={landingBgSm} alt={'خرید راحت گیاه با گیاه لند!'} className={'md:hidden w-full h-full'}/>
                </div>
            </section>
        </div>
    );
}

export default Home;