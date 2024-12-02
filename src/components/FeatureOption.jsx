import React from 'react';
import PropTypes from 'prop-types';

FeatureOption.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

function FeatureOption({icon, title, description}) {
    return (
        <div className={'flex flex-col justify-center items-center'}>
            <div className={'w-20 h-20 flex justify-center items-center rounded-full'} style={{backgroundColor: '#E5F2E9'}}>
                <img src={icon} alt={title} className={'w-10 h-10'}/>
            </div>
            <h4 className={'font-medium sm:font-semibold sm:text-lg md:text-xl text-neutral12 mt-2 text-center'}>{title}</h4>
            <p className={'text-xs sm:text-sm text-neutral10 text-center'}>{description}</p>
        </div>
    );
}

export default FeatureOption;