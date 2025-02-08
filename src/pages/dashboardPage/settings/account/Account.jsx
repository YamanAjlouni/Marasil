import React, { useState } from 'react'
import './Account.scss'
import profile from '../../../../assets/images/dashSettingsImages/profile.png'
import personal from '../../../../assets/images/dashSettingsImages/personal.png'
import bank from '../../../../assets/images/dashSettingsImages/bank.png'
import { Profile } from './profile/Profile'
import { Personal } from './personal/Personal'
import { Bank } from './bank/Bank'

export const Account = () => {
    const [activeTab, setActiveTab] = useState('profile');


    return (
        <div className='account-out-container'>
            <div className='account-top-container'>
                <h3>الملف الشخصي</h3>
            </div>
            <div className='account-bottom-container'>
                <div className='account-bottom-right-container'>
                    <div
                        className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        <img src={profile} alt="" />
                        <div>معلومات الملف الشخصي</div>
                    </div>
                    <div
                        className={`tab ${activeTab === 'personal' ? 'active' : ''}`}
                        onClick={() => setActiveTab('personal')}
                    >
                        <img src={personal} alt="" />
                        <div>البيانات الشخصية</div>
                    </div>
                    <div
                        className={`tab ${activeTab === 'bank' ? 'active' : ''}`}
                        onClick={() => setActiveTab('bank')}
                    >
                        <img src={bank} alt="" />
                        <div>البيانات البنكية</div>
                    </div>
                </div>
                <div className='account-bottom-left-container'>
                    {activeTab == 'profile' && <Profile />}
                    {activeTab == 'personal' && <Personal />}
                    {activeTab == 'bank' && <Bank />}
                </div>
            </div>
        </div>
    )
}
