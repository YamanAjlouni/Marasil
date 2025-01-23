import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import './OrdersFilter.scss'

export const OrdersFilter = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    const handleApplyDate = () => {
        console.log('Applied date range:', dateRange);
        // Add your date application logic here
    };

    const handleResetDate = () => {
        setDateRange([null, null]);
    };

    const statusOptions = [
        { label: 'جميع الحالات', value: 'all' },
        { label: 'قيد الانتظار', value: 'pending' },
        { label: 'مكتمل', value: 'completed' },
        { label: 'ملغي', value: 'cancelled' }
    ];

    const paymentOptions = [
        { label: 'جميع طرق الدفع', value: 'all' },
        { label: 'بطاقة ائتمان', value: 'credit_card' },
        { label: 'باي بال', value: 'paypal' },
        { label: 'الدفع عند الاستلام', value: 'cash_on_delivery' }
    ];

    const shippingOptions = [
        { label: 'جميع طرق الشحن', value: 'all' },
        { label: 'قياسي', value: 'standard' },
        { label: 'سريع', value: 'express' }
    ];

    const customerOptions = [
        { label: 'جميع العملاء', value: 'all' },
        { label: 'عادي', value: 'regular' },
        { label: 'VIP', value: 'vip' }
    ];

    const productOptions = [
        { label: 'جميع المنتجات', value: 'all' },
        { label: 'إلكترونيات', value: 'electronics' },
        { label: 'ملابس', value: 'clothing' },
        { label: 'المنزل والمطبخ', value: 'home_kitchen' }
    ];

    return (
        <div className='ordersFilter-out-container'>
            <div className='ordersFilter-search-container'>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText
                        className='ordersFilter-input'
                        placeholder='ابحث برقم الطلب أو معلومات العميل، ثم انقر ادخال'
                    />
                </span>
            </div>
            <div className='ordersFilter-container'>
                <div className='ordersFilter-buttons-container'>
                    <button className='clear-btn'>مسح</button>
                    <Link to="/" className='export-btn'>تصدير</Link>
                </div>
                <div className='ordersFilter-date-filter'>
                    <div className='date-picker-container'>
                        <DatePicker
                            selectsRange
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update) => setDateRange(update)}
                            isClearable
                            placeholderText="من - إلى"
                            monthsShown={2}
                            dateFormat="yyyy/MM/dd"
                            className='ordersFilter-date-input'
                            wrapperClassName="date-picker-wrapper"
                        />
                        <div className='date-buttons'>
                            <button 
                                className='apply-btn'
                                onClick={handleApplyDate}
                                disabled={!startDate || !endDate}
                            >
                                Apply
                            </button>
                            <button 
                                className='reset-btn'
                                onClick={handleResetDate}
                                disabled={!startDate && !endDate}
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
                <div className='ordersFilter-dropdowns'>
                    <Dropdown
                        options={statusOptions}
                        placeholder="حالة الطلب"
                        className='ordersFilter-dropdown'
                    />
                    <Dropdown
                        options={paymentOptions}
                        placeholder="طريقة الدفع"
                        className='ordersFilter-dropdown'
                    />
                    <Dropdown
                        options={shippingOptions}
                        placeholder="طريقة الشحن"
                        className='ordersFilter-dropdown'
                    />
                    <Dropdown
                        options={customerOptions}
                        placeholder="نوع العميل"
                        className='ordersFilter-dropdown'
                    />
                    <Dropdown
                        options={productOptions}
                        placeholder="نوع المنتج"
                        className='ordersFilter-dropdown'
                    />
                </div>
            </div>
        </div>
    );
};