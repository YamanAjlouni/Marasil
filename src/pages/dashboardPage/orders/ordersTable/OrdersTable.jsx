import React from 'react';
import './OrdersTable.scss'; // Import your styles

const OrdersTable = () => {
    const data = [
        {
            id: 31148049,
            orderDate: '01/01/2025 01:21 AM',
            source: 'مصدر الطلب',
            customer: { name: 'عبدالرحمن المجيدي', phone: '+966500435545' },
            payment: 'دفع عند الاستلام',
            location: 'الرياض, منطقة الرياض',
            products: { name: 'المجيدي', product_code: '+966500435545', quantity: '2' },
            weight: '40كجم',
        },
        {
            id: 531,
            customer: { name: 'يمان عجلوني', phone: '+966500435545' }
        }
        // Add more rows as needed
    ];

    return (
        <div className="ordersTable-out-container">
            <table>
                <thead>
                    <tr>
                        <th>رقم الطلب</th>
                        <th>تاريخ الطلب</th>
                        <th>مصدر الطلب</th>
                        <th>بيانات العميل</th>
                        <th>طريقة الدفع</th>
                        <th>الدولة/المدينة</th>
                        <th>تفاصيل المنتجات</th>
                        <th>الابعاد والوزن</th>
                        <th>الإجراء</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td data-label="رقم الطلب">{row.id}</td>
                            <td data-label="تاريخ الطلب">{row.orderDate}</td>
                            <td data-label="مصدر الطلب">{row.source}</td>
                            <td data-label="بيانات العميل">
                                <div className="ordersTable-details-column">
                                    <span>{row.customer.name}</span>
                                    <span>{row.customer.phone}</span>
                                </div>
                            </td>
                            <td data-label="طريقة الدفع">{row.payment}</td>
                            <td data-label="الدولة/المدينة">{row.location}</td>
                            <td data-label="تفاصيل المنتجات">
                                <div className='ordersTable-details-column'>
                                    <span>{`اسم المنتج : ${row.products?.name}`}</span>
                                    <span>{`رمز المنتج : ${row.products?.product_code}`}</span>
                                    <span>{`الكمية : ${row.products?.quantity}`}</span>
                                </div>
                            </td>
                            <td data-label="الابعاد والوزن">
                                <div className='ordersTable-details-column'>
                                    <span>{row.weight}</span>
                                    <span onClick={() => ''} className='pi pi-pen-to-square'>تعديل الطرد</span>
                                </div>
                            </td>
                            <td data-label="الإجراء">
                                <div className='ordersTable-details-column'>
                                    <button className='ordersTable-details-ship-button'>اشحن الآن</button>
                                    <button className='ordersTable-details-hide-button'>اخفاء الطلب</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersTable;