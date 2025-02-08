import React, { useState } from 'react'
import './ReturnsReplacingPage.scss'
import { ReturnsReplacingPageActivation } from './ReturnsReplacingPageActivation/ReturnsReplacingPageActivation';

export const ReturnsReplacingPage = () => {
    const [activeTab, setActiveTab] = useState('returnsPage');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='returnsReplacingPage-out-container'>
            <div className='returnsReplacingPage-right-container'>
                <div className='returnsReplacingPage-container'
                    onClick={() => handleTabClick('returnsPage')}>
                    <span>1</span>
                    <div>تفعيل صفحة الاستبدال</div>
                </div>
                <div className='returnsReplacingPage-container'
                    onClick={() => handleTabClick('returnsPolicy')}>
                    <span>2</span>
                    <div>سياسة الاسترجاع</div>
                </div>
                <div className='returnsReplacingPage-container'
                    onClick={() => handleTabClick('returnsSettings')}>
                    <span>3</span>
                    <div>الاعدادات</div>
                </div>
                <div className='returnsReplacingPage-container'
                    onClick={() => handleTabClick('returnsCommunicationPreferences')}>
                    <span>4</span>
                    <div>تفضيلات التواصل</div>
                </div>
                <div className='returnsReplacingPage-container'
                    onClick={() => handleTabClick('returnsReviewBrandDesign')}>
                    <span>5</span>
                    <div>تخصيص العلامة التجارية</div>
                </div>
                <div className='returnsReplacingPage-container'
                    onClick={() => handleTabClick('returnsConfigureURL')}>
                    <span>6</span>
                    <div>رابط صفحة الرجيع</div>
                </div>
            </div>
            <div className='returnsReplacingPage-left-container'>
                {activeTab === 'returnsPage' && <ReturnsReplacingPageActivation />}
                {activeTab === 'returnsPolicy' && <h1>2</h1>}
                {activeTab === 'returnsSettings' && <h1>3</h1>}
                {activeTab === 'returnsCommunicationPreferences' && <h1>4</h1>}
                {activeTab === 'returnsReviewBrandDesign' && <h1>5</h1>}
                {activeTab === 'returnsConfigureURL' && <h1>6</h1>}

            </div>
        </div>
    )
}
