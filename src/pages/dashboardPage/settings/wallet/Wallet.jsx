import React, { useState } from 'react'
import './Wallet.scss'
import { WalletBalance } from './walletBalance/WalletBalance'
import { WalletHistory } from './walletHistory/WalletHistory'
import { WalletPromo } from './walletPromo/WalletPromo'
import { WalletCOD } from './walletCOD/WalletCOD'

export const Wallet = () => {
    const [activeTab, setActiveTab] = useState('walletBalance')

    return (
        <div className='wallet-out-container'>
            <div className='wallet-top-container'>
                <h3>المحفظة</h3>
            </div>
            <div className='wallet-middle-out-container'>
                <div className='wallet-middle-container'>
                    <div
                        className={`wallet-details ${activeTab === 'walletBalance' ? 'active-tab' : ''}`}
                        onClick={() => setActiveTab('walletBalance')}
                    >
                        الرصيد
                    </div>
                    <div
                        className={`wallet-details ${activeTab === 'walletHistory' ? 'active-tab' : ''}`}
                        onClick={() => setActiveTab('walletHistory')}
                    >
                        سجل العمليات
                    </div>
                    <div
                        className={`wallet-details ${activeTab === 'walletPromo' ? 'active-tab' : ''}`}
                        onClick={() => setActiveTab('walletPromo')}
                    >
                        الرمز الترويجي
                    </div>
                    <div
                        className={`wallet-details ${activeTab === 'walletCOD' ? 'active-tab' : ''}`}
                        onClick={() => setActiveTab('walletCOD')}
                    >
                        دفع عند الاستلام
                    </div>
                </div>
            </div>
            <div className='wallet-bottom-out-container'>
                {activeTab == 'walletBalance' && <WalletBalance />}
                {activeTab == 'walletHistory' && <WalletHistory />}
                {activeTab == 'walletPromo' && <WalletPromo />}
                {activeTab == 'walletCOD' && <WalletCOD />}
            </div>
        </div>
    )
}
