import {Link} from "react-router-dom";
import homeIconPrimary from "../assets/svg/home-primary.svg";
import arrowLeftIconGray from "../assets/svg/arrowLeft-gray.svg";
import PropTypes from "prop-types";

BreadCrumb.propTypes = {
    breadcrumbs: PropTypes.array,
}

function BreadCrumb({breadcrumbs}) {
    return (
        <div className={'flex items-center gap-x-1 select-none'}>
            <Link to={'/'} className={'flex items-center gap-x-1'}>
                <img src={homeIconPrimary} className={'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'}/>
                <span className={'text-sm sm:text-base md:text-lg leading-8 text-primary'}>خانه</span>
            </Link>
            {breadcrumbs.map((item, index) => (
                <div key={index + 'breadcrumb'} className={'flex items-center gap-x-1 text-sm sm:text-base md:text-lg leading-8'}>
                    <img src={arrowLeftIconGray} className={'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'}/>
                    {item.url ? (
                        <Link to={item.url}>
                            <span className={'text-primary'}>{item.name}</span>
                        </Link>
                    ) : (
                        <span className={'text-neutral9 cursor-default'}>{item.name}</span>
                    )}
                </div>
            ))}
        </div>
    )
}

export default BreadCrumb;