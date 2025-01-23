import React from 'react'
import './Footer.scss'
import whatsapp from '../../../assets/images/whatsapp.jpg'
import instagram from '../../../assets/images/instagram.jpg'
import twitter from '../../../assets/images/twitter.jpg'

export const Footer = () => {
  return (
    <div className='footer-out-container'>
      <div className='footer-top-container'>
        <h2>
          ابدأ اليوم مجانًا
        </h2>
        <a className='global-button footer-button-mobile'>جرب معنا</a>
        <div className='footer-top-details-container'>
          <div className='footer-left-container'>
            <div className='footer-left-title'>للتواصل</div>
            <div className='footer-left-details-container'>
              <a href='' >مركز المساعدة</a>
              <div className='footer-left-social-media-container'>
                <a href="/https://api.whatsapp.com/send/?phone=966500556618&text&type=phone_number&app_absent=0" target='blank'>
                  <img src={whatsapp} alt="whatsapp" />
                </a>
                <a href="/https://www.instagram.com/marasil.company?igsh=MWY4b3psbWZwaHV5eg==" target='blank'>
                  <img src={instagram} alt="instagram" />
                </a>
                <a href="/https://x.com/marasil_company?s=21" target='blank'>
                  <img src={twitter} alt="twitter" />
                </a>
              </div>
            </div>
          </div>
          <div className='footer-mid-container'>
            <a className='global-button footer-button-web'>جرب مجاناً </a>
          </div>
          <div className='footer-right-container'>
            <div className='footer-right-title'>الشركاء</div>
            <div className='footer-right-details-container'>
              <a href=''>شركاء الشحن</a>
              <a href=''>شركاء المتاجر الاكترونية</a>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom-container'>
        © مراسيل 2025
      </div>
    </div>
  )
}
