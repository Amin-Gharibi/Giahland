import {useForm} from "react-hook-form";
import useResponsiveSize from "../hooks/useResponsiveSize.js";
import Header from "../components/Header.jsx";
import CustomInput from "../components/CustomInput.jsx";
import CustomButton from "../components/CustomButton.jsx";
import loginBgImage from "../assets/images/loginBgImage.png";
import {Link} from "react-router-dom";

function Signup() {
    const {register, handleSubmit, getValues, formState: {errors}} = useForm();
    const onSubmit = async (data) => {
        console.log(data)
    };

    const inputSize = useResponsiveSize([
        {breakpoint: 0, value: 48},
        {breakpoint: 470, value: 56},
    ])

    return (
        <>
            <div className={'container'}>
                <Header onlyMobileSize/>
            </div>
            <div className={'flex flex-col md:flex-row md:*:w-1/2 md:*:h-screen'}>
                <div
                    className={'container max-xs:-mt-3 bg-white max-md:order-2 lg:px-24 xl:px-40 flex justify-center items-center max-md:rounded-t-xl overflow-hidden'}>
                    <form onSubmit={handleSubmit(onSubmit)} className={'w-full'}>
                        <h1 className={'xs:font-semibold text-xl leading-7 text-black mb-8 max-md:text-center max-md:mt-4'}>ثبت
                            نام</h1>
                        <CustomInput
                            size={inputSize}
                            {...register('phoneNumber', {
                                required: 'وارد کردن شماره موبایل الزامی است',
                                pattern: {
                                    value: /^09\d{9}$/,
                                    message: 'شماره موبایل وارد شده باید با فرمت ۰۹xxxxxxxxx باشد'
                                }
                            })}
                            getValues={getValues}
                            placeholder="شماره موبایل"
                            RightIcon={(props) => (
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" {...props}>
                                    <path
                                        d="M15.9104 0.833313H7.57702C6.66035 0.833313 5.91035 1.58331 5.91035 2.49998V4.99998H7.57702V3.33331H15.9104V16.6666H7.57702V15H5.91035V17.5C5.91035 18.4166 6.66035 19.1666 7.57702 19.1666H15.9104C16.827 19.1666 17.577 18.4166 17.577 17.5V2.49998C17.577 1.58331 16.827 0.833313 15.9104 0.833313ZM5.91869 11.225L3.79368 9.09998L2.73535 10.1583L5.91035 13.3333L11.902 7.34165L10.8437 6.28331L5.91869 11.225Z"/>
                                </svg>
                            )}
                            errors={errors.phoneNumber ? [errors.phoneNumber] : []}
                        />
                        <div className={'mt-6'}>
                            <CustomInput
                                type={"email"}
                                size={inputSize}
                                {...register('email', {
                                    required: 'وارد کردن ایمیل الزامی است',
                                    pattern: {
                                        value: /^[a-zA-Z\d]{3,}@[a-zA-Z]{4,}\.[a-zA-Z]{3,}$/,
                                        message: 'ایمیل وارد شده معتبر نیست!'
                                    }
                                })}
                                getValues={getValues}
                                placeholder="ایمیل"
                                RightIcon={(props) => (
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" {...props}>
                                        <path
                                            d="M18.4895 4.16669H3.82284C2.8145 4.16669 1.99867 4.99169 1.99867 6.00002L1.9895 17C1.9895 18.0084 2.8145 18.8334 3.82284 18.8334H18.4895C19.4978 18.8334 20.3228 18.0084 20.3228 17V6.00002C20.3228 4.99169 19.4978 4.16669 18.4895 4.16669ZM18.4895 17H3.82284V7.83335L11.1562 12.4167L18.4895 7.83335V17ZM11.1562 10.5834L3.82284 6.00002H18.4895L11.1562 10.5834Z"/>
                                    </svg>
                                )}
                                errors={errors.email ? [errors.email] : []}
                            />
                        </div>
                        <div className={'mt-6'}>
                            <CustomInput
                                type={"password"}
                                size={inputSize}
                                {...register('password', {
                                    required: 'وارد کردن رمز عبور الزامی است',
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
                                        message: 'رمز عبور شما باید حداقل ۶ حرف شامل حروف کوچک و بزرگ انگلیسی و اعداد باشد'
                                    }
                                })}
                                getValues={getValues}
                                placeholder="رمز عبور"
                                RightIcon={(props) => (
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" {...props}>
                                        <path
                                            d="M19.4061 9.66667H11.7519C11.0003 7.53083 8.96525 6 6.57275 6C3.53859 6 1.07275 8.46583 1.07275 11.5C1.07275 14.5342 3.53859 17 6.57275 17C8.96525 17 11.0003 15.4692 11.7519 13.3333H12.0728L13.9061 15.1667L15.7394 13.3333L17.5728 15.1667L21.2394 11.4633L19.4061 9.66667ZM6.57275 14.25C5.06025 14.25 3.82275 13.0125 3.82275 11.5C3.82275 9.9875 5.06025 8.75 6.57275 8.75C8.08525 8.75 9.32275 9.9875 9.32275 11.5C9.32275 13.0125 8.08525 14.25 6.57275 14.25Z"/>
                                    </svg>
                                )}
                                errors={errors.password ? [errors.password] : []}
                            />
                        </div>
                        <div className={'mt-6'}>
                            <CustomInput
                                type={"password"}
                                size={inputSize}
                                {...register('confirmPassword', {
                                    required: 'تکرار رمز عبور الزامی است',
                                    validate: (value) => {
                                        if (value !== getValues("password")) {
                                            return 'رمز عبور وارد شده همخوانی ندارد!'
                                        }
                                    }
                                })}
                                getValues={getValues}
                                placeholder="تکرار رمز عبور"
                                RightIcon={(props) => (
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" {...props}>
                                        <path
                                            d="M19.4061 9.66667H11.7519C11.0003 7.53083 8.96525 6 6.57275 6C3.53859 6 1.07275 8.46583 1.07275 11.5C1.07275 14.5342 3.53859 17 6.57275 17C8.96525 17 11.0003 15.4692 11.7519 13.3333H12.0728L13.9061 15.1667L15.7394 13.3333L17.5728 15.1667L21.2394 11.4633L19.4061 9.66667ZM6.57275 14.25C5.06025 14.25 3.82275 13.0125 3.82275 11.5C3.82275 9.9875 5.06025 8.75 6.57275 8.75C8.08525 8.75 9.32275 9.9875 9.32275 11.5C9.32275 13.0125 8.08525 14.25 6.57275 14.25Z"/>
                                    </svg>
                                )}
                                errors={errors.confirmPassword ? [errors.confirmPassword] : []}
                            />
                        </div>
                        <div className={'w-full *:w-full mt-8'}>
                            <CustomButton type={'submit'} title={'ثبت نام'} onClick={() => true} size={inputSize}
                                          isFilled={true}
                                          isSquared={true}/>
                        </div>
                        <div className={'mt-3 text-center leading-7 text-sm xs:text-base'}>
                            <span>حساب کاربری دارید؟ </span>
                            <Link to={'/login'} className={'text-primary'}>ورود</Link>
                            <span> کنید</span>
                        </div>
                    </form>
                </div>
                <div>
                    <img src={loginBgImage} alt={'گیاه لند'}
                         className={'w-full h-[250px] md:h-full object-none md:object-cover'}/>
                </div>
            </div>
        </>
    );
}

export default Signup;