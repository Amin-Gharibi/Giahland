import PropTypes from 'prop-types';

ProductFeatureBox.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

function ProductFeatureBox({name, value}) {
    return (
        <div className={'h-[70px] min-h-max bg-neutral3 rounded-lg flex flex-col items-start gap-y-1 pt-2 px-3'}>
            <span className={'text-xs sm:text-sm font-medium text-neutral9'}>{name}</span>
            <span className={'text-sm sm:text-base leading-7 text-black'}>{value}</span>
        </div>
    );
}

export default ProductFeatureBox;