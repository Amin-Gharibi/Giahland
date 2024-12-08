import PropTypes from 'prop-types';
import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

ProductImagesSlider.propTypes = {
    images: PropTypes.array
};

function ProductImagesSlider({images}) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <img src={images[activeIndex]} className={'hidden sm:block w-[438px] h-[461px] mx-auto object-contain'}/>
            <div className={'mt-10'}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={12}
                    scrollbar={{draggable: true}}
                    breakpoints={{
                        640: {
                            slidesPerView: 5
                        },
                        768: {
                            slidesPerView: 6
                        },
                        1024: {
                            slidesPerView: 4
                        },
                        1280: {
                            slidesPerView: 3.2
                        }
                    }}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <button className={`hidden sm:block relative w-[100px] h-[100px] border border-neutral6 rounded-lg overflow-hidden transition-all ${index === activeIndex ? '' : 'p-2.5'}`} onClick={() => setActiveIndex(index)}>
                                <img src={image} className={`${index === activeIndex ? 'w-full h-full' : 'w-20 h-20'} m-auto rounded object-cover transition-all ${index === activeIndex ? 'blur-[3px]' : ''}`}/>
                                {index === activeIndex && (<span className={'absolute inset-0 z-[10] block w-max h-max leading-[100px] m-auto text-black text-xl'}>...</span>)}
                                {index === activeIndex && (<div className={'absolute inset-0 bg-white/50 z-[5]'}/>)}
                            </button>
                            <div className={'sm:hidden'}>
                                <img src={image} className={'w-full object-contain'}/>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default ProductImagesSlider;