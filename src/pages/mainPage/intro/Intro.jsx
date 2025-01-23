import React from 'react'
import './Intro.scss'
import laptopGif from '../../../assets/images/laptop.gif';
import { Link } from 'react-router';


export const Intro = () => {
    return (
        <div className='intro-out-container'>
            <div className='intro-left-container'>
                <img src={laptopGif} alt="" />
            </div>
            <div className='intro-right-container'>
                <div className='intro-right-content'>
                    <h1>
                        تقديم حلول مبتكرة لإدارة وشحن طلبات المتاجر الإلكترونية بسهولة وكفاءة وبأقل التكاليف.
                    </h1>
                    <div className="intro-statistics-out-container">
                        <div className="intro-statistics-container">
                            <div className="stat-value">99.8%</div>
                            <div className="stat-label">نسبة نجاح</div>
                        </div>
                        <div className="intro-statistics-container">
                            <div className="stat-value">+5000</div>
                            <div className="stat-label">عميل</div>
                        </div>
                        <div className="intro-statistics-container">
                            <div className="stat-value">1M</div>
                            <div className="stat-label">مراسيل</div>
                        </div>
                    </div>

                    <div className='intro-right-button'>
                        <Link to='/'>
                            ارسل شحنتك الآن
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
