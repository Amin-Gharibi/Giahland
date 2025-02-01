import PropTypes from "prop-types";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import API_CONFIG from "../config/api.config";

ProductImagesSlider.propTypes = {
	images: PropTypes.array,
};

function ProductImagesSlider({ images }) {
	const [activeIndex, setActiveIndex] = useState(0);

	const getImageURL = (path) => new URL(API_CONFIG.BASE_URL).origin + path;
	return (
		<div>
			<img src={getImageURL(images[activeIndex]?.image_url)} className={"hidden sm:block w-[438px] h-[461px] mx-auto object-contain"} />
			<div className={"mt-10 sm:mx-auto product--image-slider"}>
				<Swiper slidesPerView={1} spaceBetween={12} scrollbar={{ draggable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: "auto"
                    }
                }}>
					{images.length &&
						images?.map((image, index) => (
							<SwiperSlide key={index} className="flex-shrink-0">
								<button className={`hidden sm:block relative w-[100px] h-[100px] border border-neutral6 rounded-lg overflow-hidden transition-all ${index === activeIndex ? "" : "p-2.5"}`} onClick={() => setActiveIndex(index)}>
									<img src={getImageURL(image.image_url)} className={`${index === activeIndex ? "w-full h-full" : "w-20 h-20"} select-none m-auto rounded object-cover transition-all ${index === activeIndex ? "blur-[3px]" : ""}`} />
									{index === activeIndex && <span className={"absolute inset-0 z-[10] block w-max h-max leading-[100px] m-auto text-black text-xl"}>...</span>}
									{index === activeIndex && <div className={"absolute inset-0 bg-white/50 z-[5]"} />}
								</button>
								<div className={"sm:hidden"}>
									<img src={getImageURL(image.image_url)} className={"w-full h-[300px] object-contain"} />
								</div>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</div>
	);
}

export default ProductImagesSlider;
