import React, { useState } from 'react';
import './TrackShipmentsFilterContainer.scss'
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Select from 'react-select';


export const TrackShipmentsFilterContainer = () => {
    const [dates, setDates] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [selectedStore, setSelectedStore] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const [selectedShippingOption, setSelectedShippingOption] = useState(null);

    const statusOptions = [
        { value: 'shipped', label: 'تم الشحن' },
        { value: 'in-transit', label: 'في الطريق' },
        { value: 'delivered', label: 'تم التوصيل' },
        { value: 'cancelled', label: 'تم الإلغاء' },
    ];

    const companyOptions = [
        { value: 'fedex', label: 'FedEx' },
        { value: 'dhl', label: 'DHL' },
        { value: 'ups', label: 'UPS' },
        { value: 'aramex', label: 'Aramex' },
    ];

    const storeOptions = [
        { value: 'electronics', label: 'متجر الإلكترونيات' },
        { value: 'clothing', label: 'متجر الملابس' },
        { value: 'furniture', label: 'متجر الأثاث' },
        { value: 'books', label: 'متجر الكتب' },
    ];

    const cityOptions = [
        { value: 'damascus', label: 'دمشق' },
        { value: 'aleppo', label: 'حلب' },
        { value: 'homs', label: 'حمص' },
        { value: 'latakia', label: 'اللاذقية' },
    ];

    const paymentOptions = [
        { value: 'cash', label: 'الدفع نقداً' },
        { value: 'card', label: 'الدفع ببطاقة' },
        { value: 'online', label: 'الدفع أونلاين' },
    ];

    const shippingOptions = [
        { value: 'express', label: 'الشحن السريع' },
        { value: 'standard', label: 'الشحن العادي' },
        { value: 'pickup', label: 'الاستلام من المتجر' },
    ];

    return (
        <div className="trackShipmentsFilterContainer-out-container">
            <div className="trackShipmentsFilterContainer-top-container">
                <div className="trackShipmentsFilterContainer-search-container">
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText
                            className="trackFilter-input"
                            placeholder="ابحث برقم الطلب أو رقم الشحنة أو معلومات العميل , ثم انقر ادخال"
                        />
                    </span>
                </div>
                <div className="trackShipmentsFilterContainer-date-picker">
                    <Calendar
                        value={dates}
                        onChange={(e) => setDates(e.value)}
                        selectionMode="range"
                        dateFormat="mm/dd/yy"
                        placeholder="تاريخ الانشاء"
                        showButtonBar
                        className="trackShipmentsFilterContainer-calender custom-calendar"
                        panelClassName="custom-calendar-panel"
                        showIcon
                        icon="pi pi-calendar"
                    />
                </div>
            </div>
            <div className="trackShipmentsFilterContainer-bottom-container">
                <div className='trackShipmentsFilterContainer-dropdown-out-container'>
                    <div className="dropdown-container">
                        <Select
                            options={statusOptions}
                            value={selectedStatus}
                            onChange={(option) => setSelectedStatus(option)}
                            placeholder="حالة الشحنة"
                            isSearchable
                        />
                    </div>
                    <div className="dropdown-container">
                        <Select
                            options={companyOptions}
                            value={selectedCompany}
                            onChange={(option) => setSelectedCompany(option)}
                            placeholder="كل شركات الشحن"
                            isSearchable
                        />
                    </div>
                    <div className="dropdown-container">
                        <Select
                            options={storeOptions}
                            value={selectedStore}
                            onChange={(option) => setSelectedStore(option)}
                            placeholder="كل المتاجر"
                            isSearchable
                        />
                    </div>
                    <div className="dropdown-container">
                        <Select
                            options={cityOptions}
                            value={selectedCity}
                            onChange={(option) => setSelectedCity(option)}
                            placeholder="ابحث باسم المدينة"
                            isSearchable
                        />
                    </div>
                    <div className="dropdown-container">
                        <Select
                            options={paymentOptions}
                            value={selectedPaymentMethod}
                            onChange={(option) => setSelectedPaymentMethod(option)}
                            placeholder="كل طرق الدفع"
                            isSearchable
                        />
                    </div>
                    <div className="dropdown-container">
                        <Select
                            options={shippingOptions}
                            value={selectedShippingOption}
                            onChange={(option) => setSelectedShippingOption(option)}
                            placeholder="كل خيارات الشحن"
                            isSearchable
                        />
                    </div>
                </div>
                <div className='trackShipmentsFilterContainer-buttons-container'>
                    <a href="/">
                        <i className="pi pi-download"></i>
                        <span>تحميل بوالص الشحن</span>
                    </a>
                    <a href="/">تصدير ملف</a>
                </div>
            </div>
        </div>
    );
};
