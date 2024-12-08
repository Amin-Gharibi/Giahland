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
import firstFlower from "../assets/temp/firstFlower.png";
import secondFlower from "../assets/temp/secondFlower.png";
import thirdFlower from "../assets/temp/thirdFlower.png";
import fourthFlower from "../assets/temp/firstFlower.png";
import SwipingSlider from "../components/SwipingSlider.jsx";
import ProductSectionTitle from "../components/ProductSectionTitle.jsx";
import {useForm} from "react-hook-form";
import CommentItem from "../components/CommentItem.jsx";
import useResponsiveSize from "../hooks/useResponsiveSize.js";

function Product() {
    const productId = window.location.pathname.split('/')[2]
    const [productDetails, setProductDetails] = useState(null)
    const [breadcrumbs, setBreadcrumbs] = useState(null)

    const showMoreCommentsButtonSize = useResponsiveSize(48, 40, 1024)

    const {register, handleSubmit, formState: {errors}} = useForm()
    const submitCommentHandler = (data) => {
        console.log(data)
    }

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
            rate: 4.6,
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
                    <div className={'sm:mt-10 md:mt-16 lg:mt-[90px] max-w-full'}>
                        <div
                            className={'max-sm:border-b max-sm:pb-6 border-b-neutral6 max-w-full flex flex-col lg:flex-row items-start gap-x-7 flex-grow'}>
                            <div className={'max-w-full lg:w-1/2 xl:w-[350px] h-max'}>
                                <ProductImagesSlider images={[
                                    tempImage1, tempImage2, tempImage3, tempImage4, tempImage5, tempImage6
                                ]}/>
                                <div
                                    className={'max-lg:hidden lg:block xl:hidden mt-10 flex-grow border border-neutral7 rounded-2xl py-8 px-6'}>
                                    <span className={'font-medium text-neutral12'}>فروشنده</span>
                                    <div className={'border-b border-b-neutral7 mt-3'}>
                                        <div className={'flex items-center gap-x-2'}>
                                            <img src={shopIcon} className={'w-6 h-6'}/>
                                            <span>{productDetails?.seller?.name}</span>
                                        </div>
                                        <span
                                            className={'text-sm text-neutral12 my-6 mr-4 block'}>{EnToFaNum(productDetails?.rate)}</span>
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
                                <div
                                    className={'lg:hidden xl:block max-lg:mt-10 max-lg:w-full flex-grow sm:border border-neutral7 rounded-2xl sm:py-8 sm:px-6'}>
                                    <span className={'font-medium text-neutral12'}>فروشنده</span>
                                    <div className={'border-b border-b-neutral7 mt-3'}>
                                        <div className={'flex items-center gap-x-2'}>
                                            <img src={shopIcon} className={'w-6 h-6'}/>
                                            <span>{productDetails?.seller?.name}</span>
                                        </div>
                                        <span
                                            className={'text-sm text-neutral12 my-6 mr-4 block'}>{EnToFaNum(productDetails?.rate)}</span>
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
                        {/*similar plants section*/}
                        <div className={'max-w-full mt-14 sm:mt-[72px]'}>
                            <ProductSectionTitle title={'گیاه‌های مشابه'}/>
                            <div className={'mt-8'}>
                                <SwipingSlider items={[
                                    {image: firstFlower, title: 'گیاه طبیعی بابا آدم', price: 857000, identifier: '1'},
                                    {image: secondFlower, title: 'گیاه طبیعی یوکا', price: 560000, identifier: '2'},
                                    {
                                        image: thirdFlower,
                                        title: 'گیاه طبیعی سانسوریا سبز',
                                        price: 250000,
                                        identifier: '3'
                                    },
                                    {image: fourthFlower, title: 'گیاه طبیعی ساکولنت', price: 57000, identifier: '4'},
                                    {image: firstFlower, title: 'گیاه طبیعی بابا آدم', price: 857000, identifier: '5'},
                                ]} slidesPerView={5} spaceBetween={24}/>
                            </div>
                        </div>
                        {/*comments section*/}
                        <div className={'max-w-full mt-14 sm:mt-[72px]'}>
                            <ProductSectionTitle title={'دیدگاه‌ها و امتیاز'}/>
                            <form onSubmit={handleSubmit(submitCommentHandler)}>
                                <textarea
                                    className={'w-full bg-neutral2 border border-neutral6 rounded outline-0 resize-y py-4 px-3 mt-10'}
                                    rows={8}
                                    placeholder={'نظر خود را وارد کنید...'} {...register("comment", {required: 'وارد کردن متنی به عنوان نظر الزامی است'})}></textarea>
                                {(errors.comment ? [errors.comment] : []).map((error, index) => (
                                    <div key={index} className={'cursor-default'}>
                                        <span className={'text-error text-xs'}>{error.message}</span>
                                    </div>
                                ))}
                                <div className={'flex justify-between items-start mt-2'}>
                                    <div>
                                        <div className={'group flex items-center gap-x-1 w-max bg-neutral2 border border-neutral6 rounded py-1 px-2'}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={'fill-neutral9 '}>
                                                <path
                                                    d="M19.6486 9.29464L14.8086 8.87464L12.9186 4.42464C12.5786 3.61464 11.4186 3.61464 11.0786 4.42464L9.18861 8.88464L4.35861 9.29464C3.47861 9.36464 3.11861 10.4646 3.78861 11.0446L7.45861 14.2246L6.35861 18.9446C6.15861 19.8046 7.08861 20.4846 7.84861 20.0246L11.9986 17.5246L16.1486 20.0346C16.9086 20.4946 17.8386 19.8146 17.6386 18.9546L16.5386 14.2246L20.2086 11.0446C20.8786 10.4646 20.5286 9.36464 19.6486 9.29464ZM11.9986 15.6546L8.23861 17.9246L9.23861 13.6446L5.91861 10.7646L10.2986 10.3846L11.9986 6.35464L13.7086 10.3946L18.0886 10.7746L14.7686 13.6546L15.7686 17.9346L11.9986 15.6546Z"/>
                                            </svg>
                                            <input type={'number'} className={'w-6 text-center bg-transparent h-full outline-0 border-0 hide-arrows'} {...register("rate", {required: "باید امتیاز این محصول را وارد کنید", min: {value: 0, message: 'امتیاز نمیتواند کمتر از ۰ باشد'}, max: {value: 5, message: 'امتیاز نمیتواند بیشتر از ۵ باشد'}, valueAsNumber: true, value: 5})}/>
                                        </div>
                                        {(errors.rate ? [errors.rate] : []).map((error, index) => (
                                            <div key={index} className={'cursor-default'}>
                                                <span className={'text-error text-xs'}>{error.message}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={'w-36 *:w-full'}>
                                        <CustomButton type={'submit'} title={'ثبت نظر'} onClick={() => true} size={40} isFilled isSquared/>
                                    </div>
                                </div>
                            </form>
                            <div className={'mt-10 divide-y divide-neutral3'}>
                                <CommentItem user={{prof: tempImage3, firstName: 'یاسر', lastName: 'منصوری'}} rate={4} comment={'گیاه یوکا یکی از گیاهان مورد علاقه من هست و از خریدم راضی هستم. گیاه یوکا یکی از گیاهان مورد علاقه من هست و از خریدم راضی هستم. گیاه یوکا یکی از گیاهان مورد علاقه من هست و از خریدم راضی هستم. گیاه یوکا یکی از گیاهان مورد علاقه من هست و از خریدم راضی هستم. گیاه یوکا یکی از گیاهان مورد علاقه من هست و از خریدم راضی هستم'} likesCount={3} disLikesCount={0} isLiked={true} isDisLiked={false} date={'Sun Dec 08 2024 16:13:51 GMT+0330 (Iran Standard Time)'}/>
                                <CommentItem user={{prof: tempImage3, firstName: 'یاسر', lastName: 'منصوری'}} rate={4} comment={'گیاه یوکا یکی از گیاهان مورد علاقه'} likesCount={3} disLikesCount={0} isLiked={true} isDisLiked={false} date={'Sun Dec 08 2024 16:13:51 GMT+0330 (Iran Standard Time)'}/>
                                <CommentItem user={{prof: tempImage3, firstName: 'یاسر', lastName: 'منصوری'}} rate={4} comment={'گیاه یوکا یکی از گیاهان مورد علاقه من هست و از خریدم راضی هستم. گیاه یوکا یکی از گیاهان مورد علاقه من هست و از خریدم راضی هستم. گیاه یوکا یکی از گیاهان مورد علاقه من هست و از خریدم '} likesCount={6} disLikesCount={2} isLiked={false} isDisLiked={true} date={'Sun Dec 08 2024 16:13:51 GMT+0330 (Iran Standard Time)'}/>
                                <CommentItem user={{prof: tempImage3, firstName: 'یاسر', lastName: 'منصوری'}} rate={4} comment={'گیاه یوکا یکی از گیاهان مورد علاقه من هست و از خریدم راضی هستم. گیاه یوکا'} likesCount={6} disLikesCount={3} isLiked={true} isDisLiked={false} date={'Sun Dec 08 2024 16:13:51 GMT+0330 (Iran Standard Time)'}/>
                                <CommentItem user={{prof: tempImage3, firstName: 'یاسر', lastName: 'منصوری'}} rate={4} comment={'گیاه یوکا یکی از گیاهان مورد علاقه من هست و از خریدم راضی هستم. گیاه یوکا یکی از گیاهان مورد علاقه من هست و از خریدم راضی هستم. گیاه یوکا یکی از گیاهان مورد '} likesCount={3} disLikesCount={4} isLiked={false} isDisLiked={true} date={'Sun Dec 08 2024 16:13:51 GMT+0330 (Iran Standard Time)'}/>
                            </div>
                            <div className={'mx-auto mt-6 w-40 *:w-full'}>
                                <CustomButton title={'مشاهده بیشتر'} onClick={() => true} size={showMoreCommentsButtonSize} isOutline isSquared/>
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