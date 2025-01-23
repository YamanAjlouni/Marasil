import React from 'react'
import './Shipments.scss'
import { ShipmentsTopContainer } from './shipmentsTopContainer/ShipmentsTopContainer'
import { ShipmentsFilterContainer } from './shipmentsFilterContainer/ShipmentsFilterContainer'
import { ShipmentsTable } from './shipmentsTable/ShipmentsTable'
import { MantineProvider } from '@mantine/core';


export const Shipments = () => {
    return (
        <div className='shipments-out-container'>
            <ShipmentsTopContainer />
            <ShipmentsFilterContainer />
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'light', // or 'dark'
                    primaryColor: 'blue', // Set the primary color
                    fontFamily: 'Arial, sans-serif', // Set a custom font family
                }}
            >
                <ShipmentsTable />
            </MantineProvider>

        </div>
    )
}
