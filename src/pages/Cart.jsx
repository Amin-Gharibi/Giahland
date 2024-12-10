import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useMemo, useState } from "react";
import emptyCart from "../assets/images/emptyCart.png";
import CustomButton from "../components/CustomButton.jsx";
import arrowLeftPrimary from "../assets/svg/arrowLeft-primary.svg";
import { useNavigate } from "react-router-dom";
import useResponsiveSize from "../hooks/useResponsiveSize.js";
import CartItem from "../components/CartItem.jsx";
import itemImage from "../assets/temp/eighthFlower.png";
import { useForm } from "react-hook-form";
import EnToFaNum from "../utils/EnToFaNum.js";

function Cart() {
    const {register: discountRegister, handleSubmit: discountHandlerSubmit, formState: {errors: discountErrors}} = useForm()

    const navigate = useNavigate()
    const returnButtonSize = useResponsiveSize([
        {breakpoint: 0, value: 40},
        {breakpoint: 640, value: 48},
        {breakpoint: 1024, value: 56},
    ])
    const [userCart, setUserCart] = useState([
        {owner: {faName: 'گیاه لند'}, image: itemImage, title: 'گیاه طبیعی یوکا', price: 158000, count: 1},
        {owner: {faName: 'گلخانه مرکزی'}, image: itemImage, title: 'گیاه طبیعی یوکا', price: 158000, count: 1},
        {owner: {faName: 'گیاه لند'}, image: itemImage, title: 'گیاه طبیعی یوکا', price: 158000, count: 1},
        {owner: {faName: 'گلخانه فرعی'}, image: itemImage, title: 'گیاه طبیعی یوکا', price: 158000, count: 1},
    ])

    const onReturnClickHandler = () => {
        navigate("/")
    }

    const handleDiscountSubmittion = (data) => {
        console.log(data);
    }

    const plantsCount = useMemo(() => {
        return userCart.reduce((prev, curr) => prev + curr.count, 0)
    }, [userCart])

    const totalPrice = useMemo(() => {
        return userCart.reduce((prev, curr) => prev + curr.price, 0)
    }, [userCart])

    const allShippers = useMemo(() => {
        return [...new Set(userCart.map(item => item.owner.faName))].join("، ")
    }, [userCart])

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
                    {userCart.length && (
                        <div className={'w-full grid grid-cols-12 md:gap-x-12 gap-y-10 mt-14 xs:mt-20 xl:mt-40'}>
                            <div className={'max-lg:col-span-12 col-span-6 xl:col-span-8 rounded-2xl xs:border border-neutral6 xs:py-9 xs:px-6'}>
                                <h2 className={'font-medium text-black'}>سبد خرید</h2>
                                <div className={'w-full grid grid-cols-1 max-md:*:w-full max-md:*:justify-evenly md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-10 max-xl:*:justify-self-center mt-14'}>
                                    {userCart.map((item, index) => (
                                        <CartItem key={index} {...item} onCountUpClick={() => countUpHandler(item._id)} onCountDownClick={() => countDownHandler(item._id)}/>
                                    ))}
                                </div>
                            </div>
                            <aside className={'max-lg:row-start-2 max-lg:col-span-12 col-span-6 xl:col-span-4 sticky top-5 h-max flex flex-col items-stretch gap-8 xs:rounded-2xl border-t xs:border border-neutral6 pt-10 xs:py-[26px] xs:px-6'}>
                                    <div className={'w-full flex justify-between items-center'}>
                                        <span className={'text-sm xs:text-base xs:leading-7 text-neutral11'}>تعداد گیاه:</span>
                                        <span className={'text-base xs:text-xl leading-7 xs:leading-9 text-black'}>{EnToFaNum(plantsCount)} عدد</span>
                                    </div>
                                    <div className={'w-full flex justify-between items-center'}>
                                        <span className={'text-sm xs:text-base xs:leading-7 text-neutral11'}>مجموع سبد خرید:</span>
                                        <span className={'text-base xs:text-xl leading-7 xs:leading-9 text-black'}>{EnToFaNum(totalPrice, true)} تومان</span>
                                    </div>
                                    <div className={'w-full flex justify-between items-center'}>
                                        <span className={'text-sm xs:text-base xs:leading-7 text-neutral11'}>ارسال توسط:</span>
                                        <span className={'text-base xs:text-xl leading-7 xs:leading-9 text-black'}>{allShippers}</span>
                                    </div>
                                    <div className={'w-full flex flex-col items-stretch gap-y-1'}>
                                        <span className={'text-start text-xs text-neutral9'}>کد تخفیف دارید؟</span>
                                        <form onSubmit={discountHandlerSubmit(handleDiscountSubmittion)} className={'max-w-full flex items-stretch min-h-14 gap-x-2 bg-neutral3 py-2.5 px-2 rounded'}>
                                            <input type="text" placeholder="کد تخفیف را وارد کنید..." {...discountRegister("code", {required: 'ابتدا کد تخفیف را وارد کنید!'})}
                                                className={'w-3/4 outline-0 bg-transparent text-sm'}/>
                                            <div className="flex-grow *:w-full *:!h-full">
                                                <CustomButton type="submit" size={32} title="ثبت" onClick={() => true} isOutline isDashed isSquared/>
                                            </div>
                                        </form>
                                        {
                                            (discountErrors.code ? [discountErrors.code] : []).map((error, index) => (
                                                <div key={index} className={'cursor-default px-2'}>
                                                    <span className={'text-error text-xs'}>{error.message}</span>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <CustomButton type="submit" size={48} onClick={() => true} title="سفارش و خرید" isFilled isSquared/>
                            </aside>
                        </div>
                    )}
                </div>
            </div>
            {userCart.length && <Footer/> || ''}
        </>
    );
}

export default Cart;