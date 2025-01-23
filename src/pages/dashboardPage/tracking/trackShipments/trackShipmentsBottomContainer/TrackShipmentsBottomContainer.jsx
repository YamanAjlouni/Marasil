import React from 'react'
import { TrackShipmentsFilterContainer } from './trackShipmentsFilterContainer/TrackShipmentsFilterContainer'
import { TrackShipmentsTable } from './trackShipmentsTable/TrackShipmentsTable'
import { MantineProvider } from '@mantine/core';


export const TrackShipmentsBottomContainer = () => {
    return (
        <div className='TrackShipmentsBottomContainer-out-container'>
            <TrackShipmentsFilterContainer />
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'light', // or 'dark'
                    primaryColor: 'blue', // Set the primary color
                    fontFamily: 'Arial, sans-serif', // Set a custom font family
                }}
            >
                <TrackShipmentsTable />
            </MantineProvider>

        </div >
    )
}
