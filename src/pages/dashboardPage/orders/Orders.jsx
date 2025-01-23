import React from 'react'
import './Orders.scss'
import { OrdersTopContainer } from './ordersTopContainer/OrdersTopContainer'
import { OrdersFilter } from './ordersFilter/OrdersFilter'
import OrdersTable from './ordersTable/OrdersTable'
import { OrdersCreateOrder } from './ordersCreateOrder/OrdersCreateOrder'

export const Orders = () => {
    return (
        <div className='orders-out-container'>
            <div><OrdersTopContainer /></div>
            <div><OrdersFilter /></div>
            <div><OrdersTable /></div>
            <div><OrdersCreateOrder /></div>
        </div>
    )
}
