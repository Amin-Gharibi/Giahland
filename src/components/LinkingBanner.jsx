import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import arrowLeftWhite from "../assets/svg/arrowLeft-white.svg";

LinkingBanner.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

function LinkingBanner({image, title, href}) {
    return (
        <div className={'h-60 relative rounded-lg overflow-hidden text-white select-none'}>
            <img src={image} alt={title} className={'w-full h-full object-cover'}/>
            <div className={'absolute inset-0 w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] flex flex-col justify-end items-start gap-4 p-4 sm:p-[22px]'}>
                <span className={'font-medium sm:font-semibold sm:text-lg md:text-xl sm:leading-7 cursor-default'}>{title}</span>
                <Link to={href} className={'bg-transparent border border-white rounded-xl px-[22px] py-2 flex justify-center items-center gap-x-2'}>
                    <span className={'text-sm sm:text-base md:text-lg max-sm:font-medium leading-8'}>خرید {title}</span>
                    <img src={arrowLeftWhite} className={'w-6 h-6'}/>
                </Link>
            </div>
        </div>
    );
}

export default LinkingBanner;