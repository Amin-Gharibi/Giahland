import PropTypes from 'prop-types';
import EnToFaNum from "../utils/EnToFaNum.js";
import {useNavigate} from "react-router-dom";
import arrowLeftIcon from "../assets/svg/arrowLeft-gray.svg";

ChatPreviewItem.propTypes = {
    chatId: PropTypes.string.isRequired,
    prof: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    unreadMessagesCount: PropTypes.number
};

function ChatPreviewItem({chatId, prof, title, unreadMessagesCount}) {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(`/dashboard/messages/${chatId}`)
    }

    return (
        <button onClick={clickHandler} className={'w-full flex justify-between items-center px-4 sm:px-6 py-3 border border-neutral3 hover:bg-neutral2 transition-colors rounded-2xl'}>
            <div className={'flex items-center gap-x-2.5'}>
                <img src={prof} alt={title} className={'w-12 h-12 sm:w-[60px] sm:h-[60px] rounded-full object-cover bg-center'}/>
                <div className={'flex flex-col items-start gap-y-1'}>
                    <span className={'text-sm sm:text-base font-medium text-neutral12'}>{title}</span>
                    {unreadMessagesCount && <span className={'text-xs sm:text-sm text-neutral9'}>{EnToFaNum(unreadMessagesCount)} پیام خوانده نشده</span> || ''}
                </div>
            </div>
            <img src={arrowLeftIcon} className={'w-6 h-6'}/>
        </button>
    );
}

export default ChatPreviewItem;