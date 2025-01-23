import React, { useState } from 'react';
import './TrackingTopContainer.scss';
import { TrackingCustomizePage } from '../trackingCustomizePage/TrackingCustomizePage';
import { TrackShipment } from '../trackShipments/TrackShipment';

// Components to load on click

export const TrackingTopContainer = () => {
  const [activeTab, setActiveTab] = useState('track');

  // Handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='trackingTopContainer-out-container'>
      <div className='trackingTopContainer-top-container'>
        <h3>التتبع</h3>
      </div>
      <div className='trackingTopContainer-bottom-container'>
        <div
          onClick={() => handleTabClick('track')}
          className={activeTab === 'track' ? 'active-tab' : ''}
        >
          تتبع الشحنات
        </div>
        <div
          onClick={() => handleTabClick('customize')}
          className={activeTab === 'customize' ? 'active-tab' : ''}
        >
          تخصيص صفحة البيع
        </div>
      </div>
      <div className='trackingTopContainer-content'>
        {activeTab === 'track' && <TrackShipment />}
        {activeTab === 'customize' && <TrackingCustomizePage />}
      </div>
    </div>
  );
};
