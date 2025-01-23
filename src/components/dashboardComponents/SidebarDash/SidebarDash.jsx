import React, { useState } from 'react';
import './SidebarDash.scss';
import { Link, useLocation } from 'react-router-dom';
import dashboardWhite from '../../../assets/images/dashSidebarImages/dashboard-white.png';
import dashboardBlack from '../../../assets/images/dashSidebarImages/dashboard-black.png';
import ordersWhite from '../../../assets/images/dashSidebarImages/orders-white.png';
import ordersBlack from '../../../assets/images/dashSidebarImages/orders-black.png';
import shipmentsWhite from '../../../assets/images/dashSidebarImages/shipments-white.png';
import shipmentsBlack from '../../../assets/images/dashSidebarImages/shipments-black.png';
import trackingWhite from '../../../assets/images/dashSidebarImages/tracking-white.png';
import trackingBlack from '../../../assets/images/dashSidebarImages/tracking-black.png';
import clientsWhite from '../../../assets/images/dashSidebarImages/customers-white.png';
import clientsBlack from '../../../assets/images/dashSidebarImages/customers-black.png';
import returnsWhite from '../../../assets/images/dashSidebarImages/returns-white.png';
import returnsBlack from '../../../assets/images/dashSidebarImages/returns-black.png';
import settingsWhite from '../../../assets/images/dashSidebarImages/settings-white.png';
import settingsBlack from '../../../assets/images/dashSidebarImages/settings-black.png';
import supportWhite from '../../../assets/images/dashSidebarImages/support-white.png';
import supportBlack from '../../../assets/images/dashSidebarImages/support-black.png';

export const SidebarDash = ({ isSidebarOpen, onLinkClick }) => {
    const location = useLocation();
    const [hoveredItem, setHoveredItem] = useState(null);

    const navItems = [
        { path: '/admin/dashboard', label: 'الرئيسية', whiteIcon: dashboardWhite, blackIcon: dashboardBlack },
        { path: '/admin/orders', label: 'الطلبات', whiteIcon: ordersWhite, blackIcon: ordersBlack },
        { path: '/admin/shipments', label: 'الشحنات', whiteIcon: shipmentsWhite, blackIcon: shipmentsBlack },
        { path: '/admin/tracking', label: 'التتبع', whiteIcon: trackingWhite, blackIcon: trackingBlack },
        { path: '/admin/clients', label: 'العملاء', whiteIcon: clientsWhite, blackIcon: clientsBlack },
        { path: '/admin/returns', label: 'الرجيع', whiteIcon: returnsWhite, blackIcon: returnsBlack },
        { path: '/settings', label: 'الإعدادات', whiteIcon: settingsWhite, blackIcon: settingsBlack },
        { path: '/admin/support', label: 'الدعم', whiteIcon: supportWhite, blackIcon: supportBlack },
    ];

    return (
        <div className={`sidebarDash-out-container ${isSidebarOpen ? 'open' : ''}`}>
            <ul className="sidebarDash-container">
                {navItems.map((item) => (
                    <Link
                        to={item.path}
                        key={item.path}
                        className={`sidebarDash-details ${location.pathname === item.path ? 'active' : ''}`}
                        onMouseEnter={() => setHoveredItem(item.path)}
                        onMouseLeave={() => setHoveredItem(null)}
                        onClick={onLinkClick} // Close the sidebar when clicked
                    >
                        {item.label}
                        <img
                            src={
                                location.pathname === item.path || hoveredItem === item.path
                                    ? item.whiteIcon
                                    : item.blackIcon
                            }
                            alt={item.label}
                        />
                    </Link>
                ))}
            </ul>
        </div>
    );
};
