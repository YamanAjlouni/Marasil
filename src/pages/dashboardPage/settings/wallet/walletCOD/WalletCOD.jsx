import React, { useState } from 'react'
import { Calendar } from 'primereact/calendar';
import Select from 'react-select';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './WalletCOD.scss'

export const WalletCOD = () => {
    const [dates, setDates] = useState(null);
    const [firstDate, setFirstDate] = useState(null);
    const [secondDate, setSecondDate] = useState(null);
    const [carrier, setCarrier] = useState(null);
    const [textInput1, setTextInput1] = useState('');
    const [textInput2, setTextInput2] = useState('');
    const [textInput3, setTextInput3] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState({ value: 10, label: '10' });

    const carrierOptions = [
        { value: '', label: 'الكل' },
        { value: 'ناقل 1', label: 'ناقل 1' },
        { value: 'ناقل 2', label: 'ناقل 2' },
        { value: 'ناقل 3', label: 'ناقل 3' },
    ];

    const rowsOptions = [
        { value: 10, label: '10' },
        { value: 25, label: '25' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
    ];

    const dummyData = [
        {
            shipmentDetails: 'طلب #10234 - هاتف محمول',
            underReview: '2 شحنات',
            collected: '1500 SAR',
            transferred: '1000 SAR',
        },
        {
            shipmentDetails: 'طلب #10235 - لابتوب ديل',
            underReview: '1 شحنة',
            collected: '3500 SAR',
            transferred: '3000 SAR',
        },
        {
            shipmentDetails: 'طلب #10236 - سماعات بلوتوث',
            underReview: '3 شحنات',
            collected: '900 SAR',
            transferred: '850 SAR',
        },
    ];
    

    return (
        <div className='walletCOD-out-container'>
            <div className='walletCOD-summary-container'>
                <div className='walletCOD-summary-top-container'>
                    <h3>ملخص الطلب</h3>
                    <div className="walletCOD-summary-date-picker">
                        <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" dateFormat="mm/dd/yy" placeholder="فرز حسب التاريخ" showButtonBar className="walletCOD-calender custom-calendar" panelClassName="custom-calendar-panel" showIcon icon="pi pi-calendar"
                        />
                    </div>
                </div>
                {/* Rating Spinners */}
                <div className="walletCOD-summary-rating-container">
                    <div className="rating-box">
                        <div className="progress" data-percentage="100">
                            <span className="progress-left">
                                <span className="progress-bar color_04"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar color_04"></span>
                            </span>
                            <div className="progress-value">
                                <div id="inTransitTotal">0</div>
                            </div>
                        </div>
                        <a className="text-black pl-sm" href="javascript:void(0);">قيد المراجعة</a>
                    </div>

                    <div className="rating-box">
                        <div className="progress" data-percentage="100">
                            <span className="progress-left">
                                <span className="progress-bar color_03"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar color_03"></span>
                            </span>
                            <div className="progress-value">
                                <div id="deliveredTotal">0</div>
                            </div>
                        </div>
                        <a className="text-black pl-sm" href="javascript:void(0);">تم التحصيل</a>
                    </div>

                    <div className="rating-box">
                        <div className="progress" data-percentage="100">
                            <span className="progress-left">
                                <span className="progress-bar color_01"></span>
                            </span>
                            <span className="progress-right">
                                <span className="progress-bar color_01"></span>
                            </span>
                            <div className="progress-value">
                                <div id="transferredTotal">0</div>
                            </div>
                        </div>
                        <a className="text-black pl-sm" href="javascript:void(0);">تم التحويل</a>
                    </div>
                </div>
            </div>
            <div className='walletCOD-filter-container'>
                <div className='walletCOD-filter-top-title'>
                    <h3>فلترة</h3>
                </div>
                {/* <div className='walletCOD-filter-images'>
                    فلتر:
                </div> */}
                <div className='walletCOD-filter-inputs-form'>
                    <div className="filter-item">
                        <Calendar
                            value={firstDate}
                            onChange={(e) => setFirstDate(e.value)}
                            dateFormat="mm/dd/yy"
                            placeholder="تصفية حسب تاريخ الفرز"
                            showButtonBar
                            className="walletCOD-calendar custom-calendar"
                            panelClassName="custom-calendar-panel"
                            showIcon
                            icon="pi pi-calendar"
                        />
                    </div>

                    <div className="filter-item">
                        <Calendar
                            value={secondDate}
                            onChange={(e) => setSecondDate(e.value)}
                            dateFormat="mm/dd/yy"
                            placeholder="تصفية حسب تاريخ المغادرة"
                            showButtonBar
                            className="walletCOD-calendar custom-calendar"
                            panelClassName="custom-calendar-panel"
                            showIcon
                            icon="pi pi-calendar"
                        />
                    </div>

                    <div className="filter-item">
                        <Select
                            options={carrierOptions}
                            value={carrier}
                            onChange={setCarrier}
                            placeholder="فلترة حسب الناقل"
                            isSearchable
                        />
                    </div>

                    {/* Normal Text Inputs */}
                    <div className="filter-item">
                        <input
                            type="text"
                            value={textInput1}
                            onChange={(e) => setTextInput1(e.target.value)}
                            placeholder="بيانات العميل"
                        />
                    </div>

                    <div className="filter-item">
                        <input
                            type="text"
                            value={textInput2}
                            onChange={(e) => setTextInput2(e.target.value)}
                            placeholder="رقم التتبع"
                        />
                    </div>

                    <div className="filter-item">
                        <input
                            type="text"
                            value={textInput3}
                            onChange={(e) => setTextInput3(e.target.value)}
                            placeholder="رقم الأمر"
                        />
                    </div>
                </div>
                <div className='walletCOD-filter-bottom-container'>
                    <div className='walletCOD-filter-pages-per-row-container'>
                        <label>طلب لكل صفحة:</label>
                        <Select
                            options={rowsOptions}
                            value={rowsPerPage}
                            onChange={setRowsPerPage}
                            placeholder="عدد الصفوف"
                            isSearchable
                        />
                    </div>
                    <div className='walletCOD-filter-buttons-container'>
                        <a>تصدير</a>
                        <a>Clear</a>
                    </div>
                </div>
                <div className='walletCOD-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>تفاصيل الشحنة</th>
                                <th>قيد المراجعة</th>
                                <th>تم التحصيل</th>
                                <th>تم التحويل</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dummyData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.shipmentDetails}</td>
                                    <td>{row.underReview}</td>
                                    <td>{row.collected}</td>
                                    <td>{row.transferred}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
