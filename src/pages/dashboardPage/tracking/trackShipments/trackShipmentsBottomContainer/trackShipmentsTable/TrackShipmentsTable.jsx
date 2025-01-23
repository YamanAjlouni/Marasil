import React, { useEffect, useState } from 'react';
import './TrackShipmentsTable.scss'
import { Table } from '@mantine/core';


export const TrackShipmentsTable = () => {
  const [isMobile, setIsMobile] = useState(false);
      const [rowsToShow, setRowsToShow] = useState(5); // Default number of rows to display
  
      useEffect(() => {
          const handleResize = () => {
              setIsMobile(window.innerWidth < 940);
          };
  
          handleResize(); // Initial check
          window.addEventListener('resize', handleResize);
  
          return () => window.removeEventListener('resize', handleResize);
      }, []);
  
      const elements = [
          {
              orderNumber: 1,
              orderDate: '2025-01-20',
              shippingCompany: 'FedEx',
              clientInfo: 'yaman',
              orderSource: 'Website',
              shippingCost: '$50',
              paymentMethod: 'Credit Card',
              status: 'Shipped',
              action: 'Track',
          },
          {
              orderNumber: 2,
              orderDate: '2025-01-19',
              shippingCompany: 'DHL',
              clientInfo: 'Jane Smith',
              orderSource: 'Mobile App',
              shippingCost: '$30',
              paymentMethod: 'PayPal',
              status: 'Pending',
              action: 'Cancel',
          },
          {
              orderNumber: 3,
              orderDate: '2025-01-18',
              shippingCompany: 'UPS',
              clientInfo: 'Bob Johnson',
              orderSource: 'Phone',
              shippingCost: '$20',
              paymentMethod: 'Cash',
              status: 'Delivered',
              action: 'View',
          },
          {
              orderNumber: 4,
              orderDate: '2025-01-17',
              shippingCompany: 'Aramex',
              clientInfo: 'Alice Cooper',
              orderSource: 'Email',
              shippingCost: '$40',
              paymentMethod: 'Debit Card',
              status: 'Shipped',
              action: 'Track',
          },
          {
              orderNumber: 5,
              orderDate: '2025-01-16',
              shippingCompany: 'TNT',
              clientInfo: 'Steve Rogers',
              orderSource: 'App',
              shippingCost: '$35',
              paymentMethod: 'Cash',
              status: 'Pending',
              action: 'Cancel',
          },
      ];
  
      const visibleElements = elements.slice(0, rowsToShow);
  
      const rows = visibleElements.map((element) => (
          <Table.Tr key={element.orderNumber}>
              <Table.Td>{element.orderNumber}</Table.Td>
              <Table.Td>{element.orderDate}</Table.Td>
              <Table.Td>{element.shippingCompany}</Table.Td>
              <Table.Td>{element.clientInfo}</Table.Td>
              <Table.Td>{element.orderSource}</Table.Td>
              <Table.Td>{element.shippingCost}</Table.Td>
              <Table.Td>{element.paymentMethod}</Table.Td>
              <Table.Td>{element.status}</Table.Td>
              <Table.Td>{element.action}</Table.Td>
          </Table.Tr>
      ));
  
      const cardRows = visibleElements.map((element, index) => (
          <div className="row-card" key={index}>
              <div>
                  <span>رقم الطلب:</span>
                  <span>{element.orderNumber || '—'}</span>
              </div>
              <div>
                  <span>تاريخ الطلب:</span>
                  <span>{element.orderDate || '—'}</span>
              </div>
              <div>
                  <span>شركة الشحن:</span>
                  <span>{element.shippingCompany || '—'}</span>
              </div>
              <div>
                  <span>بيانات العميل:</span>
                  <span>{element.clientInfo || '—'}</span>
              </div>
              <div>
                  <span>مصدر الطلب:</span>
                  <span>{element.orderSource || '—'}</span>
              </div>
              <div>
                  <span>طريقة الدفع:</span>
                  <span>{element.paymentMethod || '—'}</span>
              </div>
              <div>
                  <span>تاريخ الحالة:</span>
                  <span>{element.shippingCost || '—'}</span>
              </div>
              <div>
                  <span>حالة التتبع:</span>
                  <span>{element.status || '—'}</span>
              </div>
              <div>
                  <span>الإجراء:</span>
                  <span>{element.action || '—'}</span>
              </div>
          </div>
      ));
  
      return (
          <div className="trackShipmentsTable-out-container">
  
              {!isMobile ? (
                  <Table>
                      <Table.Thead>
                          <Table.Tr>
                              <Table.Th>رقم الطلب</Table.Th>
                              <Table.Th>تاريخ الطلب</Table.Th>
                              <Table.Th>شركة الشحن</Table.Th>
                              <Table.Th>بيانات العميل</Table.Th>
                              <Table.Th>مصدر الطلب</Table.Th>
                              <Table.Th>تكلفة الشحن</Table.Th>
                              <Table.Th>طريقة الدفع</Table.Th>
                              <Table.Th>الحالة</Table.Th>
                              <Table.Th>الإجراء</Table.Th>
                          </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>{rows}</Table.Tbody>
                  </Table>
              ) : (
                  <div>{cardRows}</div>
              )}
  
              <div className="controls">
                  <select
                      id="rows-select"
                      value={rowsToShow}
                      onChange={(e) => setRowsToShow(parseInt(e.target.value, 10))}
                  >
                      <option value="3">3</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                  </select>
              </div>
          </div>
      );
  };
  
