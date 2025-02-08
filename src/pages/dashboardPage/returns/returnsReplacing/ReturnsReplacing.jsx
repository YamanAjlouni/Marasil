import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { MantineProvider } from '@mantine/core';
import './ReturnsReplacing.scss'
import { ReturnsReplacingNewOrder } from './returnsReplacingNewOrder/ReturnsReplacingNewOrder';
import { ReturnsReplacingRefusedOrder } from './returnsReplacingRefusedOrder/ReturnsReplacingRefusedOrder';
import { ReturnsReplacingSubmittedOrder } from './retunsReplcaingSubmittedOrder/ReturnsReplacingSubmittedOrder';

export const ReturnsReplacing = () => {
  const [activeCard, setActiveCard] = useState(1);
  
    return (
      <div className='returnsReplacing-out-container'>
        <div className='returnsReplacing-top-container'>
          <div onClick={() => setActiveCard(1)} className='returnsReplacing-card' >
            <div className='returnsReplacing-right-container'>
              <div>0</div>
              <div>طلب جديد</div>
            </div>
            <div className='returnsReplacing-left-container'>
              <svg style={{ fill: "white", width: "40px" }} version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  stroke="none"
                  className="white-color-class"
                >
                  <path d="M2666 5079 c-117 -33 -193 -77 -276 -159 -45 -45 -89 -99 -107 -135
                                                              -125 -240 -86 -512 102 -701 122 -122 250 -177 415 -177 58 0 120 7 160 17
                                                              184 50 334 186 407 371 25 64 27 81 27 205 0 118 -3 142 -24 195 -45 114 -92
                                                              183 -176 256 -71 61 -132 93 -238 123 -106 31 -191 32 -290 5z m277 -159 c73
                                                              -23 167 -87 210 -144 229 -300 21 -721 -353 -718 -157 1 -307 91 -383 230
                                                              -134 247 -7 551 268 638 63 20 183 17 258 -6z"></path>
                  <path d="M604 3853 c-12 -2 -30 -13 -40 -25 -18 -19 -19 -57 -19 -898 0 -849
                                                              1 -879 19 -899 l19 -21 778 0 778 0 20 26 c17 21 21 41 21 99 0 63 -3 75 -26
                                                              100 -21 23 -31 26 -57 21 -41 -8 -57 -25 -66 -67 l-7 -34 -664 0 -665 0 0 775
                                                              0 775 665 0 665 0 5 -206 c4 -185 7 -209 24 -228 28 -31 79 -28 105 5 20 25
                                                              21 39 21 275 0 248 0 248 -24 276 l-24 28 -754 1 c-414 1 -763 0 -774 -3z"></path>
                  <path d="M2908 3846 c-121 -28 -232 -105 -301 -209 -19 -28 -55 -99 -82 -157
                                                              -26 -58 -64 -142 -85 -186 -21 -45 -60 -130 -86 -188 -35 -79 -53 -108 -68
                                                              -111 -12 -2 -156 -6 -321 -9 -342 -6 -363 -10 -444 -82 -70 -63 -95 -120 -95
                                                              -219 -1 -70 3 -87 29 -134 37 -67 92 -115 164 -142 55 -21 62 -21 501 -12 500
                                                              10 489 9 578 89 42 38 61 75 222 429 13 28 49 108 81 178 33 70 59 139 59 153
                                                              0 26 -43 74 -66 74 -42 0 -68 -27 -110 -118 -24 -52 -44 -95 -44 -97 0 -2 -19
                                                              -45 -43 -97 -24 -51 -74 -160 -112 -241 -73 -159 -108 -202 -167 -211 -18 -3
                                                              -210 -7 -427 -10 -431 -6 -435 -5 -483 52 -39 46 -44 94 -16 150 41 82 37 81
                                                              435 90 289 6 353 10 368 22 19 16 33 44 206 424 60 131 124 259 142 284 69 97
                                                              213 157 320 132 106 -23 188 -86 239 -182 l23 -43 0 -720 0 -720 -27 -51 c-40
                                                              -75 -64 -100 -193 -199 -65 -50 -143 -110 -175 -135 -32 -25 -128 -99 -215
                                                              -165 -86 -66 -161 -127 -166 -137 -5 -9 -15 -45 -23 -80 -7 -35 -46 -207 -85
                                                              -383 -40 -176 -85 -380 -102 -453 -16 -73 -38 -151 -49 -172 -37 -73 -131
                                                              -113 -225 -96 -41 8 -108 64 -131 109 -26 50 -18 122 51 427 37 162 76 336 87
                                                              385 11 50 29 131 40 180 11 50 28 126 37 170 33 151 34 152 266 328 314 237
                                                              367 280 378 304 24 53 -33 118 -88 98 -25 -10 -92 -59 -443 -330 -160 -123
                                                              -211 -179 -232 -253 -9 -32 -111 -480 -172 -757 -11 -49 -28 -128 -39 -175
                                                              -48 -217 -59 -285 -53 -330 21 -149 109 -252 254 -299 80 -27 118 -26 194 1
                                                              106 37 172 91 215 176 21 41 43 134 171 707 33 149 65 291 71 317 11 46 12 48
                                                              324 287 172 132 334 264 361 293 26 29 63 87 83 128 l36 75 0 750 0 750 -38
                                                              75 c-82 166 -223 260 -407 274 -36 3 -90 -1 -122 -8z"></path>
                  <path d="M1203 3500 c-12 -5 -29 -20 -39 -35 -14 -21 -15 -30 -4 -56 7 -17 24
                                                              -35 37 -40 13 -5 92 -9 174 -9 146 0 151 1 174 25 14 13 25 31 25 39 0 31 -24
                                                              65 -53 76 -36 12 -283 12 -314 0z"></path>
                  <path d="M1115 2687 c-76 -19 -84 -20 -170 -5 -56 9 -97 12 -107 6 -20 -10
                                                              -42 -47 -34 -55 3 -3 56 -15 118 -25 l112 -19 113 26 c94 22 113 30 113 45 0
                                                              19 -36 51 -55 49 -5 -1 -46 -11 -90 -22z"></path>
                  <path d="M1175 2540 c-72 -19 -111 -50 -100 -77 3 -8 5 -64 5 -124 l0 -109 29
                                                              0 c17 0 33 6 38 13 4 6 8 57 8 111 l0 99 55 16 c72 21 80 27 80 62 0 35 -12
                                                              36 -115 9z"></path>
                  <path d="M787 2544 c-15 -15 -6 -54 16 -68 12 -8 46 -17 75 -21 l52 -7 0 -90
                                                              c0 -105 9 -128 50 -128 l30 0 -1 78 c-1 108 -13 192 -28 202 -7 4 -47 13 -89
                                                              20 -42 7 -81 14 -87 16 -6 3 -14 1 -18 -2z"></path>
                  <path d="M3436 1637 c-36 -36 -35 -42 26 -232 35 -110 39 -114 97 -149 55 -33
                                                            98 -59 271 -166 47 -29 99 -61 115 -70 62 -36 352 -214 402 -246 97 -63 134
                                                            -157 99 -249 -34 -89 -141 -148 -226 -125 -22 6 -77 34 -122 62 -46 28 -99 60
                                                            -118 71 -19 10 -54 32 -77 48 -23 16 -44 29 -47 29 -4 0 -31 16 -61 35 -30 19
                                                            -80 51 -111 71 -30 19 -70 43 -87 53 -18 10 -93 56 -167 101 -74 46 -145 88
                                                            -157 94 -13 6 -23 14 -23 19 0 4 -6 7 -14 7 -8 0 -30 18 -49 40 -30 35 -52 89
                                                            -83 202 -11 40 -45 68 -83 68 -39 0 -61 -17 -75 -54 -7 -19 43 -196 71 -249
                                                            25 -50 81 -103 161 -154 81 -53 303 -190 337 -209 11 -6 149 -90 307 -187 318
                                                            -196 359 -213 470 -204 86 7 144 33 209 94 91 85 132 206 109 319 -25 123 -85
                                                            196 -229 281 -53 31 -122 74 -153 95 -31 21 -59 38 -63 38 -3 0 -29 15 -58 34
                                                            -51 33 -266 166 -318 196 -14 8 -55 33 -91 54 l-66 39 -37 113 c-21 63 -43
                                                            120 -49 129 -6 9 -28 18 -48 21 -30 5 -41 2 -62 -19z"></path>                                </g>
              </svg>
            </div>
          </div>
          <div onClick={() => setActiveCard(2)} className='returnsReplacing-card'>
            <div className='returnsReplacing-right-container'>
              <div>0</div>
              <div>طلبات الاستبدال المعتمدة</div>
            </div>
            <div className='returnsReplacing-left-container'>
              <svg
                style={{ fill: "white", width: "40px" }}
                version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128.000000 128.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" stroke="none" className="white-color-class">
                  <path d="M0 1080 c0 -13 7 -20 20 -20 13 0 20 7 20 20 0 13 -7 20 -20 20 -13
                                                              0 -20 -7 -20 -20z"></path>
                  <path d="M90 1080 c0 -19 7 -20 145 -20 138 0 145 1 145 20 0 19 -7 20 -145
                                                              20 -138 0 -145 -1 -145 -20z"></path>
                  <path d="M5 997 c-3 -6 -4 -167 -3 -357 l3 -345 82 -5 c82 -5 83 -5 101 -39
                                                              20 -38 73 -71 112 -71 36 0 88 35 111 75 l21 35 234 0 c196 0 234 -2 234 -14
                                                              0 -27 64 -84 103 -91 49 -9 105 19 132 68 19 35 22 36 80 39 l60 3 3 127 3
                                                              127 -99 153 -98 153 -115 5 -114 5 -3 73 -3 72 -420 0 c-328 0 -421 -3 -424
                                                              -13z m805 -47 c0 -20 -7 -20 -360 -20 -353 0 -360 0 -360 -20 0 -20 7 -20 360
                                                              -20 l360 0 0 -235 0 -235 -180 0 -180 0 0 -25 0 -25 180 0 c173 0 180 -1 180
                                                              -20 0 -19 -7 -20 -195 -20 -162 0 -195 2 -195 14 0 26 -51 75 -90 87 -33 10
                                                              -44 9 -83 -10 -31 -15 -50 -33 -62 -56 -16 -35 -17 -35 -80 -35 -58 0 -65 2
                                                              -65 20 0 18 7 20 55 20 52 0 55 1 55 25 0 24 -3 25 -55 25 l-55 0 0 275 0 275
                                                              385 0 c378 0 385 0 385 -20z m260 -150 c10 -18 6 -19 -77 -22 l-88 -3 -3 -109
                                                              c-2 -81 1 -112 10 -118 7 -4 84 -8 171 -8 l157 0 0 -59 0 -60 -32 -3 c-25 -2
                                                              -33 -8 -33 -23 0 -15 8 -21 33 -23 24 -2 32 -8 32 -23 0 -16 -7 -19 -42 -19
                                                              -39 0 -45 3 -65 39 -27 48 -81 75 -129 66 -37 -6 -104 -65 -104 -90 0 -8 -9
                                                              -15 -20 -15 -19 0 -20 7 -20 245 l0 245 100 0 c88 0 100 -2 110 -20z m77 -122
                                                              c22 -35 43 -69 47 -75 6 -10 -22 -13 -123 -13 l-131 0 0 75 0 75 84 0 84 0 39
                                                              -62z m-790 -310 c31 -29 31 -87 1 -115 -45 -42 -112 -31 -134 22 -15 38 -11
                                                              59 19 93 27 29 82 30 114 0z m712 12 c10 -5 24 -23 31 -40 35 -86 -83 -156
                                                              -140 -82 -57 72 27 166 109 122z"></path>
                  <path d="M280 310 c0 -13 7 -20 20 -20 13 0 20 7 20 20 0 13 -7 20 -20 20 -13
                                                              0 -20 -7 -20 -20z"></path>
                  <path d="M1000 310 c0 -15 7 -20 25 -20 18 0 25 5 25 20 0 15 -7 20 -25 20
                                                            -18 0 -25 -5 -25 -20z"></path>
                </g>
              </svg>
            </div>
          </div>
          <div onClick={() => setActiveCard(3)} className='returnsReplacing-card'>
            <div className='returnsReplacing-right-container'>
              <div>0</div>
              <div>طلب مرفوض</div>
            </div>
            <div className='returnsReplacing-left-container'>
              <svg style={{ fill: "white", width: "40px" }}
                version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128.000000 128.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" stroke="none" className="white-color-class">
                  <path d="M505 1265 c-234 -48 -441 -255 -490 -490 -87 -416 244 -799 666 -771
                                                              47 3 113 14 147 24 264 83 452 337 452 612 0 275 -188 529 -453 612 -83 25
                                                              -232 32 -322 13z m309 -115 c346 -119 476 -543 257 -833 -216 -286 -646 -286
                                                              -862 0 -143 188 -143 458 0 646 80 107 202 183 331 207 69 13 208 3 274 -20z"></path>
                  <path d="M609 967 c-8 -7 -23 -27 -32 -46 -46 -92 10 -511 68 -511 39 0 75
                                                              154 82 353 4 98 2 124 -13 155 -20 43 -41 61 -69 61 -11 0 -27 -5 -36 -12z"></path>
                  <path d="M610 360 c-21 -21 -18 -42 8 -72 21 -25 37 -22 61 8 26 33 26 39 1
                                                            64 -25 25 -45 25 -70 0z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className='returnsReplacing-search-bar'>
          <div className="returnsReplacing-search-container">
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText
                className="trackFilter-input"
                placeholder="ابحث برقم الطلب أو رقم الشحنة أو معلومات العميل , ثم انقر ادخال"
              />
            </span>
          </div>
          <div className='returnsReplacing-search-button'>
            <button>تصدير</button>
          </div>
        </div>
        <div className='returnsReplacing-bottom-container'>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              colorScheme: 'light', // or 'dark'
              primaryColor: 'blue', // Set the primary color
              fontFamily: 'Arial, sans-serif', // Set a custom font family
            }}
          >
            {activeCard === 1 && <ReturnsReplacingNewOrder />}
            {activeCard === 2 && <ReturnsReplacingSubmittedOrder />}
            {activeCard === 3 && <ReturnsReplacingRefusedOrder />}
          </MantineProvider>
        </div>
  
      </div>
    )
  }
  