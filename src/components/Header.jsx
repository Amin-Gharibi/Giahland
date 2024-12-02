import menuIcon from '../assets/svg/menu.svg'
import searchPrimary from '../assets/svg/search-primary.svg'
import shoppingCartPrimary from '../assets/svg/shoppintCart-primary.svg'
import loginPrimary from '../assets/svg/login-primary.svg'
import login2Primary from '../assets/svg/login2-primary.svg'
import {Link, useLocation} from "react-router-dom";
import CustomIconButton from "./CustomIconButton.jsx";
import CustomButton from "./CustomButton.jsx";

function Header() {
    const location = useLocation()

    return (
        <div className={'flex justify-between items-center mt-6 pb-6 border-b border-b-neutral5'}>
            <div className={'flex justify-between items-center gap-x-3 sm:gap-x-6'}>
                <button
                    className={'w-8 h-8 md:w-10 md:h-10 p-1 flex justify-center items-center rounded-lg bg-neutral3 lg:hidden'}>
                    <img src={menuIcon} alt='menu' className={'w-5 h-5 md:w-6 md:h-6'}/>
                </button>
                <Link to={'/'} className={'cursor-pointer'}>
                    <h1 className={'font-medium text-primary sm:font-bold text-2xl'}>گیاه لند</h1>
                </Link>
                <div className={'hidden lg:flex items-center lg:gap-x-8 max-sm:hidden *:text-lg'}>
                    <Link className={location.pathname === '/' ? 'text-primary' : ''} to={'/'}>صفحه اصلی</Link>
                    <Link className={location.pathname === '/herbal-medicine' ? 'text-primary' : ''}
                          to={'/herbal-medicine'}>گیاه پزشک</Link>
                    <Link className={location.pathname === '/blogs' ? 'text-primary' : ''} to={'/blogs'}>وبلاگ</Link>
                    <Link className={location.pathname === '/contact-us' ? 'text-primary' : ''} to={'/contact-us'}>تماس
                        با ما</Link>
                    <Link className={location.pathname === '/about-us' ? 'text-primary' : ''} to={'/about-us'}>درباره
                        ما</Link>
                </div>
            </div>
            <div className={'flex items-center gap-x-2 sm:gap-x-4'}>
                <div className={'max-sm:hidden'}>
                    <CustomIconButton onClick={() => true} size={48} icon={searchPrimary} isOutline={true}
                                      isSquared={true}/>
                </div>
                <div className={'max-sm:hidden'}>
                    <CustomIconButton onClick={() => true} size={48} icon={shoppingCartPrimary} isOutline={true}
                                      isSquared={true}/>
                </div>
                <div className={'sm:hidden'}>
                    <CustomIconButton onClick={() => true} size={32} icon={shoppingCartPrimary} isOutline={true}
                                      isSquared={true}/>
                </div>
                <div className={'max-sm:hidden'}>
                    <CustomButton title={'ورود | ثبت نام'} onClick={() => true} size={48} icon={loginPrimary}
                                  leftIcon={true} isOutline={true} isSquared={true}/>
                </div>
                <div className={'sm:hidden'}>
                    <CustomIconButton onClick={() => true} size={32} icon={login2Primary} isOutline={true}
                                      isSquared={true}/>
                </div>
            </div>
        </div>
    );
}

export default Header;