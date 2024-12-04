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
        <div className={'flex flex-col gap-6 border border-neutral5 rounded-xl p-4'}>
            <img className={'w-full h-64 object-contain'} src={image} alt={title}/>
            <span className={'text-lg leading-8 text-start text-black'}>{title}</span>
            <div className={'flex items-center justify-between'}>
                <span className={'text-sm leading-6 text-black'}>قیمت:</span>
                <span className={'text-lg leading-8 text-black'}>{price.toLocaleString('fa-IR')} تومان</span>
            </div>
            <CustomButton title={'مشاهده بیشتر'} onClick={() => identifier} size={40} isFilled={true} isSquared={true}/>
        </div>
    );
}

export default ItemBox;