import PropTypes from 'prop-types';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import ItemBox from "./ItemBox.jsx";
import CustomIconButton from "./CustomIconButton.jsx";
import arrowLeftPrimary from "../assets/svg/arrowLeft-primary.svg";
import {useRef, useState} from "react";

SwipingSlider.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape(
            {
                identifier: PropTypes.string,
                image: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired
            })).isRequired,
    spaceBetween: PropTypes.number,
    loop: PropTypes.bool
};

function SwipingSlider({items, ...swiperProps}) {
    const swiperRef = useRef(null);

    const [isNextSlideButtonShown, setIsNextSlideButtonShown] = useState(true);
    const [isPrevSlideButtonShown, setIsPrevSlideButtonShown] = useState(false);

    const slideChangeHandler = () => {
        const activeIndex = swiperRef.current?.swiper.activeIndex;
        if (activeIndex < Math.floor(items.length / 2)) {
            setIsNextSlideButtonShown(true);
        } else {
            setIsNextSlideButtonShown(false);
        }
        if (activeIndex > 0) {
            setIsPrevSlideButtonShown(true);
        } else {
            setIsPrevSlideButtonShown(false);
        }
    }

    return (
        <div className={'relative'}>
            <Swiper {...swiperProps} slidesPerView={1.5} scrollbar={{draggable: true}} ref={swiperRef} onSlideChange={slideChangeHandler}
                breakpoints={{
                    '470': {
                        slidesPerView: 1.5,
                    },
                    '640': {
                        slidesPerView: 2
                    },
                    '768': {
                        slidesPerView: 2
                    },
                    '1024': {
                        slidesPerView: 3
                    },
                    '1280': {
                        slidesPerView: 4.5
                    }
                }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ItemBox image={item.image} title={item.title} price={item.price} identifier={item.identifier}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            {
                isNextSlideButtonShown &&
                <div className={'max-sm:hidden w-max h-max absolute -left-6 top-0 bottom-0 my-auto z-10'}>
                    <CustomIconButton onClick={() => swiperRef.current?.swiper.slideNext()} size={48}
                                      icon={arrowLeftPrimary}
                                      isOutline={true} isCurved={true}/>
                </div>
            }
            {
                isPrevSlideButtonShown &&
                <div className={'max-sm:hidden w-max h-max absolute -right-6 top-0 bottom-0 my-auto z-10 rotate-180'}>
                    <CustomIconButton onClick={() => swiperRef.current?.swiper.slidePrev()} size={48}
                                      icon={arrowLeftPrimary}
                                      isOutline={true} isCurved={true}/>
                </div>
            }
        </div>
    );
}

export default SwipingSlider;