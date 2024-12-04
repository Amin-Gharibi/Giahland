import PropTypes from 'prop-types';
import CustomButton from "./CustomButton.jsx";

ItemBox.propTypes = {
    identifier: PropTypes.string,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

function ItemBox({identifier, image, title, price}) {
    return (
        <div className={'flex flex-col sm:gap-6 border border-neutral5 rounded-xl p-4'}>
            <img className={'w-52 self-center sm:w-full h-64 object-contain max-sm:mt-4'} src={image} alt={title}/>
            <span className={'text-base sm:text-lg leading-8 text-start text-black'}>{title}</span>
            <div className={'flex items-center justify-between max-sm:mt-2 max-sm:mb-4'}>
                <span className={'text-sm leading-6 text-black'}>قیمت:</span>
                <span className={'text-base sm:text-lg leading-8 text-black'}>{price.toLocaleString('fa-IR')} تومان</span>
            </div>
            <CustomButton title={'مشاهده بیشتر'} onClick={() => identifier} size={40} isFilled={true} isSquared={true}/>
        </div>
    );
}

export default ItemBox;