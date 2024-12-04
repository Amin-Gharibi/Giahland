import PropTypes from 'prop-types';

ServiceItem.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

function ServiceItem({icon, title, description}) {
    return (
        <div className={'flex items-center gap-x-2'}>
            <div className={'w-14 h-14 min-w-14 xs:w-[68px] xs:h-[68px] xs:min-w-[68px] flex justify-center items-center rounded-full bg-[#E5F2E9]'}>
                <img className={'w-6 h-6 xs:w-8 xs:h-8'} src={icon}/>
            </div>
            <div className={'flex flex-col justify-center items-start gap-y-1.5'}>
                <span className={'font-medium text-sm xs:text-base text-neutral12 text-start'}>{title}</span>
                <p className={'text-xs text-neutral11 text-start'}>{description}</p>
            </div>
        </div>
    );
}

export default ServiceItem;