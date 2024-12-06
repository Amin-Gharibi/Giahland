import Header from "../../components/Header.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import MobileDynamicContent from "./Mobile/MobileDynamicContent.jsx";
import DesktopDynamicContent from "./Desktop/DesktopDynamicContent.jsx";

function UserDashboard() {
    const navigate = useNavigate()
    const isAuth = true // logic will be filled later

    useEffect(() => {
        if (!isAuth) {
            navigate('/login')
        }
    }, [isAuth, navigate]);

    return (
        <div className={'container'}>
            <Header/>
            <div className={'md:hidden'}>
                <MobileDynamicContent/>
            </div>
            <div className={'max-md:hidden'}>
                <DesktopDynamicContent/>
            </div>
        </div>
    );
}

export default UserDashboard;