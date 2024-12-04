import linkedinIconGray from "../assets/svg/linkedinIcon-gray.svg";
import telegramIconGray from "../assets/svg/telegramIcon-gray.svg";
import instagramIconGray from "../assets/svg/instagramIcon-gray.svg";
import eNamadIcon from "../assets/svg/e-namad.svg";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className={'bg-neutral2 mt-32'}>
            <div className={'container flex flex-col lg:flex-row justify-between items-start gap-x-32 pt-6 pb-10'}>
                <div className={'max-lg:order-2 max-lg:mt-16'}>
                    <h1 className={'font-bold text-base sm:text-xl md:text-2xl leading-8 text-primary'}>گیاه لند</h1>
                    <p className={'text-sm sm:text-base md:text-base leading-7 text-neutral10 mt-3 md:mt-6'}>
                        گیاه لند سعی بر این دارد با ارائه خدمات نوین در حوزه فروش گیاهان باعث راحتی
                        شما در خرید انواع گیاه شود.تنوع گیاهان و همچنین ایجاد بستری مناسب برای مشاوره با گیاه پزشک
                        از دیگر مزیت های گیاه لند میباشد.
                    </p>
                    <div className={'mt-4 md:mt-10 flex justify-between items-center'}>
                        <div>
                            <span className={'inline-block text-neutral10 text-sm sm:text-base md:text-xl'}>تلفن پشتیبانی: ۰۲۱۲۴۴۴</span>
                            <div className={'flex items-center gap-x-6 mt-4'}>
                                <a href="https://www.linkedin.com/in/mohamadamin-gharibi" target={'_blank'}>
                                    <img src={linkedinIconGray} alt={'LinkedIn'} className={'w-5 h-5 xs:w-6 xs:h-6'}/>
                                </a>
                                <a href="https://t.me/theAminGharibi" target={'_blank'}>
                                    <img src={telegramIconGray} alt={'Telegram'} className={'w-5 h-5 xs:w-6 xs:h-6'}/>
                                </a>
                                <a href="https://instagram.com/AmiinGharibi" target={'_blank'}>
                                    <img src={instagramIconGray} alt={'Instagram'} className={'w-5 h-5 xs:w-6 xs:h-6'}/>
                                </a>
                            </div>
                        </div>
                        <img src={eNamadIcon} alt={'E-Namad'} className={'w-max h-max'}/>
                    </div>
                </div>
                <div className={'max-lg:order-1 w-full grid grid-cols-3 gap-x-6 min-w-[50%]'}>
                    <div className={'w-full'}>
                        <h6 className={'font-semibold text-sm sm:text-base md:text-xl leading-7 text-neutral10 border-b border-[#EDEDED] pb-2 w-full'}>آپارتمانی</h6>
                        <ul className={'space-y-2 mt-4 *:text-sm sm:*:text-base md:*:text-lg lg:*:text-xl *:leading-9 *:text-neutral10'}>
                            <li>
                                <Link to={'/'} className={'block'}>
                                    بابا آدم
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'} className={'block'}>
                                    یوکا
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'} className={'block'}>
                                    سانسوریا
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={'w-full'}>
                        <h6 className={'font-semibold text-sm sm:text-base md:text-xl leading-7 text-neutral10 border-b border-[#EDEDED] pb-2 w-full'}>تزئینی</h6>
                        <ul className={'space-y-2 mt-4 *:text-sm sm:*:text-base md:*:text-lg lg:*:text-xl *:leading-9 *:text-neutral10'}>
                            <li>
                                <Link to={'/'} className={'block'}>
                                    یشم
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'} className={'block'}>
                                    کراسولا
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'} className={'block'}>
                                    کراسولا خرفه‌ای
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={'w-full'}>
                        <h6 className={'font-semibold text-sm sm:text-base md:text-xl leading-7 text-neutral10 border-b border-[#EDEDED] pb-2 w-full'}>کادویی</h6>
                        <ul className={'space-y-2 mt-4 *:text-sm sm:*:text-base md:*:text-lg lg:*:text-xl *:leading-9 *:text-neutral10'}>
                            <li>
                                <Link to={'/'} className={'block'}>
                                    آنتوریوم
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'} className={'block'}>
                                    بونسای
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'} className={'block'}>
                                    بنت قنسول
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;