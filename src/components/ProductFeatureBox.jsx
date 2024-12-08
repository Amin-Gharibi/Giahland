import PropTypes from 'prop-types';

ProductFeatureBox.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

function ProductFeatureBox({title, value}) {
    return (
        <div className={'h-[70px] min-h-max bg-neutral3 rounded-lg flex flex-col items-start gap-y-1 pt-2 px-3'}>
            <span className={'text-xs sm:text-sm font-medium text-neutral9'}>{title}</span>
            <span className={'text-sm sm:text-base leading-7 text-black'}>{value}</span>
        </div>
    );
}

export default ProductFeatureBox;