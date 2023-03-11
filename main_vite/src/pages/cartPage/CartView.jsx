import { useState, useContext, useRef, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

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

/// Pages
import Navbar from '../../utilities/Navbar';
import Foorter from '../../utilities/Foorter';

/// assets


export default ()=>{
    // useContext
    const { sp_currentPage, sp_currentPageSet } = useContext(Gbl_currentPage);
    const { sp_reminder, sp_reminderSet } = useContext(Gbl_reminder);
    const { sp_items, sp_itemsSet } = useContext(Gbl_items);
    const { sp_cart, sp_cartSet } = useContext(Gbl_cart);
    const { sp_session, sp_sessionSet } = useContext(Gbl_session);
    

    // useState

    // useEffect
    useEffect(() => {
        runReminder(sp_reminder, sp_reminderSet);
    }, []);


    // useNavigate
    const navigation = useNavigate();
    

    // Logic
    sp_currentPageSet('');

    // populate
    const ppl_cartItems = (cartItem)=>{
        let itemDetails = sp_items.find(item=>item.ID == cartItem.ID);
        let index = sp_cart.findIndex(item=>item.ID == cartItem.ID && item.Color == cartItem.Color && item.Size == cartItem.Size);
        
        return <>
        <div key={cartItem.ID} className={`w-full flex justify-between p-2 gap-x-2`}>
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
                            <input className={`outline outline-1 focus:outline-indigo-700 outline-indigo-200 p-2 text-xs rounded-sm`} type="number" min="1" max={itemDetails.Quantity} value={cartItem.Quantity} onInput={({target})=>{
                                console.log(target.value)
                                
                                let origValue = target.value;
                                origValue = origValue <= target.max ? origValue : target.max;
                                origValue = origValue >= target.min ? origValue : target.min;
                                sp_cartSet(prev=>{
                                    let temp = [...prev];
                                    temp.splice(index, 1,{
                                        ID:itemDetails.ID,
                                        Quantity: origValue,
                                        Color:prev.Color,
                                        Size:prev.Size
                                    });
                                    return temp;
                                    // THIS IS HELL!!!
                                })
                            }}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    }

    return <>
    <Navbar/>
    <main className={`bg-gradient-to-r from-sky-900 via-gray-900 to-indigo-900 w-full h-full flex justify-center py-10 px-2`}>
        <main className={`w-[80rem] bg-slate-100 drop-shadow-xl p-2 flex justify-start rounded-sm`}>
            {/* Checkout Option but on mobile */}
            <section className='fixed'>

            </section>
            {/* Item Section */}
            <section className='w-full flex'>
                {/* Item Container */}
                <main className='w-8/12 flex flex-wrap gap-y-2'>
                    { sp_cart.map((item, index)=><div key={index} className="w-full">{ppl_cartItems(item)}</div>) }
                </main>
                {/* Checkout Option but on desktop */}
                <aside className='w-4/12'>

                </aside>
            </section>
        </main>
    </main>
    <Foorter/>
    </>
}