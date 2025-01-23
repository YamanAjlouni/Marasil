import React, { useState } from "react";
import "./TrackingCustomizePage.scss";
import logo from "../../../../assets/images/MARASIL.jpg";

export const TrackingCustomizePage = () => {
  const [showMore, setShowMore] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState("");
  const inputValue = "https://www.marasil.sa/ar/order/tracking/cUEngKqC";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(inputValue)
      .then(() => {
        setCopyFeedback("تم النسخ بنجاح!");
        setTimeout(() => setCopyFeedback(""), 3000); // Clear feedback after 3 seconds
      })
      .catch((err) => {
        console.error("فشل النسخ:", err);
        setCopyFeedback("عذرًا، لم يتم نسخ الرابط. حاول مرة أخرى.");
        setTimeout(() => setCopyFeedback(""), 3000); // Clear feedback after 3 seconds
      });
  };

  const timelineData = [
    {
      date: "يوم الخميس, مايو 13",
      header: "تم الشحن",
      location: "Saudi Arabia",
    },
    {
      date: "يوم الخميس, مايو 13",
      header: "الشحنة وصلت الميناء.",
      location: "Saudi Arabia",
    },
    {
      date: "جمعة, مايو 14",
      header: "الشحنة وصلت شركة الشحن.",
      location: "Saudi Arabia",
      current: false,
    },
    {
      date: "جمعة, مايو 14",
      header: "جاري التوصيل",
      location: "Saudi Arabia",
      current: true,
    },
  ];

  return (
    <div className="trackingCustomizePage-out-container">
      <div className="trackingCustomizePage-right-container">
        <div className="trackingCustomizePage-right-top-container">
          <h4>نموذج لصفحة التتبع</h4>
          <a href="https://www.marasil.sa/ar/brand-tracking/preview" target='blank'>مراجعة</a>
        </div>
        <div className="trackingCustomizePage-right-bottom-out-container">
          <div className="trackingCustomizePage-right-bottom-container">
            <div className="trackingCustomizePage-card-image-container">
              <img src={logo} alt="" />
            </div>
            <div className="trackingCustomizePage-card-time-container">
              <h2>Wednesday, Jan 22 2025</h2>
              <p>Your order is in transit</p>
            </div>
            <div className="trackingCustomizePage-card-body-container">
              <section>
                <h5>المنتجات</h5>
                <ul>
                  <li>Item 1x 2</li>
                  <li>Item 2x 1</li>
                </ul>
              </section>
              <section>
                <div>التتبع</div>
                <div className="trackingCustomizePage-card-timeline-container">
                  <div className="timeline">
                    {timelineData.map((item, index) => {
                      const isVisible =
                        showMore ||
                        index === 0 ||
                        index === timelineData.length - 1;

                      if (!isVisible) return null;

                      return (
                        <div
                          className={`timeline-item ${item.current ? "is-current" : ""}`}
                          key={index}
                        >
                          <div className="timeline-itemContent">
                            <header>{item.header}</header>
                            <p>{item.location}</p>
                          </div>
                          <div />
                          <div className="timeline-itemDate">
                            <time>{item.date}</time>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="timeline-button">
                  <button onClick={() => setShowMore(!showMore)}>
                    {showMore ? "اخفاء تفاصيل التتبع" : "اظهار تفاصيل التتبع"}
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="trackingCustomizePage-left-out-container">
        <div className="trackingCustomizePage-left-container">
          <div className="trackingCustomizePage-left-top-topic">تخصيص</div>
          <div className="trackingCustomizePage-left-trade-mark">
            <div className="trade-mark-topic">علامة تجارية</div>
            <div className="trade-mark-body">
              قم بتخصيص لون أعلى الصفحة في صفحة العلامة التجارية الخاصة بنا وسنقوم
              تلقائيًا بتطبيق هذا العنصر على صفحات التتبع الخاصة بك.
            </div>
          </div>
          <div className="trackingCustomizePage-public-link-contianer">
            <div>رابط عام</div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                value={inputValue}
                disabled
              />
              <div className="input-group-append" onClick={copyToClipboard}>
                <a
                  href="javascript:void(0);"
                  className="addbtn_ads2"
                >
                  <i className="fa fa-copy"></i>
                </a>
              </div>
            </div>
            {copyFeedback && (
              <div className="copy-feedback">
                {copyFeedback}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
