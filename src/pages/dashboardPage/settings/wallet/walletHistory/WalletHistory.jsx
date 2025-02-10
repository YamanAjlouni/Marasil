import React, { useState } from 'react';
import './WalletHistory.scss';
import { Calendar } from 'primereact/calendar';
import Select from 'react-select';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export const WalletHistory = () => {
    const [dates, setDates] = useState(null);
    const [transactionType, setTransactionType] = useState(null);
    const [rowsPerPage, setRowsPerPage] = useState({ value: 10, label: '10' });

    const transactionOptions = [
        { value: '', label: 'الكل' },
        { value: 'الصرف', label: 'الصرف' },
        { value: 'الإيداع', label: 'الإيداع' },
        { value: 'طلب مرفوض', label: 'طلب مرفوض' },
    ];

    const rowsOptions = [
        { value: 10, label: '10' },
        { value: 25, label: '25' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
    ];

    const dummyData = [
        {
            dateTime: '2024-02-09 14:30',
            amount: '200.00',
            type: 'الإيداع',
            balance: '1,500.00',
            details: 'إضافة رصيد',
            orderId: '123456',
            invoice: 'INV-987654',
        },
        {
            dateTime: '2024-02-08 12:15',
            amount: '-50.00',
            type: 'الصرف',
            balance: '1,300.00',
            details: 'دفع فاتورة',
            orderId: '123457',
            invoice: 'INV-987655',
        },
    ];

    return (
        <div className='walletHistory-out-container'>
            <h3>سجل العمليات</h3>

            <div className='filters-container'>
                <div className='filter-item'>
                    <label>عمليات:</label>
                    <Select
                        options={transactionOptions}
                        value={transactionType}
                        onChange={setTransactionType}
                        placeholder="اختر نوع العملية"
                        isSearchable
                    />
                </div>

                <div className="walletHistory-date-picker">
                    <label>التاريخ:</label>
                    <Calendar
                        value={dates}
                        onChange={(e) => setDates(e.value)}
                        selectionMode="range"
                        dateFormat="mm/dd/yy"
                        placeholder="تاريخ الإنشاء"
                        showButtonBar
                        className="walletHistory-calender custom-calendar"
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

            <div className='wallet-history-table'>
                <table>
                    <thead>
                        <tr>
                            <th>التاريخ والوقت</th>
                            <th>المبلغ (SAR)</th>
                            <th>نوع العملية</th>
                            <th>الرصيد (SAR)</th>
                            <th>التفاصيل</th>
                            <th>رقم الطلب</th>
                            <th>Invoice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.dateTime}</td>
                                <td>{row.amount}</td>
                                <td>{row.type}</td>
                                <td>{row.balance}</td>
                                <td>{row.details}</td>
                                <td>{row.orderId}</td>
                                <td>{row.invoice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
