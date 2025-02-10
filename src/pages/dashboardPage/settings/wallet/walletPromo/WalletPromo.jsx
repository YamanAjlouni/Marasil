import React, { useState } from 'react';
import './WalletPromo.scss';
import { Calendar } from 'primereact/calendar';
import Select from 'react-select';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export const WalletPromo = () => {
    const [promoCode, setPromoCode] = useState('');
    const [dates, setDates] = useState(null);
    const [rowsPerPage, setRowsPerPage] = useState({ value: 10, label: '10' });


    const handleInputChange = (e) => {
        setPromoCode(e.target.value);
    };

    const rowsOptions = [
        { value: 10, label: '10' },
        { value: 25, label: '25' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
    ];

    const dummyData = [
        {
            promoCode: "DISCOUNT50",
            discount: "50",
            addedDate: "2025-02-09",
            expiryDate: "2025-12-31",
            action: "حذف"
        },
        {
            promoCode: "SAVE10",
            discount: "10",
            addedDate: "2025-01-20",
            expiryDate: "2025-11-15",
            action: "تعديل"
        }
    ];
    

    return (
        <div className='walletPromo-out-container'>
            <div className='walletPromo-container'>
                <div className='walletPromo-top-container'>
                    <h3>الرمز الترويجي</h3>
                    <span>لديك رمز ترويجي؟ استخدمه الآن:</span>
                </div>
                <div className='walletPromo-input-container'>
                    <input
                        type="text"
                        className='walletPromo-input-text'
                        value={promoCode}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='walletPromo-button-container'>
                    <a className={promoCode ? 'active' : 'disabled'}>تطبيق</a>
                </div>
            </div>
            <div className='walletPromo-history-container'>
                <div className='walletPromo-history-top-container'>
                    سجل الرموز الترويجية
                </div>
                <div className='filters-container'>
                    <div className='filter-item'>
                        <label>فلترة:</label>
                        <input type="text" />
                    </div>

                    <div className="walletPromo-date-picker">
                        <label>التاريخ:</label>
                        <Calendar
                            value={dates}
                            onChange={(e) => setDates(e.value)}
                            selectionMode="range"
                            dateFormat="mm/dd/yy"
                            placeholder="تاريخ الإنشاء"
                            showButtonBar
                            className="walletPromo-calender custom-calendar"
                            panelClassName="custom-calendar-panel"
                            showIcon
                            icon="pi pi-calendar"
                        />
                    </div>

                    <div className='filter-item'>
                        <label>طلب لكل صفحة:</label>
                        <Select
                            options={rowsOptions}
                            value={rowsPerPage}
                            onChange={setRowsPerPage}
                            placeholder="عدد الصفوف"
                            isSearchable
                        />
                    </div>
                </div>
                <div className='walletPromo-history-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>الرمز الترويجي</th>
                                <th>الخصم (SAR)</th>
                                <th>تاريخ الإضافة</th>
                                <th>تاريخ الانتهاء</th>
                                <th>الإجراء</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.promoCode}</td>
                                    <td>{row.discount}</td>
                                    <td>{row.addedDate}</td>
                                    <td>{row.expiryDate}</td>
                                    <td>{row.action}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    );
};
