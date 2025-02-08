import React, { useState } from 'react';
import './Plans.scss';

export const Plans = () => {
  const [showPlans, setShowPlans] = useState(false);
  const plans = [
    // { name: 'Premium', price: '200$', duration: '1 Month', icon: '🌟' },
    // { name: 'Gold', price: '500$', duration: '3 Months', icon: '🏅' },
    // { name: 'Platinum', price: '900$', duration: '6 Months', icon: '👑' },
  ];

  const handlePlansToggle = () => {
    setShowPlans(!showPlans);
  };

  return (
    <div className='plans-out-container'>
      <div className='plans-top-container'>
        <h3>الباقات</h3>
      </div>
      <div className='plans-bottom-container'>
        <div className='plans-bottom-right-container'>
          <div>باقتك الحالية</div>
          <span>Free</span>
          <div>14/7/2024 الى 14/8/2025</div>
        </div>
        <div className='plans-bottom-left-container'>
          <a className='upgrade-btn' onClick={handlePlansToggle}>ترقية الباقة</a>
        </div>
      </div>

      {showPlans && (
        <div className='plans-list-container'>
          {plans.length > 0 ? (
            <div className='plans-list'>
              {plans.map((plan, index) => (
                <div className='plan-item' key={index}>
                  <div className='plan-icon'>{plan.icon}</div>
                  <div className='plan-name'>{plan.name}</div>
                  <div className='plan-price'>{plan.price}</div>
                  <div className='plan-duration'>{plan.duration}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className='no-plans'>لا يوجد باقات متوفرة في الوقت الحالي!</div>
          )}
        </div>
      )}
    </div>
  );
};
