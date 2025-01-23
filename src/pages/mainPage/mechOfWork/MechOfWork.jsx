import React from 'react'
import './MechOfWork.scss'
import man from '../../../assets/images/man.png'
import shoppingCart from '../../../assets/images/shop-cart.jpg'
import leftArrow from '../../../assets/images/left-arrow.png'
import rightArrow from '../../../assets/images/right-arrow.png'
import logo from '../../../assets/images/MARASIL.jpg'

export const MechOfWork = () => {
  return (
    <div className='mechOfWork-out-container'>
      <div className='mechOfWork-top-container'>
        <h2>
          آلية العمل؟
        </h2>
        <div className="line-container">
          <div className="line"></div>
          <div className="line middle"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="mechOfWork-bottom-container">
        <div className="image-flow-container">
          <div className="image-container">
            <img
              src={man}
              alt="Man"
              className="flow-image"
            />
          </div>
          <div className="arrow-section">
            <div className="arrow-content">
              <p className="arrow-text">تتبع شحناتك</p>
              <img
                src={leftArrow}
                alt="Left Arrow"
                className="arrow-image"
              />
            </div>
          </div>
          <div className="image-container logo-container">
            <img
              src={logo}
              alt="Logo"
              className="logo"
            />
          </div>
          <div className="arrow-section">
            <div className="arrow-content">
              <p className="arrow-text">أختر شركة الشحن المناسبة</p>
              <img
                src={rightArrow}
                alt="Right Arrow"
                className="arrow-image"
              />
            </div>
          </div>
          <div className="image-container">
            <img
              src={shoppingCart}
              alt="Shop Cart"
              className="flow-image"
            />
          </div>
        </div>
      </div>
    </div>)
}
