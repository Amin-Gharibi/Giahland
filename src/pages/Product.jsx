import {useEffect, useState} from 'react';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import BreadCrumb from "../components/Breadcrumb.jsx";
import ProductImagesSlider from "../components/ProductImagesSlider.jsx";
import tempImage1 from "../assets/images/fourthBgImage.png";
import tempImage2 from "../assets/images/firstBgImage.png";
import tempImage3 from "../assets/images/secondBgImage.png";
import tempImage4 from "../assets/images/thirdBgImage.png";
import tempImage5 from "../assets/images/extraBgImage.png";
import tempImage6 from "../assets/images/loginBgImage.png";

function Product() {
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
                    <div className={'sm:mt-10 md:mt-16 lg:mt-[90px] flex items-start'}>
                        <div className={'w-full lg:w-[450px] h-[500px]'}>
                            <ProductImagesSlider images={[
                                tempImage1, tempImage2, tempImage3, tempImage4, tempImage5, tempImage6
                            ]}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Product;