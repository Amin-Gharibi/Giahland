import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useState } from "react";
import emptyCart from "../assets/images/emptyCart.png";
import CustomButton from "../components/CustomButton.jsx";
import arrowLeftPrimary from "../assets/svg/arrowLeft-primary.svg";
import { useNavigate } from "react-router-dom";
import useResponsiveSize from "../hooks/useResponsiveSize.js";

function Cart() {
    const navigate = useNavigate()
    const returnButtonSize = useResponsiveSize([
        {breakpoint: 0, value: 40},
        {breakpoint: 640, value: 48},
        {breakpoint: 1024, value: 56},
    ])
    const [userCart, setUserCart] = useState([])

    const onReturnClickHandler = () => {
        navigate("/")
    }

    return (
        <>
            <div className={`container ${!userCart.length ? 'h-screen flex flex-col' : ''}`}>
                <Header/>
                <div className={'flex flex-grow justify-center items-center'}>
                    {!userCart.length && (
                        <div className={'flex flex-col items-center gap-y-10'}>
                            <img src={emptyCart} className={'w-40 h-40 sm:w-64 sm:h-64 object-contain'}/>
                            <div className="flex flex-col items-center max-w-96">
                                <h2 className={'font-semibold text-base sm:text-lg lg:text-xl leading-7 text-black text-center'}>سبد خرید شما خالی می‌باشد!</h2>
                                <p className={'text-sm sm:text-lg lg:text-xl sm:leading-9 text-center text-black mt-2 mb-6'}>
                                می توانید برای مشاهده بیشتر محصولات به صفحه اصلی بروید
                                </p>
                                <CustomButton size={returnButtonSize} title="بازگشت به صفحه اصلی" onClick={onReturnClickHandler} icon={arrowLeftPrimary} leftIcon isOutline isFilled isSquared/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {userCart.length && <Footer/> || ''}
        </>
    );
}

export default Cart;