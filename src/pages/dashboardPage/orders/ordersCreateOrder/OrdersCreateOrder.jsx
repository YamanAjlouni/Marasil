import React from 'react'
import './OrdersCreateOrder.scss'
import salla from '../../../../assets/images/dashOrdersImages/salla-store-logo.png'
import zid from '../../../../assets/images/dashOrdersImages/zid-store-logo-ar.png'
import woocommerce from '../../../../assets/images/dashOrdersImages/woocommerce-store-logo.png'
import shopify from '../../../../assets/images/dashOrdersImages/shopify-store-logo.png'
import magento from '../../../../assets/images/dashOrdersImages/magento-store-logo.png'
import mnasati from '../../../../assets/images/dashOrdersImages/mnasati-store-logo.png'
import makane from '../../../../assets/images/dashOrdersImages/makane-store-logo-ar.png'
import opencart from '../../../../assets/images/dashOrdersImages/opencart-store-logo.png'
import aitech from '../../../../assets/images/dashOrdersImages/aitech-store-logo.png'
import omniful from '../../../../assets/images/dashOrdersImages/omniful-store-logo.png'
import returnPlus from '../../../../assets/images/dashOrdersImages/return-plus-store-logo.png'
import zoodn from '../../../../assets/images/dashOrdersImages/zoodn-store-logo.png'

export const OrdersCreateOrder = () => {
    const images = [
        { imgName: salla, link: 'https://zid.sa/ar' },
        { imgName: zid, link: 'https://zid.sa/ar' },
        { imgName: woocommerce, link: 'zid' },
        { imgName: shopify, link: 'zid' },
        { imgName: magento, link: 'zid' },
        { imgName: mnasati, link: 'zid' },
        { imgName: makane, link: 'zid' },
        { imgName: opencart, link: 'zid' },
        { imgName: aitech, link: 'zid' },
        { imgName: omniful, link: 'zid' },
        { imgName: returnPlus, link: 'zid' },
        { imgName: zoodn, link: 'zid' },
    ]


    return (
        <div className='ordersCreateOrder-out-container'>
            <h3>
                إنشاء طلب بواسطة
            </h3>
            <div className='ordersCreateOrder-connect-shop-container'>
                <div>
                    <b>اربط متجرك</b>
                </div>
                <div>
                    اختر متجرك الإلكتروني للربط ومزامنة الطلبات
                </div>
                <div className='ordersCreateOrder-connect-out-container'>
                    {images?.map((img) => (
                        <a className='ordersCreateOrder-connect-image-container' href={img.link} key={img.link}>
                            <img src={img.imgName} alt="" />
                        </a>
                    ))}
                </div>

            </div>
            <div className='ordersCreateOrder-bottom-out-container'>
                <div className='ordersCreateOrder-bottom-right-container'>
                    <div>
                        مجموعة شحنات
                    </div>
                    <div>
                        رفع عدة طلبات في ملف CSV واحد
                    </div>
                    <div>
                        <button className='ordersCreateOrder-bottom-button'>رفع ملف</button>
                    </div>
                </div>
                <div className='ordersCreateOrder-bottom-left-container'>
                    <div>
                        يدويا
                    </div>
                    <div>
                        إنشاء بوليصة شحن مفردة واكمال البيانات
                    </div>
                    <div>
                        <button className='ordersCreateOrder-bottom-button'>إنشاء شحنة</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
