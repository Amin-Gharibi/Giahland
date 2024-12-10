import Header from "../components/Header.jsx";
import notFoundBg from "../assets/images/notFoundBg.png";
import CustomButton from "../components/CustomButton.jsx";
import {Link} from "react-router-dom";
import useResponsiveSize from "../hooks/useResponsiveSize.js";

function NotFound() {
    const buttonSize = useResponsiveSize([
        {breakpoint: 0, value: 48},
        {breakpoint: 470, value: 56},
    ])
    
    return (
        <div className={'container'}>
            <Header/>
            <div className={'flex-grow h-full flex flex-col justify-center items-center'}>
                <img src={notFoundBg} alt="Page Not Found!" className={'w-[500px] object-contain'}/>
                <h2 className={'text-lg xs:text-xl leading-9'}>صفحه مورد نظر شما یافت نشد!</h2>
                <Link to={'/'} className={'mt-4 mb-20'}>
                    <CustomButton title={'بازگشت به صفحه اصلی'} onClick={() => true} size={buttonSize} isOutline isSquared/>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;