import PropTypes from 'prop-types';
import {forwardRef, useState} from "react";

const CustomInput = forwardRef(({
                                    size,
                                    placeholder,
                                    errors,
                                    type = 'text',
                                    RightIcon = null,
                                    LeftIcon = null,
                                    onLeftIconClick = null,
                                    getValues,
                                    ...otherProps
                                }, ref) => {
    const [customPlaceholder, setCustomPlaceholder] = useState(placeholder);
    const [customType, setCustomType] = useState(type);
    const [isInputFilled, setIsInputFilled] = useState(false);

    return (
        <>
            <div
                className={`group relative flex gap-x-2 items-center bg-white border border-neutral6 focus-within:border-primary px-3.5 rounded-xl transition-colors ${size === 48 ? 'h-12' : 'h-14'} ${isInputFilled ? 'active' : ''}`}
                onFocus={() => setCustomPlaceholder('')} onBlur={() => {
                setCustomPlaceholder(placeholder)
                setIsInputFilled(getValues(otherProps.name))
            }}>
            <span
                className={`hidden group-focus-within:block group-[.active]:block absolute right-3.5 bg-white px-1 ${size === 48 ? '-top-3 text-xs leading-5' : '-top-4 text-base leading-7'} text-neutral9 group-focus-within:text-primary`}>
                {placeholder}
            </span>
                {RightIcon && (
                    <RightIcon className={'w-5 h-5 fill-neutral9 group-focus-within:fill-primary transition-colors'}/>
                )}
                <input ref={ref} type={customType} placeholder={customPlaceholder}
                       className={'w-full h-full text-base placeholder-neutral9 text-neutral11 outline-none border-none'}
                       {...otherProps}
                />
                {type === 'password' && (
                    customType === 'password' ? (
                        <button type={'button'} onClick={() => setCustomType('text')}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className={'w-5 h-5 fill-neutral9 group-focus-within:fill-primary transition-colors'}>
                                <path
                                    d="M9.99992 4.97918C13.1583 4.97918 15.9749 6.75418 17.3499 9.56251C16.8582 10.5792 16.1666 11.4542 15.3416 12.1625L16.5166 13.3375C17.6749 12.3125 18.5916 11.0292 19.1666 9.56251C17.7249 5.90418 14.1666 3.31251 9.99992 3.31251C8.94158 3.31251 7.92492 3.47918 6.96658 3.78751L8.34158 5.16251C8.88325 5.05418 9.43325 4.97918 9.99992 4.97918ZM9.10825 5.92918L10.8333 7.65418C11.3083 7.86251 11.6916 8.24584 11.8999 8.72084L13.6249 10.4458C13.6916 10.1625 13.7416 9.86251 13.7416 9.55418C13.7499 7.48751 12.0666 5.81251 9.99992 5.81251C9.69158 5.81251 9.39992 5.85418 9.10825 5.92918ZM1.67492 3.20418L3.90825 5.43751C2.54992 6.50418 1.47492 7.92084 0.833252 9.56251C2.27492 13.2208 5.83325 15.8125 9.99992 15.8125C11.2666 15.8125 12.4833 15.5708 13.5999 15.1292L16.4499 17.9792L17.6249 16.8042L2.84992 2.02084L1.67492 3.20418ZM7.92492 9.45418L10.0999 11.6292C10.0666 11.6375 10.0333 11.6458 9.99992 11.6458C8.84992 11.6458 7.91658 10.7125 7.91658 9.56251C7.91658 9.52084 7.92492 9.49584 7.92492 9.45418ZM5.09159 6.62084L6.54992 8.07918C6.35825 8.53751 6.24992 9.03751 6.24992 9.56251C6.24992 11.6292 7.93325 13.3125 9.99992 13.3125C10.5249 13.3125 11.0249 13.2042 11.4749 13.0125L12.2916 13.8292C11.5583 14.0292 10.7916 14.1458 9.99992 14.1458C6.84158 14.1458 4.02492 12.3708 2.64992 9.56251C3.23325 8.37084 4.08325 7.38751 5.09159 6.62084Z"/>
                            </svg>
                        </button>
                    ) : (
                        <button type={'button'} onClick={() => setCustomType('password')}>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className={'w-5 h-5 fill-neutral9 group-focus-within:fill-primary transition-colors'}>
                                <path
                                    d="M12 6.5C15.79 6.5 19.17 8.63 20.82 12C19.17 15.37 15.8 17.5 12 17.5C8.2 17.5 4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5Z"/>
                            </svg>
                        </button>
                    )
                )}
                {LeftIcon && (
                    <button type={'button'} onClick={onLeftIconClick}>
                        <LeftIcon
                            className={'w-5 h-5 fill-neutral9 group-focus-within:fill-primary transition-colors'}/>
                    </button>
                )}
            </div>
            {errors?.map((error, index) => (
                <div key={index}>
                    <span className={'text-error text-xs'}>{error.message}</span>
                </div>
            ))}
        </>
    );
})

CustomInput.propTypes = {
    size: PropTypes.oneOf([48, 56]).isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'password', 'email']),
    RightIcon: PropTypes.elementType,
    LeftIcon: PropTypes.elementType,
    onLeftIconClick: PropTypes.func,
    errors: PropTypes.array,
    getValues: PropTypes.func,
};

CustomInput.displayName = 'CustomInput';

export default CustomInput;