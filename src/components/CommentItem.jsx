import {useState} from 'react';
import PropTypes from 'prop-types';
import EnToFaNum from "../utils/EnToFaNum.js";
import thumbsUpGray from "../assets/svg/thumbsUp-gray.svg";
import thumbsDownGray from "../assets/svg/thumbsDown-gray.svg";
import thumbsDownRed from "../assets/svg/thumbsDown-red.svg";
import thumbsUpPrimary from "../assets/svg/thumbsUp-primary.svg";

CommentItem.propTypes = {
    user: PropTypes.object.isRequired,
    rate: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    likesCount: PropTypes.number.isRequired,
    disLikesCount: PropTypes.number.isRequired,
    isLiked: PropTypes.bool.isRequired,
    isDisLiked: PropTypes.bool.isRequired,
    date: PropTypes.string.isRequired,
};

function CommentItem({user, rate, comment, likesCount, disLikesCount, isLiked, isDisLiked, date}) {
    const [localLikesCount, setLocalLikesCount] = useState(likesCount)
    const [localDisLikesCount, setLocalDisLikesCount] = useState(disLikesCount)
    const [localIsLiked, setLocalIsLiked] = useState(isLiked)
    const [localIsDisLiked, setLocalIsDisLiked] = useState(isDisLiked)
    const localDate = new Date(date);

    const likeHandler = () => {
        if (localIsLiked) {
            // remove like from backend
            setLocalIsLiked(false)
            setLocalLikesCount(prev => prev - 1)
            return;
        }

        // ***** fetch to backend

        if (localIsDisLiked) {
            setLocalIsDisLiked(false)
            setLocalDisLikesCount(prev => prev - 1)
        }
        setLocalIsLiked(true)
        setLocalLikesCount(prev => prev + 1)
    }

    const disLikeHandler = () => {
        if (localIsDisLiked) {
            // remove like from backend
            setLocalIsDisLiked(false)
            setLocalDisLikesCount(prev => prev - 1)
            return;
        }

        // ***** fetch to backend

        if (localIsLiked) {
            setLocalIsLiked(false)
            setLocalLikesCount(prev => prev - 1)
        }
        setLocalIsDisLiked(true)
        setLocalDisLikesCount(prev => prev + 1)
    }

    return (
        <div className={'max-sm:px-0 p-5 grid grid-cols-[auto_1fr_auto] gap-6'}>
            <img src={user.prof} alt={user.firstName + ' ' + user.lastName}
                 className={'w-14 h-14 rounded-full object-cover self-center'}/>
            <h6 className={'text-sm sm:text-base font-medium text-black self-center'}>{user.firstName + ' ' + user.lastName}</h6>
            <div className={'flex max-sm:flex-col items-stretch gap-x-4 gap-y-2 self-center'}>
                <div className={'max-sm:order-2 flex items-center justify-center py-1 px-2 bg-neutral2 border border-neutral6 rounded'}>
                    <span className={'text-xs sm:text-sm md:text-base'}>{EnToFaNum(`${localDate.getDate()}-${localDate.getMonth() + 1}-${localDate.getFullYear()}`)}</span>
                </div>
                <div className={'flex items-stretch gap-x-2'}>
                    <button onClick={likeHandler}
                            className={`flex items-center gap-x-2 py-1 px-2 rounded border ${localIsLiked ? 'bg-white border-primary text-primary' : 'bg-neutral2 border-neutral6'}`}>
                        <span
                            className={'text-xs md:text-sm font-semibold select-none'}>{EnToFaNum(localLikesCount)}</span>
                        <img src={localIsLiked ? thumbsUpPrimary : thumbsUpGray} className={'w-4 h-4 sm:w-6 sm:h-6'}/>
                    </button>
                    <button
                        onClick={disLikeHandler}
                        className={`flex items-center gap-x-2 py-1 px-2 rounded border ${localIsDisLiked ? 'bg-white border-error text-error' : 'bg-neutral2 border-neutral6'}`}>
                        <span
                            className={'text-xs md:text-sm font-semibold select-none'}>{EnToFaNum(localDisLikesCount)}</span>
                        <img src={localIsDisLiked ? thumbsDownRed : thumbsDownGray} className={'w-4 h-4 sm:w-6 sm:h-6'}/>
                    </button>
                </div>
            </div>
            <div className={'col-start-2 col-end-4 xl:col-end-3 border-t border-t-neutral5 pt-4 flex flex-col items-start gap-y-4'}>
                <div className={'h-7 bg-neutral2 rounded-lg flex items-center gap-x-1 px-2 py-1'}>
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                         className={'w-4 h-4'}>
                        <path
                            d="M7.00033 10.8658L10.6053 13.0416L9.64866 8.94081L12.8337 6.18165L8.63949 5.82581L7.00033 1.95831L5.36116 5.82581L1.16699 6.18165L4.35199 8.94081L3.39533 13.0416L7.00033 10.8658Z"
                            fill="#FFC51A"/>
                    </svg>
                    <span className={'text-sm md:text-base leading-7 text-neutral8'}>{EnToFaNum(rate)}</span>
                </div>
                <p className={'text-sm md:text-base xl:mt-4 text-neutral11 text-start leading-6'}>
                    {comment}
                </p>
            </div>
        </div>
    );
}

export default CommentItem;