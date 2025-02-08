import React, { useState } from "react";
import "./SidebarDash.scss";
import { useLocation, useNavigate } from "react-router-dom";
import dashboardWhite from "../../../assets/images/dashSidebarImages/dashboard-white.png";
import dashboardBlack from "../../../assets/images/dashSidebarImages/dashboard-black.png";
import ordersWhite from "../../../assets/images/dashSidebarImages/orders-white.png";
import ordersBlack from "../../../assets/images/dashSidebarImages/orders-black.png";
import shipmentsWhite from "../../../assets/images/dashSidebarImages/shipments-white.png";
import shipmentsBlack from "../../../assets/images/dashSidebarImages/shipments-black.png";
import trackingWhite from "../../../assets/images/dashSidebarImages/tracking-white.png";
import trackingBlack from "../../../assets/images/dashSidebarImages/tracking-black.png";
import clientsWhite from "../../../assets/images/dashSidebarImages/customers-white.png";
import clientsBlack from "../../../assets/images/dashSidebarImages/customers-black.png";
import returnsWhite from "../../../assets/images/dashSidebarImages/returns-white.png";
import returnsBlack from "../../../assets/images/dashSidebarImages/returns-black.png";
import settingsWhite from "../../../assets/images/dashSidebarImages/settings-white.png";
import settingsBlack from "../../../assets/images/dashSidebarImages/settings-black.png";
import supportWhite from "../../../assets/images/dashSidebarImages/support-white.png";
import supportBlack from "../../../assets/images/dashSidebarImages/support-black.png";
import backIcon from "../../../assets/images/dashSidebarImages/settings-black.png";

export const SidebarDash = ({ isSidebarOpen, onLinkClick }) => {
    const location = useLocation();
    const navigate = useNavigate(); // Use navigate to programmatically change paths
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const mainNavItems = [
        { path: "/admin/dashboard", label: "الرئيسية", whiteIcon: dashboardWhite, blackIcon: dashboardBlack },
        { path: "/admin/orders", label: "الطلبات", whiteIcon: ordersWhite, blackIcon: ordersBlack },
        { path: "/admin/shipments", label: "الشحنات", whiteIcon: shipmentsWhite, blackIcon: shipmentsBlack },
        { path: "/admin/tracking", label: "التتبع", whiteIcon: trackingWhite, blackIcon: trackingBlack },
        // { path: "/admin/clients", label: "العملاء", whiteIcon: clientsWhite, blackIcon: clientsBlack },
        { path: "/admin/returns", label: "الرجيع", whiteIcon: returnsWhite, blackIcon: returnsBlack },
        { path: "/settings", label: "الإعدادات", whiteIcon: settingsWhite, blackIcon: settingsBlack, isSettings: true },
        { path: "/admin/support", label: "الدعم", whiteIcon: supportWhite, blackIcon: supportBlack },
    ];

    const settingsSections = [
        {
            title: "حسابي",
            items: [
                { path: "/admin/account", label: "الملف الشخصي" },
                { path: "/admin/plans", label: "الباقات" },
                { path: "/admin/wallet", label: "المحفظة" },
                { path: "/admin/invoices", label: "الفواتير" },
                { path: "/admin/store", label: "المتجر" },
                { path: "/admin/team", label: "الفريق" },
                { path: "/admin/addresses", label: "العناوين" },
            ]
        },
        {
            title: "الربط",
            items: [
                { path: "/admin/store-integration", label: "ربط المتجر" },
                { path: "/admin/shipping-companies", label: "شركات الشحن" },
            ]
        },
        {
            title: "الضبط",
            items: [
                { path: "/admin/policies", label: "البوالص" },
                { path: "/admin/packages", label: "الطرود" },
                { path: "/admin/custom-cities", label: "اضافة مدن مخصصة" },
                { path: "/admin/notifications-settings", label: "الاشعارات" },
                { path: "/admin/shipment-automation", label: "اتمتة الشحنات" },
            ]
        }
    ];

    return (
        <div className={`sidebarDash-out-container ${isSidebarOpen ? "open" : ""}`}>
            <ul className="sidebarDash-container">
                {!isSettingsOpen ? (
                    mainNavItems.map((item) => (
                        <li
                            key={item.path}
                            className={`sidebarDash-details ${location.pathname === item.path ? "active" : ""}`}
                            onMouseEnter={() => setHoveredItem(item.path)}
                            onMouseLeave={() => setHoveredItem(null)}
                            onClick={() => {
                                if (item.isSettings) {
                                    setIsSettingsOpen(true);
                                } else {
                                    navigate(item.path);
                                    if (onLinkClick) onLinkClick();
                                }
                            }}
                        >
                            {item.label}
                            <img src={hoveredItem === item.path ? item.whiteIcon : item.blackIcon} alt={item.label} />
                        </li>
                    ))
                ) : (
                    <>
                        <li className="sidebarDash-details back-button" onClick={() => setIsSettingsOpen(false)}>
                            <img src={backIcon} alt="Back" />
                            الإعدادات
                        </li>
                        {settingsSections.map((section) => (
                            <div key={section.title} className="settings-section">
                                <h4 className="sidebarDash-section-title">{section.title}</h4>
                                {section.items.map((item) => (
                                    <li
                                        key={item.path}
                                        className={`sidebarDash-details settings-item ${location.pathname === item.path ? "active" : ""
                                            }`}
                                        onClick={() => {
                                            navigate(item.path);
                                            if (onLinkClick) onLinkClick();
                                        }}
                                    >
                                        {item.label}
                                    </li>
                                ))}
                            </div>
                        ))}
                    </>
                )}
            </ul>
        </div>
    );
};
