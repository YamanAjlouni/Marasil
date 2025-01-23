import React from 'react'
import './WhyMarasil.scss'
import logo from '../../../assets/images/MARASIL.jpg'
import laptop from '../../../assets/images/laptop2.png'

export const WhyMarasil = () => {
    return (
        <div className='whyMarasil-out-container'>
            <div className='whyMarasil-background'></div>
            <div className='whyMarasil-left-container'>
                <h2>
                    لماذا مراسيل ؟
                </h2>
                <div className="line-container">
                    <div className="line"></div>
                    <div className="line middle"></div>
                    <div className="line"></div>
                </div>
                <div className='whyMarasil-left-details'>
                    <div className='whyMarasil-details'>
                        <img className='logo-of-whyMarasil' src={logo} alt="" />
                        <span>الحصول على أفضل أسعار الشحن لجميع الوجهات</span>
                    </div>
                    <div className='whyMarasil-details'>
                        <img className='logo-of-whyMarasil' src={logo} alt="" />
                        <span>الربط مع شركات شحن ذات مستويات خدمة مختلفة</span>
                    </div>
                    <div className='whyMarasil-details'>
                        <img className='logo-of-whyMarasil' src={logo} alt="" />
                        <span>الربط مع اكثر من شركة شحن بخطوة واحدة</span>
                    </div>
                    <div className='whyMarasil-details'>
                        <img className='logo-of-whyMarasil' src={logo} alt="" />
                        <span>المزامنة الفورية مع متجرك لجلب كافة الطلبات وإنهاء إجراءات الشحن</span>
                    </div>
                    <div className='whyMarasil-details'>
                        <img className='logo-of-whyMarasil' src={logo} alt="" />
                        <span>تسريع عملية اختيار الشاحن وطباعة البوالص بأتمتة الشحنات</span>
                    </div>
                    <div className='whyMarasil-details'>
                        <img className='logo-of-whyMarasil' src={logo} alt="" />
                        <span>إستعراض خيارات متعددة للتسليم في نفس اليوم.</span>
                    </div>
                    <div className='whyMarasil-details'>
                        <img className='logo-of-whyMarasil' src={logo} alt="" />
                        <span>التعرف على جميع تكاليف الشحن والرجيع</span>
                    </div>
                </div>
            </div>
            <div className='whyMarasil-right-container'>
                <img src={laptop} alt="" />
            </div>
        </div>
    )
}
