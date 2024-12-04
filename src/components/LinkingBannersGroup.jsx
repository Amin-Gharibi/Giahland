import PropTypes from 'prop-types';
import LinkingBanner from "./LinkingBanner.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

LinkingBannersGroup.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape(
            {
                image: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                href: PropTypes.string.isRequired
            })
    ).isRequired
};

function LinkingBannersGroup({items}) {
    return (
        <>
            <Swiper slidesPerView={1.5} spaceBetween={16} className={'sm:!hidden'}>
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <LinkingBanner image={item.image} title={item.title} href={item.href}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={'max-sm:hidden grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-center'}>
                {items.map((item, index) => (
                    <LinkingBanner key={index + 'u'} image={item.image} title={item.title} href={item.href}/>
                ))}
            </div>
        </>
    );
}

export default LinkingBannersGroup;