import Header from "../components/Header.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

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
        </div>
    );
}

export default UserDashboard;