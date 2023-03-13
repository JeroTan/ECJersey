import { useState } from 'react'

export default ({name, size=1, tailwindClass=''})=>{
    switch(name){
        case 'bars':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*0.88)+'em'} height={(size*1)+'em'} viewBox="0 0 448 512"><path className={tailwindClass} d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
        break;
        case 'facebook':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 512 512"><path className={tailwindClass} d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
        break;
        case 'youtube':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1.13)+'em'} height={(size*1)+'em'} viewBox="0 0 576 512"><path className={tailwindClass} d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z"></path></svg>
        break;
        case 'twitter':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 512 512"><path className={tailwindClass} d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
        break;
        case 'instagram':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*0.88)+'em'} height={(size*1)+'em'} viewBox="0 0 448 512"><path className={tailwindClass} d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
        break;
        case 'bulb':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path fill="none" className={tailwindClass} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547Z"></path></svg>
        break;
        case 'filter':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path className={tailwindClass} d="M3 4c2.01 2.59 7 9 7 9v7h4v-7s4.98-6.41 7-9H3z"></path></svg>
        break;
        case 'list_view':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path className={tailwindClass} d="M3 21v-8h18v8Zm0-10V3h18v8Z"></path></svg>
        break;
        case 'window_view':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path className={tailwindClass} d="M3 11V3h8v8Zm0 10v-8h8v8Zm10-10V3h8v8Zm0 10v-8h8v8Z"></path></svg>
        break;
        case 'cart':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path className={tailwindClass} d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM6.15 6l2.4 5h7l2.75-5ZM3.625 17L6.6 11.6L3 4H1V2h3.25l.95 2h16.5l-4.975 9H8.1L7 15h12v2Zm4.925-6h7Z"></path></svg>
        break;
        case 'play':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path className={tailwindClass} d="M9.5 9.325v5.35q0 .575.525.875q.525.3 1.025-.05l4.15-2.65q.475-.3.475-.85t-.475-.85L11.05 8.5q-.5-.35-1.025-.05q-.525.3-.525.875ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"></path></svg>
        break;
        case 'home':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path className={tailwindClass} d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"></path></svg>
        break;
        case 'cash_on_delivery':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path className={tailwindClass} d="M18.5 16.8c-.7 0-1.2-.6-1.2-1.2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2c.1.6-.5 1.2-1.2 1.2m0-4.8c-1.9 0-3.5 1.6-3.5 3.5c0 2.6 3.5 6.5 3.5 6.5s3.5-3.9 3.5-6.5c0-1.9-1.6-3.5-3.5-3.5m-3.6-.7C14.6 10 13.4 9 12 9c-1.7 0-3 1.3-3 3s1.3 3 3 3c.4 0 .7-.1 1-.2c.2-1.4.9-2.6 1.9-3.5M13 16H7a2 2 0 0 0-2-2v-4a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2s1 0 2 .6V6H3v12h10.5c-.2-.7-.4-1.3-.5-2Z"></path></svg>
        break;
        case 'wallet':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path className={tailwindClass} d="M10 16V8a2 2 0 0 1 2-2h9V5c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-1h-9a2 2 0 0 1-2-2zm3-8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h9V8h-9zm3 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"></path></svg>
        break;
        case 'credit_card':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path className={tailwindClass} d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-8h16V8H4Z"></path></svg>
        break;
        case 'person':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path className={tailwindClass} d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12Zm-8 8v-2.8q0-.85.438-1.563T5.6 14.55q1.55-.775 3.15-1.163T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20H4Z"></path></svg>
        break;
        case 'search':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path className={tailwindClass} d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"></path></svg>
        break;
        case 'down':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path className={tailwindClass} d="m12 15l-5-5h10Z"></path></svg>
        break;
        case 'up':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path className={tailwindClass} d="m7 14l5-5l5 5Z"></path></svg>
        break;
        case 'close':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path className={tailwindClass} d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"></path></svg>
        break;
        case 'first_page':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path className={tailwindClass} d="M6 18V6h2v12Zm11 0l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6Z"></path></svg>
        break;
        case '5_star':
            return <svg width={size*194} height={size*33} viewBox="0 0 194 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0489 0.927051C16.3483 0.00574006 17.6517 0.00574006 17.9511 0.927051L21.2658 11.1287C21.3996 11.5407 21.7836 11.8197 22.2168 11.8197H32.9434C33.9122 11.8197 34.3149 13.0593 33.5312 13.6287L24.8532 19.9336C24.5027 20.1883 24.3561 20.6396 24.4899 21.0517L27.8046 31.2533C28.104 32.1746 27.0495 32.9407 26.2658 32.3713L17.5878 26.0664C17.2373 25.8117 16.7627 25.8117 16.4122 26.0664L7.73419 32.3713C6.95048 32.9407 5.896 32.1746 6.19535 31.2533L9.51006 21.0517C9.64393 20.6396 9.49728 20.1883 9.14679 19.9336L0.468768 13.6287C-0.314945 13.0593 0.0878302 11.8197 1.05655 11.8197H11.7832C12.2164 11.8197 12.6004 11.5407 12.7342 11.1287L16.0489 0.927051Z" className={tailwindClass}/>
                <path d="M96.0489 0.927051C96.3483 0.00574006 97.6517 0.00574006 97.9511 0.927051L101.266 11.1287C101.4 11.5407 101.784 11.8197 102.217 11.8197H112.943C113.912 11.8197 114.315 13.0593 113.531 13.6287L104.853 19.9336C104.503 20.1883 104.356 20.6396 104.49 21.0517L107.805 31.2533C108.104 32.1746 107.05 32.9407 106.266 32.3713L97.5878 26.0664C97.2373 25.8117 96.7627 25.8117 96.4122 26.0664L87.7342 32.3713C86.9505 32.9407 85.896 32.1746 86.1954 31.2533L89.5101 21.0517C89.6439 20.6396 89.4973 20.1883 89.1468 19.9336L80.4688 13.6287C79.6851 13.0593 80.0878 11.8197 81.0566 11.8197H91.7832C92.2164 11.8197 92.6004 11.5407 92.7342 11.1287L96.0489 0.927051Z" className={tailwindClass}/>
                <path d="M56.0489 0.927051C56.3483 0.00574006 57.6517 0.00574006 57.9511 0.927051L61.2658 11.1287C61.3996 11.5407 61.7836 11.8197 62.2168 11.8197H72.9434C73.9122 11.8197 74.3149 13.0593 73.5312 13.6287L64.8532 19.9336C64.5027 20.1883 64.3561 20.6396 64.4899 21.0517L67.8046 31.2533C68.104 32.1746 67.0495 32.9407 66.2658 32.3713L57.5878 26.0664C57.2373 25.8117 56.7627 25.8117 56.4122 26.0664L47.7342 32.3713C46.9505 32.9407 45.896 32.1746 46.1954 31.2533L49.5101 21.0517C49.6439 20.6396 49.4973 20.1883 49.1468 19.9336L40.4688 13.6287C39.6851 13.0593 40.0878 11.8197 41.0566 11.8197H51.7832C52.2164 11.8197 52.6004 11.5407 52.7342 11.1287L56.0489 0.927051Z" className={tailwindClass}/>
                <path d="M136.049 0.927051C136.348 0.00574006 137.652 0.00574006 137.951 0.927051L141.266 11.1287C141.4 11.5407 141.784 11.8197 142.217 11.8197H152.943C153.912 11.8197 154.315 13.0593 153.531 13.6287L144.853 19.9336C144.503 20.1883 144.356 20.6396 144.49 21.0517L147.805 31.2533C148.104 32.1746 147.05 32.9407 146.266 32.3713L137.588 26.0664C137.237 25.8117 136.763 25.8117 136.412 26.0664L127.734 32.3713C126.95 32.9407 125.896 32.1746 126.195 31.2533L129.51 21.0517C129.644 20.6396 129.497 20.1883 129.147 19.9336L120.469 13.6287C119.685 13.0593 120.088 11.8197 121.057 11.8197H131.783C132.216 11.8197 132.6 11.5407 132.734 11.1287L136.049 0.927051Z" className={tailwindClass}/>
                <path d="M176.049 0.927051C176.348 0.00574006 177.652 0.00574006 177.951 0.927051L181.266 11.1287C181.4 11.5407 181.784 11.8197 182.217 11.8197H192.943C193.912 11.8197 194.315 13.0593 193.531 13.6287L184.853 19.9336C184.503 20.1883 184.356 20.6396 184.49 21.0517L187.805 31.2533C188.104 32.1746 187.05 32.9407 186.266 32.3713L177.588 26.0664C177.237 25.8117 176.763 25.8117 176.412 26.0664L167.734 32.3713C166.95 32.9407 165.896 32.1746 166.195 31.2533L169.51 21.0517C169.644 20.6396 169.497 20.1883 169.147 19.9336L160.469 13.6287C159.685 13.0593 160.088 11.8197 161.057 11.8197H171.783C172.216 11.8197 172.6 11.5407 172.734 11.1287L176.049 0.927051Z" className={tailwindClass}/>
            </svg>
        break;
        case 'bookmark':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path className={tailwindClass} d="M5 21V5q0-.825.588-1.413Q6.175 3 7 3h6v2H7v12.95l5-2.15l5 2.15V11h2v10l-7-3ZM7 5h6h-1Zm10 4V7h-2V5h2V3h2v2h2v2h-2v2Z"></path></svg>
            break;
        case 'share':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path className={tailwindClass} d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363q.025-.187.075-.337l-7.05-4.1q-.425.375-.95.587Q6.575 15 6 15q-1.25 0-2.125-.875T3 12q0-1.25.875-2.125T6 9q.575 0 1.1.212q.525.213.95.588l7.05-4.1q-.05-.15-.075-.337Q15 5.175 15 5q0-1.25.875-2.125T18 2q1.25 0 2.125.875T21 5q0 1.25-.875 2.125T18 8q-.575 0-1.1-.213q-.525-.212-.95-.587L8.9 11.3q.05.15.075.337Q9 11.825 9 12t-.025.362q-.025.188-.075.338l7.05 4.1q.425-.375.95-.588Q17.425 16 18 16q1.25 0 2.125.875T21 19q0 1.25-.875 2.125T18 22Z"></path></svg>
            break;
        case 'rounded_check':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path className={tailwindClass} d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"></path></svg>
        break;
        case 'eye':
            return <svg xmlns="http://www.w3.org/2000/svg" width={(size*1)+'em'} height={(size*1)+'em'} viewBox="0 0 24 24"><path className={tailwindClass} d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"></path></svg>
        break;
        case 'donut1':
            return <svg width={100*size} height={100*size} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M500 250C500 388.071 388.071 500 250 500C111.929 500 0 388.071 0 250C0 111.929 111.929 0 250 0C388.071 0 500 111.929 500 250ZM114.272 250C114.272 324.961 175.039 385.728 250 385.728C324.961 385.728 385.728 324.961 385.728 250C385.728 175.039 324.961 114.272 250 114.272C175.039 114.272 114.272 175.039 114.272 250Z" className={tailwindClass}/>
            <path d="M179 424H321V500H179V424Z" className={tailwindClass}/> </svg>
        break;
        case 'donut2':
            return <svg width={100*size} height={100*size} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M500 250C500 388.071 388.071 500 250 500C111.929 500 0 388.071 0 250C0 111.929 111.929 0 250 0C388.071 0 500 111.929 500 250ZM114.272 250C114.272 324.961 175.039 385.728 250 385.728C324.961 385.728 385.728 324.961 385.728 250C385.728 175.039 324.961 114.272 250 114.272C175.039 114.272 114.272 175.039 114.272 250Z" className={tailwindClass}/>
            <path d="M179 0H321V76H179V0Z" className={tailwindClass}/>
            <path d="M179 424H321V500H179V424Z" className={tailwindClass}/>
            </svg>
        break;
        case 'donut3':
            return <svg width={100*size} height={100*size} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M500 250C500 388.071 388.071 500 250 500C111.929 500 0 388.071 0 250C0 111.929 111.929 0 250 0C388.071 0 500 111.929 500 250ZM114.272 250C114.272 324.961 175.039 385.728 250 385.728C324.961 385.728 385.728 324.961 385.728 250C385.728 175.039 324.961 114.272 250 114.272C175.039 114.272 114.272 175.039 114.272 250Z" className={tailwindClass}/>
            <path d="M179 0H321V76H179V0Z" className={tailwindClass}/>
            </svg>
        break;
        case 'donut_link':
            return <svg width={100*size} height={100*size} viewBox="0 0 142 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H142V500H0V0Z" className={tailwindClass}/>
            </svg>
        break;
        case 'genesys':
            return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4937.89 859.48"><path className={tailwindClass} d="M4937.89,597.06v51.57q0,96.58-56.52,151.44T4725.45,855H4529.91q-99.42,0-156.61-54.89t-57.19-151.44V638.32a66.74,66.74,0,0,1,66.74-66.73,67.64,67.64,0,0,0,21,0h1a67.64,67.64,0,0,0,21,0,66.74,66.74,0,0,1,66.72,66.47v.26q.06,55.36,25.18,79.76t83.77,24.45h51q58.56,0,84.43-25.78t25.88-84V602.35q0-42.35-33.37-66.79T4647,503.81q-49-7.28-107.58-20.5a971.84,971.84,0,0,1-107.58-30.43q-49-17.19-82.38-64.8T4316.11,266.4V210.85q0-96.54,56.52-151.44T4528.56,4.52h187.35q100.76,0,157.28,54.89t56.52,151.44v5.5a66.77,66.77,0,0,1-66.77,65.91,67.64,67.64,0,0,0-21,0h-1a67.64,67.64,0,0,0-21,0,66.8,66.8,0,0,1-66.75-65q-1.2-52.53-25.13-75.78Q4702.88,117,4644.31,117h-42.79q-58.58,0-83.77,25.78t-25.18,87.94v41q0,59.52,88.52,80.68,39.48,9.24,86.46,15.87a742.84,742.84,0,0,1,94.67,19.84q47.64,13.21,87.15,35.05t64,66.13Q4937.88,533.58,4937.89,597.06Z"/><path className={tailwindClass} d="M4232.61,61a56,56,0,0,1-5.54,24.41c-.2.44-.41.87-.64,1.3L4000.79,540.18v292.3q0,22.5-23.16,22.48H3842.48q-23.16,0-23.14-22.48V540.18L3593.9,87.07l-1-2A56.47,56.47,0,0,1,3644,4.52h92.64q17.72,0,27.23,22.48L3783,68.7l26.72,58,38.14,82.81,63.37,137.61L4056.28,27q8.17-22.47,27.24-22.48h92.65A56.44,56.44,0,0,1,4232.61,61Z"/><path className={tailwindClass} d="M3347.76,825.2l138.16-169.5a92.58,92.58,0,0,0,20.79-58.42,90.32,90.32,0,0,0-59.61-84.82c-14.11-5.08-28.12-10.39-41.93-16.22,141.17,278.74-68,40.68-130.54-59.26a81.72,81.72,0,0,0-24.31-24.88C3019,260,2994.11,103.41,3335.91,164.43c1.69.31,3.38.66,5.05,1.08,31.31,7.66,70.52,10.27,104.15,1a84.55,84.55,0,0,0-22.89-166L3064.09.24h-14.85a92.55,92.55,0,0,0-71,34l-138.1,169.55a92.4,92.4,0,0,0-20.79,58.41,90.34,90.34,0,0,0,59.6,84.81c14.11,5.07,28.12,10.37,41.93,16.22-141.12-278.75,68-40.74,130.52,59.26a81.58,81.58,0,0,0,24.33,24.92C3307.67,600,3332,757,2987.33,694.61c-31.67-8.09-72-11.13-106.4-1.53A84.54,84.54,0,0,0,2903.83,859l372.11.25h.11A92.49,92.49,0,0,0,3347.76,825.2Z"/><path className={tailwindClass} d="M3093.87,598.75c-32.5-.06-46.61-45.48-58.15-70.31a1.23,1.23,0,0,1,.57-1.65,1.19,1.19,0,0,1,.83-.09C3064.89,533,3171.94,598.54,3093.87,598.75Z"/><path className={tailwindClass} d="M3290.44,331.26a1.23,1.23,0,0,1-.68,1.61,1.21,1.21,0,0,1-.88,0c-25.45-8-129.54-65.73-64.41-71.16C3263.78,256.27,3280,302.62,3290.44,331.26Z"/><path className={tailwindClass} d="M2733.38,836.76q0,22.74-22,22.72H2243.27a34.74,34.74,0,0,1-34.74-34.74v-790A34.74,34.74,0,0,1,2243.27,0h468.07q22,0,22,22.72c.42,49.73-40.93,91-91.1,90.9H2415.77A34.74,34.74,0,0,0,2381,148.36V366.49h236.19c69.1,4.69,69.19,108.5,0,113.22H2381V711.12a34.74,34.74,0,0,0,34.74,34.74h226.51C2692.45,745.71,2733.81,787,2733.38,836.76Z"/><path className={tailwindClass} d="M2064.11,22.72v814q0,22.74-23.38,22.72H1929.4q-22,0-35.78-21.39l-298.82-520V836.76q0,22.74-23.4,22.72H1449.07q-23.41,0-23.4-22.72v-814q0-22.71,23.4-22.72h114.07q22,0,30.29,14.69L1895,541.15V22.72Q1895,0,1918.39,0h122.34Q2064.1,0,2064.11,22.72Z"/><path className={tailwindClass} d="M1301.25,836.76q0,22.74-22,22.72H811.14a34.74,34.74,0,0,1-34.74-34.74v-790A34.74,34.74,0,0,1,811.14,0h468.07q22,0,22,22.72c.42,49.73-40.93,91-91.1,90.9H983.64a34.74,34.74,0,0,0-34.74,34.74V366.49h236.19c69.1,4.69,69.19,108.5,0,113.22H948.9V711.12a34.74,34.74,0,0,0,34.74,34.74h226.51C1260.32,745.71,1301.68,787,1301.25,836.76Z"/><path className={tailwindClass} d="M459.47,255.3V212.53q0-98.91-103.38-98.91H285.44q-103.41,0-103.39,98.91V647q0,98.91,103.39,98.91h70.65q103.35,0,103.38-98.91V526.64c0-8.89-5.27-13.36-15.79-13.36H327.36q-24.42,0-24.41-22.72V422.38q0-22.71,24.41-22.72h284q30.12,0,30.14,28.07V652.29q0,97.59-58.86,152.4T419,859.48H222.55q-106.25,0-164.41-54.79T0,652.29V207.19q0-98.92,58.14-153T222.55,0H419Q525.22,0,583.35,54.14t58.16,153.05V255.3q0,24.06-24.41,24.06H483.88Q459.46,279.36,459.47,255.3Z"/></svg>
        break;
        default:
            return null;
    }
}