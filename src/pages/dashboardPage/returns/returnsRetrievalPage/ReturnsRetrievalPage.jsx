import React, { useState } from 'react'
import './ReturnsRetrievalPage.scss'
import { ReturnsRetrievalPageActivation } from './returnsRetrievalPageActivation/ReturnsRetrievalPageActivation';

export const ReturnsRetrievalPage = () => {
    const [activeTab, setActiveTab] = useState('returnsPage');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='returnsRetrievalPage-out-container'>
            <div className='returnsRetrievalPage-right-container'>
                <div className='returnsRetrievalPage-container'
                    onClick={() => handleTabClick('returnsPage')}>
                    <span>1</span>
                    <div>تفعيل صفحة الإسترجاع</div>
                </div>
                <div className='returnsRetrievalPage-container'
                    onClick={() => handleTabClick('returnsPolicy')}>
                    <span>2</span>
                    <div>سياسة الاسترجاع</div>
                </div>
                <div className='returnsRetrievalPage-container'
                    onClick={() => handleTabClick('returnsSettings')}>
                    <span>3</span>
                    <div>الاعدادات</div>
                </div>
                <div className='returnsRetrievalPage-container'
                    onClick={() => handleTabClick('returnsCommunicationPreferences')}>
                    <span>4</span>
                    <div>تفضيلات التواصل</div>
                </div>
                <div className='returnsRetrievalPage-container'
                    onClick={() => handleTabClick('returnsReviewBrandDesign')}>
                    <span>5</span>
                    <div>تخصيص العلامة التجارية</div>
                </div>
                <div className='returnsRetrievalPage-container'
                    onClick={() => handleTabClick('returnsConfigureURL')}>
                    <span>6</span>
                    <div>رابط صفحة الرجيع</div>
                </div>
            </div>
            <div className='returnsRetrievalPage-left-container'>
                {activeTab === 'returnsPage' && <ReturnsRetrievalPageActivation />}
                {activeTab === 'returnsPolicy' && <h1>2</h1>}
                {activeTab === 'returnsSettings' && <h1>3</h1>}
                {activeTab === 'returnsCommunicationPreferences' && <h1>4</h1>}
                {activeTab === 'returnsReviewBrandDesign' && <h1>5</h1>}
                {activeTab === 'returnsConfigureURL' && <h1>6</h1>}

            </div>
        </div>
    )
}
