import {useEffect, useState} from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import BreadCrumb from "../components/Breadcrumb.jsx";

function ProductPage() {
    const productId = window.location.pathname.split('/')[2]
    const [productDetails, setProductDetails] = useState(null)
    const [breadcrumbs, setBreadcrumbs] = useState(null)

    useEffect(() => {
        setProductDetails({})
        setBreadcrumbs([
            {name: 'گیاه طبیعی', url: '/category/natural-plants'},
            {name: 'گیاه یوکا'}
        ])
    }, []);

    return (
        <>
            <div className={'container'}>
                <Header/>
                <div className={'mt-2 sm:mt-4 md:mt-6'}>
                    <BreadCrumb breadcrumbs={breadcrumbs ?? []}/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ProductPage;