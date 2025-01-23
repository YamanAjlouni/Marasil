import React, { useState } from 'react'
import './ShipmentsSection.scss'
import shipperCompany1 from '../../../assets/images/shipperCompanies/shipper-company1.jpg'
import shipperCompany2 from '../../../assets/images/shipperCompanies/shipper-company2.jpg'
import shipperCompany3 from '../../../assets/images/shipperCompanies/shipper-company3.jpg'
import shipperCompany4 from '../../../assets/images/shipperCompanies/shipper-company4.jpg'
import shipperCompany5 from '../../../assets/images/shipperCompanies/shipper-company5.jpg'
import storeCompany1 from '../../../assets/images/storeCompanies/store-1.jpg'
import storeCompany2 from '../../../assets/images/storeCompanies/store-2.jpg'
import storeCompany3 from '../../../assets/images/storeCompanies/store-3.jpg'
import storeCompany4 from '../../../assets/images/storeCompanies/store-4.jpg'
import storeCompany5 from '../../../assets/images/storeCompanies/store-5.jpg'
import phoneVideo from '../../../assets/video/marasil-video.mp4'
import phoneVideoWebm from '../../../assets/video/marasil-video.webm'
import SpinnerLoader from '../../../components/spinnerLoader/SpinnerLoader'

export const ShipmentsSection = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);


    return (
        <div className='shipments-out-container'>
            <div className='shipments-top-container'>
                <h2>جميع شحناتك في منصة واحدة</h2>
                <div className="line-container">
                    <div className="line"></div>
                    <div className="line middle"></div>
                    <div className="line"></div>
                </div>
            </div>
            <div className='shipments-bottom-container'>
                <div className='shipments-details-container'>
                    <div className='shipments-details'>
                        <h4>شركات الشحن</h4>
                        <img src={shipperCompany1} alt="" />
                        <img src={shipperCompany2} alt="" />
                        <img src={shipperCompany3} alt="" />
                        <img src={shipperCompany4} alt="" />
                        <img src={shipperCompany5} alt="" />
                    </div>
                </div>
                <div className="shipments-phone">
                    {!isVideoLoaded && <SpinnerLoader />}
                    <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        onLoadedData={() => setIsVideoLoaded(true)}
                        style={{ display: isVideoLoaded ? 'block' : 'none' }}
                    >
                        <source src={phoneVideo} type="video/mp4" />  {/* Main format */}
                        <source src={phoneVideoWebm} type="video/webm" />  {/* Modern fallback */}
                        <source src="path-to-video.ogv" type="video/ogg" />  {/* Legacy fallback */}
                        Your browser does not support the video tag.
                    </video>
                </div>


                <div className='shipments-details-container'>
                    <div className='shipments-details'>
                        <h4>متجر الكتروني</h4>
                        <img src={storeCompany1} alt="" />
                        <img src={storeCompany2} alt="" />
                        <img src={storeCompany3} alt="" />
                        <img src={storeCompany4} alt="" />
                        <img src={storeCompany5} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
