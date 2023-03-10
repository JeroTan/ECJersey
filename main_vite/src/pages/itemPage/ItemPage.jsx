import { useState, useContext, useRef, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

/// utilities
import { ColorTransform } from '../../utilities/ColorTransform';
import Icon from '../../utilities/Icon';
import { runReminder } from '../../utilities/ReminderRun';

/// Global
import { Gbl_currentPage } from '../../data/CurrentPage';
import { Gbl_reminder } from '../../data/Reminder';
import { Gbl_items } from '../../data/Item';

/// Pages
import Navbar from '../../utilities/Navbar';
import Foorter from '../../utilities/Foorter';

/// assets
import './ItemList.css';

export default ()=>{
    // useParam
    const { id } = useParams();

    // useNavigate
    let nagivation = useNavigate();

    // useState
    const [ sp_itemSpec, sp_itemSpecSet ] = useState({
        Color: '',
        Size: '',
        Quantity: ''
    });

    // useContext
    const { sp_currentPage, sp_currentPageSet } = useContext(Gbl_currentPage);
    const { sp_reminder, sp_reminderSet } = useContext(Gbl_reminder);
    const { sp_items, sp_itemsSet_} = useContext(Gbl_items);

    // useEffect
    useEffect(() => {
        runReminder(sp_reminder, sp_reminderSet);
    }, []);

    sp_currentPageSet('');

    // logic
    //- Check if the id is legit and if legit then extract the data
    const itemData = sp_items.find( item=>item.ID == id );
    if( itemData == false || itemData == undefined || itemData == '' || itemData == 0 ) nagivation('/notfound');
    //- randomizer of stars
    const colorPicker = ( colorList )=>{
        return colorList.map(item=>
            <div key={item} className={`relative cursor-pointer p-1 border ${item == sp_itemSpec.Color?'border-indigo-700':'border-indigo-200'} hover:border-indigo-700`} onClick={()=>{sp_itemSpecSet(prev=>({...prev, Color:item}))}}>
                {item == sp_itemSpec.Color ? <>
                    <div className={`absolute top-0 right-0`}>
                        <Icon name={'rounded_check'} size={0.7} tailwindClass={`fill-indigo-700`}/>
                    </div>
                </> : ''
                }
                <div className={`w-4 h-4 rounded bg-${ColorTransform(item)}`}>
                </div>
            </div>
        )
    }
    return <>
    <Navbar />
    <main className={`bg-gradient-to-r from-sky-900 via-gray-900 to-indigo-900 w-screen h-full flex justify-center py-10 px-2`}>
        <main className={`w-[80rem] bg-slate-100 drop-shadow-xl p-2 flex justify-start rounded-sm`}>
            <section className='w-8/12 p-3 '>
                <div className="w-full aspect-[10/8] bg-slate-200 p-2">
                    <img className="relative w-full h-full object-center object-contain" src={itemData.Image}/>
                </div>
                <div className="flex justify-center text-slate-100 mt-3">
                    <button className="bg-indigo-700 w-6 h-7 text-center flex justify-center items-center">
                        <label className='cursor-pointer'>1</label>
                    </button>
                </div>
            </section>
            <section className='w-4/12 p-3'>
                {/*Name of the product*/}
                <div className='pb-5'>
                    <h2 className="font-semibold tracking-tight text-zinc-900 text-2xl">{itemData.Name}</h2>
                </div>
                {/*2nd Section*/}
                <section className={`flex justify-between`}>
                    <div className={``}>
                        {/*Ratings*/}
                        <div className={`flex justify-start items-center pb-1`}>
                            <div className='relative inline-block'>
                                <div className='absolute z-10 overflow-hidden' style={{width: `${itemData.Rating}%`}}>
                                    <Icon name="5_star" size={0.4} tailwindClass="fill-indigo-700" />
                                </div>
                                <div className=''>
                                    <Icon name="5_star" size={0.4} tailwindClass="fill-zinc-300" />
                                </div>
                            </div>
                            <small className='pl-2'>{((itemData.Rating/100)*5).toFixed(1)}</small>
                        </div>
                        {/*Currently Viewing*/}
                        <div className={`flex justify-start items-center`}>
                            <div className=''>
                                <Icon name="eye" size={.9} tailwindClass="fill-indigo-500"/>
                            </div>
                            <small className='pl-1 text-xs'>{`${itemData.Views} people have viewed this product.`}</small>
                        </div>
                    </div>
                    <div className={`flex justify-end items-center`}>
                        <div className='cursor-pointer'>
                            <Icon name="share" size={1.8} tailwindClass="fill-zinc-500"/>
                        </div>
                        <div className='cursor-pointer'>
                            <Icon name="bookmark" size={2} tailwindClass="fill-zinc-500" />
                        </div>
                    </div>
                </section>
                {/*3rd Section*/}
                <section className='pt-5'>
                    <div className='pb-2'>
                        <label className='tracking-wider'>Category</label>
                        <div className='pl-10 text-xs text-slate-500'>
                            {itemData.Category.charAt(0).toUpperCase() + itemData.Category.slice(1)}
                        </div>
                    </div>
                    <div className='pb-2'>
                        <label className='tracking-wider'>Color</label>
                        <div className='pl-10 flex gap-2'>
                            
                            {colorPicker(itemData.Color)}
                        </div>
                    </div>
                    <div className='pb-2'>
                        <label className='tracking-wider'>Size</label>
                    </div>
                    <div className='pb-2'>
                        <label className='tracking-wider'>Quantity</label>
                    </div>
                </section>
            </section>
        </main>
    </main>
    <Foorter />
    </>
}