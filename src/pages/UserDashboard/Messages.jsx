import DashboardSectionTitle from "../../components/DashboardSectionTitle.jsx";
import {useEffect, useState} from "react";
import tempProf from "../../assets/images/fourthBgImage.png";
import ChatPreviewItem from "../../components/ChatPreviewItem.jsx";

function Messages() {
    const [chats, setChats] = useState([])
    useEffect(() => {
        // **** load data from server
        // mock data
        setChats([
            {chatId: '1', title: 'دکتر ورمزیار', prof: tempProf, unreadMessagesCount: 1},
            {chatId: '2', title: 'دکتر هرت', prof: tempProf, unreadMessagesCount: 0},
            {chatId: '3', title: 'دکتر چرت', prof: tempProf, unreadMessagesCount: 3},
            {chatId: '4', title: 'دکتر پرت', prof: tempProf, unreadMessagesCount: 2},
        ])
    }, []);

    return (
        <div className={'pt-6 md:pt-10 md:pr-6'}>
            <DashboardSectionTitle title={'پیام‌های دریافتی'}/>
            <div className={'mt-4 flex flex-col gap-y-5 w-full'}>
                {chats.map((chat, index) => (
                    <ChatPreviewItem key={index} {...chat}/>
                ))}
            </div>
        </div>
    );
}

export default Messages;