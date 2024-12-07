import {useEffect, useState} from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function ProductPage() {
    const productId = window.location.pathname.split('/')[2]
    const [productDetails, setProductDetails] = useState(null)

    useEffect(() => {
        setProductDetails({})
    }, []);

    return (
        <>
            <div className={'container'}>
                <Header/>
            </div>
            <Footer/>
        </>
    );
}

export default ProductPage;