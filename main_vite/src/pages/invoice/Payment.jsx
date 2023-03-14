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
import img_gcash from '../../assets/images/gcashLogo.png'

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
    const [ sp_paymentMethod, sp_paymentMethodSet ] = useState('cod');

    // useEffect
    useEffect(() => {
        runReminder(sp_reminder, sp_reminderSet);
    }, []);


    // useNavigate
    const navigation = useNavigate();
    

    // Logic
    sp_currentPageSet('');

    // handlre
    const hndl_totalPrice = ()=>{
        if( sp_checkout.length > 0)
        return sp_checkout.reduce((sum, item)=> sum + (Number(item.Price) * item.Quantity), 0)
        else
        return 0;
    }
    const hndl_order = ()=>{

    }

    // populate
    const ppl_checkoutItem = (checkoutItem)=>{

        let  producedList = checkoutItem.map(item=>{
            let itemDetails = sp_items.find(item2=>item2.ID == item.ID);
            let cartItem = sp_cart.find(item2=>item2.CardID == item.CardID);

            return <div key={item.CardID} className='rounded bg-indigo-50 flex justify-between'>
                <div className=''>
                    <div className='h-20 aspect-[10/8]'>
                        <img className="relative w-full h-full object-center object-contain" src={itemDetails.Image}/>
                    </div>
                </div>
                <div className='w-full'>
                    <div>
                        <h2 className="font-semibold tracking-tight text-zinc-900 text-xl">{itemDetails.Name}</h2>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <label className='text-xs'>Color: </label>
                        <div className={`w-3 h-3 rounded bg-${ColorTransform(cartItem.Color)}`}></div>
                        <label className='pl-1 text-xs'>Size: </label>
                        <div>{cartItem.Size}</div>
                    </div>
                    <div className='flex items-center gap-x-1'>
                    <label className='text-xs'>QTY: </label>
                        <div className='text-sm'>{item.Quantity}</div>
                    </div>
                    <div className='flex items-center gap-x-1'>
                    <label className='text-xs'>Price: </label>
                        <div className='text-sm'>&#8369;{item.Price}</div>
                    </div>
                </div>
            </div>
        });
        return producedList
    }

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
                    <div className='flex flex-col gap-y-2'>
                        {ppl_checkoutItem(sp_checkout)}
                    </div>
                </section>
            </div>
            <div className='w-4/12 p-1'>
                {/* Payments */}
                <section className={`rounded bg-slate-100 p-2`}>
                    <div className='pb-1'>
                        <h4 className='font-semibold tracking-wider text-xl w-full text-right'>Payment Method</h4>
                    </div>
                    <div className={`my-2 border-2 flex items-center p-2 rounded-lg ${sp_paymentMethod == 'cod' ? 'border-indigo-500 bg-slate-50' : 'cursor-pointer border-indigo-100 bg-slate-200 hover:border-indigo-500 hover:bg-slate-50'}`} onClick={()=>{sp_paymentMethodSet('cod')}}>
                        <Icon name="cash_on_delivery" size={1.5} tailwindClass="fill-indigo-800" />
                        <label className='pl-1 tracking-tight cursor-pointer'>Cash on Delivery</label>                        
                    </div>
                    <div className={`my-2 border-2 flex items-center p-2 rounded-lg ${sp_paymentMethod == 'ecj' ? 'border-indigo-500 bg-slate-50' : 'cursor-pointer border-indigo-100 bg-slate-200 hover:border-indigo-500 hover:bg-slate-50'}`} onClick={()=>{sp_paymentMethodSet('ecj')}}>
                        <Icon name="wallet" size={1.3} tailwindClass="fill-indigo-800" />
                        <label className='pl-1 tracking-tight cursor-pointer'>ECJ Wallet</label>                        
                    </div>
                    <div className={`my-2 border-2 flex items-center p-2 rounded-lg ${sp_paymentMethod == 'card' ? 'border-indigo-500 bg-slate-50' : 'cursor-pointer border-indigo-100 bg-slate-200 hover:border-indigo-500 hover:bg-slate-50'}`} onClick={()=>{sp_paymentMethodSet('card')}}>
                        <Icon name="credit_card" size={1.3} tailwindClass="fill-indigo-800" />
                        <label className='pl-1 tracking-tight cursor-pointer'>Debit/Master Card</label>                        
                    </div>
                    <div className={`my-2 border-2 flex items-center p-2 rounded-lg ${sp_paymentMethod == 'gcash' ? 'border-indigo-500 bg-slate-50' : 'cursor-pointer border-indigo-100 bg-slate-200 hover:border-indigo-500 hover:bg-slate-50'}`} onClick={()=>{sp_paymentMethodSet('gcash')}}>
                        <div className="relative w-[1.4rem] aspect-square overflow-hidden">
                            <img className="relative w-full h-full object-cover object-center" src={img_gcash} />
                        </div>
                        <label className='pl-1 tracking-tight cursor-pointer'>Gcash </label>                        
                    </div>
                    <div className={`my-2 border-2 flex items-center p-2 rounded-lg ${sp_paymentMethod == 'pal' ? 'border-indigo-500 bg-slate-50' : 'cursor-pointer border-indigo-100 bg-slate-200 hover:border-indigo-500 hover:bg-slate-50'}`} onClick={()=>{sp_paymentMethodSet('pal')}}>
                        <Icon name="paypal" size={1.3} tailwindClass="fill-indigo-800" />
                        <label className='pl-1 tracking-tight cursor-pointer'>Paypal</label>                        
                    </div>

                </section>
                {/* Pay Button*/}
                <section className='mt-5 rounded bg-slate-100 p-2'>
                    <div className='w-full flex pb-1'>
                        <h4 className='w-full text-lg text-right'>&#8369;{hndl_totalPrice()}</h4>
                    </div>
                    <div className='w-full flex justify-end'>
                        <button className='w-full py-2 text-slate-100 bg-indigo-700 hover:bg-indigo-900 duration-500' onClick={hndl_order}>Place Order</button>
                    </div>
                </section>
            </div>
        </main>
    </main>
     <Footer />
    </>
}