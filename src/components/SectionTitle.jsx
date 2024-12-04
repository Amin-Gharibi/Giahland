import PropTypes from 'prop-types';

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired
};

function SectionTitle({title}) {
    return (
        <div className={'flex justify-start items-start'}>
            <h3 className={'font-semibold xs:font-bold text-xl sm:text-2xl leading-8 text-primary'}>{title}</h3>
        </div>
    );
}

export default SectionTitle;