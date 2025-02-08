import React from 'react';
import './Personal.scss';

export const Personal = () => {
    return (
        <div className='personal-out-container'>
            {/* General Information Section */}
            <div className='personal-top-container'>
                <h5>معلومات عامة</h5>
                <div className="personal-top-container-details">
                    <div className="form-field-container">
                        <div className="label-container">
                            <label htmlFor="country">الدولة</label>
                            <span className="required">*</span>
                        </div>
                        <div className="input-container">
                            <select id="country" name="country">
                                <option value="" disabled selected>اختر الدولة</option>
                                <option value="sa">السعودية</option>
                                <option value="qa">قطر</option>
                                <option value="eg">مصر</option>
                                <option value="om">عمان</option>
                                <option value="ae">الإمارات</option>
                                <option value="bh">البحرين</option>
                                <option value="kw">الكويت</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-field-container">
                        <div className="label-container">
                            <label htmlFor="accountType">نوع الحساب</label>
                            <span className="required">*</span>
                        </div>
                        <div className="input-container">
                            <select id="accountType" name="accountType">
                                <option value="" disabled selected>اختر نوع الحساب</option>
                                <option value="personal">شخصي</option>
                                <option value="business">تجاري</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className='personal-bottom-container'>
                <h5>معلومات الفوترة</h5>
                <div className="personal-bottom-container-details">
                    {[
                        { id: "firstNameAr", label: "الاسم الأول باللغة العربية", placeholder: "أدخل الاسم الأول" },
                        { id: "lastNameAr", label: "الاسم الأخير باللغة العربية", placeholder: "أدخل الاسم الأخير" },
                        { id: "firstNameEn", label: "الاسم الأول باللغة الإنجليزية", placeholder: "Enter first name" },
                        { id: "lastNameEn", label: "الاسم الأخير باللغة الإنجليزية", placeholder: "Enter last name" },
                        { id: "idNumber", label: "رقم الهوية / الإقامة", placeholder: "أدخل رقم الهوية / الإقامة" }
                    ].map((field) => (
                        <div className="form-field-container" key={field.id}>
                            <div className="label-container">
                                <label htmlFor={field.id}>{field.label}</label>
                                <span className="required">*</span>
                            </div>
                            <div className="input-container">
                                <input type="text" id={field.id} name={field.id} placeholder={field.placeholder} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="button-container">
                    <button type="submit">إرسال</button>
                </div>
            </div>
        </div>
    );
};
