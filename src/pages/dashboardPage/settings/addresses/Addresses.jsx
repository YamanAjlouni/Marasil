import React from 'react'
import './Addresses.scss'

export const Addresses = () => {
    return (
        <div className='addresses-out-container'>
            <div className='addresses-top-container'>
                <div className='addresses-top-right-container'>
                    <h3>العناوين</h3>
                    <p>
                        احفظ العناوين التي تستخدمها بإستمرار لتسريع عملية شراء وطباعة بوالص الشحن
                    </p>
                </div>
                <div className='addresses-top-left-container'>
                    <a>إضافة عنوان جديد</a>
                </div>
            </div>
            <div className='addresses-card-container'>
                <div className='addresses-card-topic'>
                    <div>drop</div>
                    <input type="checkbox" />
                </div>
                <div className='addresses-card-middle'>
                    <span>5</span>
                    <span>نشط</span>
                </div>
                <div className='addresses-card-bottom'>
                    <ul className='addresses-card-list-out-container'>
                        <li>
                            مسؤول الإتصال :
                            <span >ساري</span>
                        </li>
                        <li>
                            رقم الجوال :
                            <a href="tel:966503840017">
                                <span>966503840017</span>
                            </a>
                        </li>
                        <li>
                            الإيميل الإلكتروني	:
                            <a href="mailto: Semstry121@gmail.com" >
                                <span >Semstry121@gmail.com</span>
                            </a>
                        </li>
                        <li>
                            العنوان :
                            <span >بريدة السعودية</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
