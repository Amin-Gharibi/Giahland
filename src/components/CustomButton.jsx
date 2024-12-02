import PropTypes from 'prop-types';

CustomButton.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf([32, 40, 48, 56]).isRequired,
    icon: PropTypes.string,
    leftIcon: PropTypes.bool,
    rightIcon: PropTypes.bool,
    isCurved: PropTypes.bool,
    isSquared: PropTypes.bool,
    isDashed: PropTypes.bool,
    isOutline: PropTypes.bool,
    isFilled: PropTypes.bool,
};

function CustomButton({title, onClick, size, icon, leftIcon, rightIcon, isCurved, isSquared, isDashed, isOutline, isFilled}) {
    return (
        <button onClick={onClick} style={{height: size + 'px'}} className={`flex items-center justify-between ${size === 32 ? 'px-2 gap-x-1' : size === 40 ? 'px-2 gap-x-2' : size === 48 || size === 56 ? 'px-4 gap-x-2' : ''} ${isOutline ? 'border border-primary sm:hover:bg-neutral2 text-primary' : isFilled ? 'bg-primary text-white' : ''} ${isDashed ? 'border-dashed' : ''} ${isCurved ? 'rounded-full' : isSquared ? 'rounded-lg' : ''} transition-colors`}>
            {icon && leftIcon && <img src={icon} alt={title} className={`${size === 32 ? 'w-5 h-5' : size === 56 ? 'w-8 h-8' : 'w-6 h-6'}`}/>}
            <span>{title}</span>
            {icon && rightIcon && <img src={icon} alt={title} className={'w-6 h-6'}/>}
        </button>
    );
}

export default CustomButton;