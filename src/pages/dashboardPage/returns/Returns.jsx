import React, { useState } from 'react'
import './Returns.scss'
import { ReturnsRetrieval } from './returnsRetrieval/ReturnsRetrieval';
import { ReturnsReplacing } from './returnsReplacing/ReturnsReplacing';
import { ReturnsRetrievalPage } from './returnsRetrievalPage/ReturnsRetrievalPage';
import { ReturnsReplacingPage } from './returnsReplcaingPage/ReturnsReplacingPage';

export const Returns = () => {
    const [activeTab, setActiveTab] = useState('retrieval');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='returns-out-container'>
            <div className='returns-top-out-container'>
                <div className='returns-top-container'>
                    <div onClick={() => handleTabClick('retrieval')}
                        className={activeTab === 'retrieval' ? 'active-tab' : ''}>
                        طلب استرجاع
                    </div>
                    <div onClick={() => handleTabClick('replacing')}
                        className={activeTab === 'replacing' ? 'active-tab' : ''}>
                        طلب استبدال
                    </div>
                    <div onClick={() => handleTabClick('retrievalPage')}
                        className={activeTab === 'retrievalPage' ? 'active-tab' : ''}>
                        صفحة الاسترجاع
                    </div>
                    <div onClick={() => handleTabClick('replacingPage')}
                        className={activeTab === 'replacingPage' ? 'active-tab' : ''}>
                        صفحة الاستبدال
                    </div>
                </div>
            </div>
            <div className='returns-content-out-container'>
                    {activeTab === 'retrieval' && <ReturnsRetrieval />}
                    {activeTab === 'replacing' && <ReturnsReplacing />}
                    {activeTab === 'retrievalPage' && <ReturnsRetrievalPage />}
                    {activeTab === 'replacingPage' && <ReturnsReplacingPage />}
            </div>
        </div>
    )
}
