import React, { useEffect, useRef } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import userImage from '../../../../../assets/images/dashSettingsImages/userImage.jpg'
import './Profile.scss'


export const Profile = () => {
    const phoneInputRef = useRef(null);

    useEffect(() => {
        const input = phoneInputRef.current;

        const iti = intlTelInput(input, {
            initialCountry: 'sa',
            onlyCountries: ['sa', 'bh', 'kw', 'ae', 'eg', 'om', 'qa'],
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
            separateDialCode: true,
        });

        return () => {
            iti.destroy();
        };
    }, []);

    return (
        <div className='profile-out-container'>
            <div className='profile-top-container'>
                <img src={userImage} alt="" />
                <div>
                    <button className='profile-top-edit-button'>تغيير</button>
                    <button className='profile-top-delete-button'>حذف</button>
                </div>
            </div>
            <div className='profile-bottom-container'>
                <div className='profile-form-out-container'>
                    <div className='form-field-container'>
                        <div className="label-container">
                            <label htmlFor="firstName">الاسم الاول</label>
                            <span className="required">*</span>
                        </div>
                        <div className="input-container">
                            <input type="text" id="firstName" name="firstName" />
                        </div>
                    </div>
                    <div className='form-field-container'>
                        <div className="label-container">
                            <label htmlFor="lastName">اسم العائلة</label>
                            <span className="required">*</span>
                        </div>
                        <div className="input-container">
                            <input type="text" id="lastName" name="lastName" />
                        </div>
                    </div>
                    <div className='form-field-container'>
                        <div className="label-container">
                            <label htmlFor="email">الايميل الالكتروني</label>
                            <span className="required">*</span>
                        </div>
                        <div className="input-container">
                            <input type="text" id="email" name="email" />
                        </div>
                    </div>
                    <div className='form-field-container'>
                        <div className="label-container">
                            <label htmlFor="phoneNumber">رقم الجوال</label>
                            <span className="required">*</span>
                        </div>
                        <div className="phone-input-container">
                            <input
                                ref={phoneInputRef}
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="phone-input"
                            />
                        </div>
                    </div>
                    <div className='form-field-container'>
                        <div className="label-container">
                            <label htmlFor="companyName">اسم الشركة</label>
                        </div>
                        <div className="input-container">
                            <input type="text" id="companyName" name="companyName" />
                        </div>
                    </div>
                    <div className='form-field-container'>
                        <div className="label-container">
                            <label htmlFor="storeName">اسم المتجر</label>
                        </div>
                        <div className="input-container">
                            <input type="text" id="storeName" name="storeName" />
                        </div>
                    </div>
                </div>
                <div className='profile-bottom-save-container'>
                    <a>حفظ</a>
                </div>
            </div>
        </div>
    )
}
