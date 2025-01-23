import React from 'react'
import './OrdersTopContainer.scss'

export const OrdersTopContainer = () => {
    return (
        <div className='ordersTopContainer-out-container'>
            <div className='ordersTopContainer-top-container-title'>
                <h2>الطلبات</h2>
                <div>
                    <a href="">طلب جديد</a>
                    <a href="">رفع الملف</a>
                    <button>
                        <div className='pi pi-sync'>
                            مزامنة الطلبات
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
