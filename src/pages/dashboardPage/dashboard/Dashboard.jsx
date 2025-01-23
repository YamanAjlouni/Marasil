import React from 'react'
import './Dashboard.scss'
import pen from '../../../assets/images/dashWelcomeImages/pen-square.svg'
import dollar from '../../../assets/images/dashWelcomeImages/dollar.svg'
import dollarExchange from '../../../assets/images/dashWelcomeImages/dollar-exchange.svg'
import bag from '../../../assets/images/dashWelcomeImages/bag.svg'
import addShipment from '../../../assets/images/dashWelcomeImages/addShipment.png'

export const Dashboard = () => {
  return (
    <div className='dashboard-out-container'>
      <div className='dashboard-welcome-out-container'>
        <div className='dashboard-welcome-details'>
          <div className='dashboard-welcome-right-container'>
            <h3>مرحباً</h3>
            <a href=''>انشاء شحنة</a>
          </div>
          <div className='dashboard-welcome-left-container'>
            <div>SAR 0.00</div>
            <div>الرصيد الحالي</div>
          </div>
        </div>
      </div>
      <div className='dashboard-three-cards-out-container'>
        <div className='dashboard-card-container dashboard-first-card-container '>
          <div className='dashboard-first-card-top-details'>
            <div>متوسط تكلفة الشحن</div>
            <img src={pen} alt="" />
          </div>
          <div>SAR 0.00</div>
          <div>مجموع تكاليف الشحن: 0.00 SAR</div>
        </div>
        <div className='dashboard-card-container dashboard-second-card-container'>
          <div className='dashboard-second-card-top-details'>
            <div>شحن المحفظة</div>
            <img src={dollar} alt="" />
          </div>
          <div className='dashboard-second-card-bottom-details'>
            <a href="/">
              <div>اشحن الآن</div>
              <img src={dollarExchange} alt="" />
            </a>

          </div>
        </div>
        <div className='dashboard-card-container dashboard-third-card-container'>
          <div className='dashboard-third-card-top-details'>
            <div>طلبات اليوم</div>
            <img src={bag} alt="" />
          </div>
          <div>الطلبات : 0</div>
          <div>جميع الطلبات : 2 طلب</div>
        </div>
        <div className='dashboard-card-container dashboard-fourth-card-container'>
          <div className='dashboard-fourth-card-top-details'>
            <div>إنشاء شحنة</div>
            <img src={addShipment} alt="" />
          </div>
          <div className='dashboard-fourth-card-bottom-details'>
            <a href="/">
              <div>إنشاء الآن</div>
              <img src={addShipment} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className='dashboard-shipments-details-out-container'>
        <div className='dashboard-shipments-details-container'>
          <div className='dashboard-shipments-details-top-container'>
            <div>تفاصيل الشحنة</div>
            {/* <div><input type="date" placeholder='فرز حسب التاريخ' /></div> */}
          </div>
          <div className='dashboard-shipments-details-bottom-container'>
            <div className='dashboard-shipments-details-cards-container'>
              <div>
                <div>جميع الشحنات</div>
                <img src={bag} alt="" />
              </div>
              <div>0</div>
            </div>
            <div className='dashboard-shipments-details-cards-container'>
              <div>
                <div>جاهز للشحن</div>
                <img src={bag} alt="" />
              </div>
              <div>0</div>
            </div>
            <div className='dashboard-shipments-details-cards-container'>
              <div>
                <div>جاري التوصيل</div>
                <img src={bag} alt="" />
              </div>
              <div>0</div>
            </div>
            <div className='dashboard-shipments-details-cards-container'>
              <div>
                <div>تم التوصيل</div>
                <img src={bag} alt="" />
              </div>
              <div>0</div>
            </div>
            <div className='dashboard-shipments-details-cards-container'>
              <div>
                <div>الطلبات الملغاة</div>
                <img src={bag} alt="" />
              </div>
              <div>0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
