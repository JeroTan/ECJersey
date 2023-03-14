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
    

    // useState

    // useEffect
    useEffect(() => {
        runReminder(sp_reminder, sp_reminderSet);
        sp_checkoutSet([]);
    }, []);


    // useNavigate
    const navigation = useNavigate();
    

    // Logic
    sp_currentPageSet('');

    // populate
    const ppl_cartItems = (cartItem)=>{
        let itemDetails = sp_items.find(item=>item.ID == cartItem.ID);
        
        return <>
        <div key={cartItem.CartID} className={`w-full flex justify-between p-2 gap-x-2 bg-slate-100`} for={cartItem.CartID}>
            <section className='flex items-center'>
                <input id={cartItem.CartID} type="checkbox" value={cartItem.CartID} className='border border-indigo-500' onClick={({target})=>{
                    let checkoutIndex = sp_checkout.findIndex(item=>item.CartID == cartItem.CartID);
                    let cartIndex = sp_cart.findIndex(item=>item.CartID == cartItem.CartID );
                    if(target.checked){
                        sp_checkoutSet(prev=>[
                            ...prev,
                            {
                                CartID: cartItem.CartID,
                                ID: itemDetails.ID,
                                Quantity: sp_cart[cartIndex].Quantity,
                                Price: itemDetails.Price,
                            }
                        ])
                    }else if(!target.checked && checkoutIndex > -1){
                        sp_checkoutSet(prev=>{
                            let temp = [...prev];
                            temp.splice(checkoutIndex, 1);
                            return temp;
                        })
                    }
                }}/>
            </section>
            <section className='w-full flex justify-between gap-x-2'>
                {/* Image */}
                <div className=''>
                    <div className='h-20 aspect-[10/8]'>
                        <img className="relative w-full h-full object-center object-contain" src={itemDetails.Image}/>
                    </div>
                </div>
                {/* Description */}
                <div className='w-full'>
                    <div className='pb-2'>
                        <h2 className="font-semibold tracking-tight text-zinc-900 text-xl">{itemDetails.Name}</h2>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-x-1'>
                            <label className='text-xs'>Color: </label>
                            <div className={`w-3 h-3 rounded bg-${ColorTransform(cartItem.Color)}`}></div>
                            <label className='pl-1 text-xs'>Size: </label>
                            <div>{cartItem.Size}</div>
                        </div>
                        <div className=''>
                            <div>
                                <label className='text-xs'>Quantity</label>
                            </div>
                            <div>
                                <input className={`outline outline-1 focus:outline-indigo-700 outline-indigo-200 p-1 px-2 text-xs rounded-sm`} type="number" min="1" max={itemDetails.Quantity} value={cartItem.Quantity} onInput={({target})=>{
                                    let origValue = Number(target.value);
                                    origValue = origValue <= target.max ? origValue : target.max;
                                    origValue = origValue >= target.min ? origValue : target.min;
                                    let index = sp_cart.findIndex(item=>item.CartID == cartItem.CartID);
                                    sp_cartSet(prev=>{
                                        let temp = [...prev];
                                        temp.splice(index, 1,{
                                            CartID:prev[index].CartID,
                                            ID:itemDetails.ID,
                                            Quantity: origValue,
                                            Color:prev[index].Color,
                                            Size:prev[index].Size
                                        });
                                        return temp;
                                    })
                                    let checkoutIndex = sp_checkout.findIndex(item=>item.CartID == cartItem.CartID);
                                    if(checkoutIndex >-1){
                                        let temp = [...sp_checkout];
                                        sp_checkoutSet([]);
                                        sp_checkoutSet(prev=>{
                                            let temp2 = [...temp];
                                            temp2.splice(checkoutIndex, 1,{
                                                CartID: temp[checkoutIndex].CartID,
                                                ID: itemDetails.ID,
                                                Quantity: origValue,
                                                Price: itemDetails.Price,
                                            });
                                            return temp2;
                                        });
                                    }
                                    // WELCOME TO HELL!!
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
        </>
    }

    //handler
    const hndl_totalPrice = ()=>{
        if( sp_checkout.length > 0)
        return sp_checkout.reduce((sum, item)=> sum + (Number(item.Price) * item.Quantity), 0)
        else
        return 0;
    }

    const hndl_checkout = ()=>{
        if(sp_cart.length < 1){
            pop_info('warning', 'There is no item in the cart yet.');
            return false;
        }
        if(sp_checkout.length < 1){
            pop_info('warning', 'Please check the product that you want to buy to proceed to checkout.');
            return false;   
        }
        navigation('/payment');
    }

    return <>
    <Navbar/>
    <main className={`bg-gradient-to-r from-sky-900 via-gray-900 to-indigo-900 w-full h-full flex justify-center py-10 px-2 flex-1`}>
        <main className={`w-[80rem] bg-slate-200 drop-shadow-xl p-2 flex justify-start rounded-sm`}>
            {/* Checkout Option but on mobile */}
            <section className='fixed'>

            </section>
            {/* Item Section */}
            <section className='w-full flex'>
                {/* Item Container */}
                <main className='w-8/12 flex flex-wrap flex-col gap-y-2'>
                    {
                        sp_cart.length > 0 ?
                        sp_cart.map((item, index)=><div key={index} className="w-full">{ppl_cartItems(item)}</div>) :
                        <div className={`w-full p-2 gap-x-2 bg-slate-100`}>
                            <h6 className='tracking-wider font-bold text-2xl text-indigo-900'>The cart is empty.</h6>
                            <p className='text-slate-400'>You can browse our jersey <Link to="/home" className='underline underline-offset-1 text-indigo-700'>here</Link>.</p>
                        </div>
                    }
                </main>
                {/* Checkout Option but on desktop */}
                <aside className='w-4/12 pt-5'>
                    <div className='w-full pb-5'>
                        <h4 className='font-semibold tracking-wide text-2xl text-right w-full'>Total Price</h4>
                        <h6 className='text-right text-sky-700 tracking-wide text-lg'>&#8369; <span>{ hndl_totalPrice() }</span></h6>
                    </div>
                    <div className='w-full flex justify-end'>
                        <button className='w-72 py-2 text-slate-100 bg-indigo-700 hover:bg-indigo-900 duration-500' onClick={hndl_checkout}>Checkout</button>
                    </div>
                </aside>
            </section>
        </main>
    </main>
    <Footer/>
    </>
}