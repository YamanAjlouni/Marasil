import React from 'react'
import './WalletBalance.scss'

export const WalletBalance = () => {
    return (
        <div className='walletBalance-out-container'>
            <div className='walletBalance-top-container'>الرصيد</div>
            <div className='walletBalance-details-container'>
                <div className='walletBalance-details-top-container'>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="70.000000pt" height="65.000000pt" viewBox="0 0 70.000000 65.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,65.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none" class="dynamic-color-class">
                            <path d="M234 571 c-115 -31 -216 -60 -222 -64 -16 -11 -17 -429 -2 -458 10
																																																					-18 24 -19 325 -19 359 0 335 -7 335 93 0 40 4 56 15 61 12 4 15 24 15 86 0
																																																					62 -3 82 -15 86 -11 5 -15 23 -15 73 0 39 -5 72 -12 79 -7 7 -39 12 -74 12
																																																					l-63 0 -3 53 c-3 52 -3 52 -38 53 -19 1 -130 -24 -246 -55z m266 -12 l0 -39
																																																					-172 1 -173 1 165 42 c91 24 168 41 173 39 4 -2 7 -22 7 -44z m140 -134 l0
																																																					-64 -112 -3 -113 -3 0 -85 0 -85 113 -3 113 -3 -3 -62 -3 -62 -300 0 -300 0
																																																					-3 218 -2 217 305 0 305 0 0 -65z m30 -155 l0 -60 -115 0 -115 0 0 60 0 60
																																																					115 0 115 0 0 -60z"></path>
                            <path d="M594 296 c-9 -24 4 -48 23 -44 12 2 18 12 18 28 0 29 -32 41 -41 16z"></path>
                        </g>
                    </svg>
                    <div>الرصيد الحالي</div>
                </div>
                <div className='walletBalance-details-bottom-container'>
                    <span>SAR 0.00</span>
                    <a>اشحن الآن</a>
                </div>
            </div>
        </div>
    )
}
