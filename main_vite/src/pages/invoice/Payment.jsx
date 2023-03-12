import { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

/// utilities
import { ColorTransform } from '../../utilities/ColorTransform';
import Icon from '../../utilities/Icon';
import { runReminder } from '../../utilities/ReminderRun';
import { pop_info } from '../../utilities/Sweetalert';

/// Global
import { Gbl_currentPage } from '../../data/CurrentPage';
import { Gbl_reminder } from '../../data/Reminder';
import { Gbl_items } from '../../data/Item';
import { Gbl_cart } from '../../data/Cart';
import { Gbl_session } from '../../data/Session';
import { Gbl_checkout } from '../../data/Checkout';
import { Gbl_account } from '../../data/Account';

/// Pages
import Navbar from '../../utilities/Navbar';
import Footer from '../../utilities/Footer';

/// assets

export default ()=>{
    // useContext
    const { sp_currentPage, sp_currentPageSet } = useContext(Gbl_currentPage);
    const { sp_reminder, sp_reminderSet } = useContext(Gbl_reminder);
    const { sp_items, sp_itemsSet } = useContext(Gbl_items);
    const { sp_cart, sp_cartSet } = useContext(Gbl_cart);
    const { sp_session, sp_sessionSet } = useContext(Gbl_session);
    const { sp_checkout, sp_checkoutSet } = useContext(Gbl_checkout);
    const { sp_account, sp_accountSet } = useContext(Gbl_account);
    

    // useState

    // useEffect
    useEffect(() => {
        runReminder(sp_reminder, sp_reminderSet);
    }, []);


    // useNavigate
    const navigation = useNavigate();
    

    // Logic
    sp_currentPageSet('');


    return <>
    <Navbar />
    <main className={`bg-gradient-to-r from-sky-900 via-gray-900 to-indigo-900 w-full h-full flex justify-center py-10 px-2 flex-1`}>
        <main className={`w-[80rem] bg-slate-200 drop-shadow-xl p-2 flex flex-wrap rounded-sm`}>
            <div className='w-8/12 p-1'>
                {/* Shipping Address*/}
                <section className='mb-5 rounded bg-slate-100 p-2'>
                    <div className='flex justify-between pb-1'>
                        <h4 className='font-semibold tracking-wide text-xl w-full'>Shipping Address</h4>
                        <div>
                            <small className='text-indigo-500 tracking-wide text-base underline cursor-pointer'>Edit</small>
                        </div>
                    </div>
                    <input type="text" className='w-full bg-slate-300 py-2 px-1' disabled value={`Feu Tech Korean Server`}/>
                </section>
                {/* Checkout Items*/}
                <section className={`mb-5 rounded bg-slate-100 p-2`}>
                    <div className='pb-1 '>
                        <h4 className='font-semibold tracking-wide text-xl w-full'>Invoice</h4>
                    </div>
                </section>
            </div>
            <div className='w-4/12 p-1'>
                {/* Payments */}
                <section className={`rounded bg-slate-100 p-2`}>
                    <div className='pb-1'>
                        <h4 className='font-semibold tracking-wide text-xl w-full text-right'>Payment Method</h4>
                    </div>
                </section>
                 {/* Pay Button*/}
                 <section>
    
                 </section>
            </div>
        </main>
    </main>
     <Footer />
    </>
}