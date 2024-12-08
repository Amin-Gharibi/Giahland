import {useEffect, useState} from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import BreadCrumb from "../components/Breadcrumb.jsx";
import ProductImagesSlider from "../components/ProductImagesSlider.jsx";
import tempImage1 from "../assets/images/fourthBgImage.png";
import tempImage2 from "../assets/images/firstBgImage.png";
import tempImage3 from "../assets/images/secondBgImage.png";
import tempImage4 from "../assets/images/thirdBgImage.png";
import tempImage5 from "../assets/images/extraBgImage.png";
import tempImage6 from "../assets/images/loginBgImage.png";
import {Link} from "react-router-dom";
import ProductFeatureBox from "../components/ProductFeatureBox.jsx";
import CustomButton from "../components/CustomButton.jsx";
import shopIcon from "../assets/svg/shopIcon-gray.svg";
import EnToFaNum from "../utils/EnToFaNum.js";

function Product() {
    const productId = window.location.pathname.split('/')[2]
    const [productDetails, setProductDetails] = useState(null)
    const [breadcrumbs, setBreadcrumbs] = useState(null)

    useEffect(() => {
        setProductDetails({
            name: 'گیاه طبیعی یوکا',
            category: {
                enName: 'natural-plants',
                faName: 'گیاهان طبیعی'
            },
            features: [
                {title: 'جنس گلدان', value: 'پلاستیکی'},
                {title: 'خاک گیاه', value: 'خاک گلدانی شنی و غنی'},
                {title: 'وزن', value: '۴۰۰۰ گرم'},
                {title: 'ابعاد', value: '۲۵۰x۲۵۰x۸۰۰'},
                {title: 'وضعیت نسبت به آفتاب', value: 'آفتاب دوست'}
            ],
            price: 560000,
            seller: {name: 'فلاور گاردن'}
        })
        setBreadcrumbs([
            {name: 'گیاهان طبیعی', url: '/category/natural-plants'},
            {name: 'گیاه  طبیعی یوکا'}
        ])
    }, []);

    return (
        <>
            <div className={'container'}>
                <Header/>
                <div className={'mt-2 sm:mt-4 md:mt-6'}>
                    <BreadCrumb breadcrumbs={breadcrumbs ?? []}/>
                    <div className={'sm:mt-10 md:mt-16 lg:mt-[90px] flex items-start max-w-full'}>
                        <div className={'max-w-full flex flex-col lg:flex-row items-start gap-x-7 flex-grow'}>
                            <div className={'max-w-full lg:w-1/2 xl:w-[350px] h-max'}>
                                <ProductImagesSlider images={[
                                    tempImage1, tempImage2, tempImage3, tempImage4, tempImage5, tempImage6
                                ]}/>
                                <div className={'max-lg:hidden lg:block xl:hidden mt-10 flex-grow border border-neutral7 rounded-2xl py-8 px-6'}>
                                    <span className={'font-medium text-neutral12'}>فروشنده</span>
                                    <div className={'flex items-center gap-x-2 border-b border-b-neutral7 pb-8 mt-3'}>
                                        <img src={shopIcon} className={'w-6 h-6'}/>
                                        <span>{productDetails?.seller?.name}</span>
                                    </div>
                                    <div className={'flex justify-between items-center my-6'}>
                                        <span className={'leading-7 text-neutral12'}>قیمت</span>
                                        <span
                                            className={'text-xl leading-9 text-black'}>{EnToFaNum(productDetails?.price, true)} تومان</span>
                                    </div>
                                    <div className={'w-full *:w-full'}>
                                        <CustomButton title={'افزودن به سبد خرید'} onClick={() => true} size={48}
                                                      isFilled isSquared/>
                                    </div>
                                </div>
                            </div>
                            <div className={'w-full flex flex-col xl:flex-row items-start flex-grow gap-x-20'}>
                                <div className={'max-xl:w-full flex-grow-[2] max-lg:mt-10'}>
                                    <Link to={`/category/${productDetails?.category?.enName}`}
                                          className={'text-sm sm:text-base font-medium text-primary'}>{productDetails?.category?.faName}</Link>
                                    <h1 className={'mt-4 font-semibold text-xl leading-7 text-neutral12 pb-4 border-b border-b-neutral7'}>{productDetails?.name}</h1>
                                    <div className={'mt-7'}>
                                        <h6 className={'font-semibold text-base sm:text-lg leading-8 text-neutral12'}>ویژگی‌ها</h6>
                                        <div className={'grid grid-cols-2 gap-6 sm:gap-y-10 mt-4'}>
                                            {productDetails?.features?.map((feature, index) => (
                                                <ProductFeatureBox key={index} {...feature}/>
                                            ))}
                                        </div>
                                        <div className={'mx-auto w-max mt-6 sm:mt-10'}>
                                            <CustomButton title={'مشاهده همه ویژگی‌ها'} onClick={() => true} size={40}
                                                          isOutline isSquared/>
                                        </div>
                                    </div>
                                </div>
                                <div className={'lg:hidden xl:block max-lg:mt-10 max-lg:w-full flex-grow sm:border border-neutral7 rounded-2xl sm:py-8 sm:px-6'}>
                                    <span className={'font-medium text-neutral12'}>فروشنده</span>
                                    <div className={'flex items-center gap-x-2 border-b border-b-neutral7 pb-8 mt-3'}>
                                        <img src={shopIcon} className={'w-6 h-6'}/>
                                        <span>{productDetails?.seller?.name}</span>
                                    </div>
                                    <div className={'flex justify-between items-center my-6'}>
                                        <span className={'text-sm sm:text-base leading-7 text-neutral12'}>قیمت</span>
                                        <span
                                            className={'text-lg sm:text-xl leading-9 text-black'}>{EnToFaNum(productDetails?.price, true)} تومان</span>
                                    </div>
                                    <div className={'w-full *:w-full'}>
                                        <CustomButton title={'افزودن به سبد خرید'} onClick={() => true} size={48}
                                                      isFilled isSquared/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Product;