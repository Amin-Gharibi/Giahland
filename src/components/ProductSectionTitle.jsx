import PropTypes from 'prop-types';

ProductSectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

function ProductSectionTitle({title}) {
    return (
        <div className={'flex justify-start items-start'}>
            <h3 className={'text-xl sm:text-2xl leading-9 sm:leading-8 text-black'}>{title}</h3>
        </div>
    );
}

export default ProductSectionTitle;