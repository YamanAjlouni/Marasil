import React, { useState } from 'react';
import './Store.scss';
import defaultLogo from '../../../../assets/images/MARASIL.jpg';

export const Store = () => {
    const [logo, setLogo] = useState(defaultLogo);
    const [color, setColor] = useState('#1B2F50');
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        websiteLink: '',
        facebookLink: '',
        instagramLink: '',
        twitterLink: '',
        linkedinLink: '',
        snapchatLink: '',
        youtubeLink: '',
    });

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setLogo(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const isFormValid = formData.companyName.trim() !== '' && formData.email.trim() !== '' && formData.websiteLink.trim() !== '';

    const handleSave = () => {
        if (!isFormValid) return;

        const storeData = {
            logo,
            color,
            ...formData,
        };
        console.log('Saved Data:', storeData);
        // يمكنك إرسال storeData إلى API هنا
    };

    return (
        <div className='store-out-container'>
            <div className='store-top-container'>
                <h3>العلامة التجارية</h3>
                <p>تساعد علامتك التجارية في تخصيص صفحات التتبع ورسائل البريد الإلكتروني المرسلة لعملائك من مراسيل</p>
            </div>
            <div className='store-bottom-container'>
                <div className='store-bottom-right-container'>
                    <div className='store-bottom-right-company-logo-container'>
                        <span>شعار علامتك التجارية</span>
                        <div className='store-bottom-right-company-logo'>
                            <img src={logo} alt="Your logo" />
                            <input type="file" id="logo-upload" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
                            <span
                                onClick={() => document.getElementById('logo-upload').click()}
                                className="upload-button"
                            >
                                رفع لوغو
                            </span>
                        </div>
                    </div>
                    <div className='store-bottom-right-company-details'>
                        <span>تفاصيل الشركة</span>
                        <div className='store-bottom-right-company-details-form-out-container'>
                            {['companyName', 'email', 'websiteLink'].map((field, index) => (
                                <div className='store-bottom-right-company-forms-container' key={index}>
                                    <div className="label-container">
                                        <label htmlFor={field}>{field === 'companyName' ? 'اسم الشركة' : field === 'email' ? 'البريد الإلكتروني' : 'رابط الموقع'}</label>
                                        <span className="required">*</span>
                                    </div>
                                    <div className="input-container">
                                        <input type="text" id={field} value={formData[field]} onChange={handleInputChange} placeholder={`${field}`} required />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='store-bottom-left-container'>
                    <div className='store-bottom-left-color-container'>
                        <span>لون علامتك التجارية</span>
                        <div className="color-picker-container">
                            <label htmlFor="branding_form_brand_color" className="color-picker">
                                <input
                                    type="color"
                                    id="branding_form_brand_color"
                                    name="branding_form[brand_color]"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    className="color-input"
                                />
                                <span className="color-label">{color}</span>
                            </label>
                        </div>
                    </div>
                    <div className='store-bottom-left-social-media-container'>
                        <span>حسابات التواصل الاجتماعي</span>
                        <div className='store-bottom-left-social-media-form-out-container'>
                            {['facebookLink', 'instagramLink', 'twitterLink', 'linkedinLink', 'snapchatLink', 'youtubeLink'].map((field, index) => (
                                <div className='store-bottom-left-social-media-forms-container' key={index}>
                                    <div className="label-container">
                                        <label htmlFor={field}>{field.replace('Link', '')}</label>
                                    </div>
                                    <div className="input-container">
                                        <input type="text" id={field} value={formData[field]} onChange={handleInputChange} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="store-save-button-container">
                        <button onClick={handleSave} disabled={!isFormValid}>حفظ</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
