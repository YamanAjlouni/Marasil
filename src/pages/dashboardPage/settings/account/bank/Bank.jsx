import React from 'react';
import './Bank.scss'

export const Bank = () => {
    return (
        <div className="bank-out-container">
            <h5>البيانات البنكية</h5>
            <div className="bank-top-container-details">
                <div className="form-field-container">
                    <div className="label-container">
                        <label htmlFor="bank-name">اسم المصرف</label>
                    </div>
                    <div className="input-container">
                        <input type="text" id="bank-name" placeholder="اسم المصرف" />
                    </div>
                </div>
                <div className="form-field-container">
                    <div className="label-container">
                        <label htmlFor="institution-name">اسم المؤسسة / الحساب</label>
                    </div>
                    <div className="input-container">
                        <input type="text" id="institution-name" placeholder="اسم المؤسسة / الحساب" />
                    </div>
                </div>
                <div className="form-field-container">
                    <div className="label-container">
                        <label htmlFor="iban">رقم الآيبان IBAN</label>
                    </div>
                    <div className="input-container">
                        <input type="text" id="iban" placeholder="رقم الآيبان IBAN" />
                    </div>
                </div>
                <div className="form-field-container">
                    <div className="label-container">
                        <label htmlFor="iban-letter">رفع خطاب الآيبان</label>
                    </div>
                    <div className="input-container">
                        <input
                            type="file"
                            id="iban-letter"
                            placeholder="رفع خطاب الآيبان"
                        />
                    </div>
                </div>
            </div>
            <div className="button-container">
                <a type="submit">حفظ</a>
            </div>
        </div>
    );
}
