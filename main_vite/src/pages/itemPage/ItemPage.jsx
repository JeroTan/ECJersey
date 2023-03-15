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
import { Gbl_checkout } from '../../data/Checkout';

/// Pages
import Navbar from '../../utilities/Navbar';
import Footer from '../../utilities/Footer';

/// assets
import './ItemPage.css';

export default ()=>{
    // useParam
    const { id } = useParams();

    // useNavigate
    let navigation = useNavigate();

    // useState
    const [ sp_itemSpec, sp_itemSpecSet ] = useState({
        Color: '',
        Size: '',
        Quantity: 1
    });
    const [ sp_itemStatus, sp_itemStatusSet ] = useState('');

    // useContext
    const { sp_currentPage, sp_currentPageSet } = useContext(Gbl_currentPage);
    const { sp_reminder, sp_reminderSet } = useContext(Gbl_reminder);
    const { sp_items, sp_itemsSet } = useContext(Gbl_items);
    const { sp_cart, sp_cartSet } = useContext(Gbl_cart);
    const { sp_session, sp_sessionSet } = useContext(Gbl_session);
    const { sp_checkout, sp_checkoutSet } = useContext(Gbl_checkout);

    // useRef
    const rf_quantity = useRef(1);

    // useEffect
    useEffect(() => {
        runReminder(sp_reminder, sp_reminderSet);
    }, []);

    //ignore the error here, it state that if the state change it will update other component but this is only component
    sp_currentPageSet('');

    // logic
    //--- Check if the id is legit and if legit then extract the data
    const itemData = sp_items.find( item=>item.ID == id );
    if( itemData == false || itemData == undefined || itemData == '' || itemData == 0 ) nagivation('/notfound');
    //--- Rerun/Set the itemSpecification
    useEffect(() => {
        sp_itemSpecSet({
            Color: itemData.Color[0],
            Size: itemData.Size[0],
            Quantity: 1
        })
    }, []);
    //--- randomizer
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
    const sizePicker = ( sizeList )=>{
        return sizeList.map( item=>
        <div key={item} className={`relative cursor-pointer border ${item == sp_itemSpec.Size?'border-indigo-700':'border-indigo-200'} hover:border-indigo-700`} onClick={()=>{sp_itemSpecSet(prev=>({...prev, Size:item}))}}>
            {item == sp_itemSpec.Size ? <>
                <div className={`absolute top-0 right-0`}>
                    <Icon name={'rounded_check'} size={0.7} tailwindClass={`fill-indigo-700`}/>
                </div>
            </> : ''
            }
            <div className='flex items-center justify-center w-9 h-9'>
                <small>{item}</small>
            </div>
        </div>
        )
    }
    const quantityPicker = ( {target} )=>{
        let origValue = Number(rf_quantity.current.value);
        origValue = origValue <= target.max ? origValue : target.max;
        origValue = origValue >= target.min ? origValue : target.min;
        sp_itemSpecSet(prev=>({...prev, Quantity:origValue}));
    }
    
    // handler
    const hndl_addToCart = ()=>{
        if( !sp_session.Login){
            navigation('/register');
            return false;
        }

        if( !(Object.keys(sp_itemSpec).every(key=>Boolean(sp_itemSpec[key])) )){
            pop_info('warning', 'Please specify the item');
            return false;
        }

        let index = sp_cart.findIndex(item=>{
            let same = true;
            same = item.ID == itemData.ID;
            same = item.Color == sp_itemSpec.Color && same;
            same = item.Size == sp_itemSpec.Size && same;
            return same;
        });
        
        let objectReturner;
        sp_cartSet(prev=>{
            if(index < 0){
                objectReturner = {
                    CartID: Date.now(),
                    ID:itemData.ID,
                    Quantity:sp_itemSpec.Quantity,
                    Color:sp_itemSpec.Color,
                    Size:sp_itemSpec.Size
                };
                return [
                    ...prev,
                    objectReturner,
                ]
            } 
            else{
                let temp = [...prev];
                objectReturner = {
                    CartID: prev[index].CartID,
                    ID:itemData.ID,
                    Quantity: (prev[index].Quantity+sp_itemSpec.Quantity) < 100 ? (prev[index].Quantity+sp_itemSpec.Quantity): 100,
                    Color:sp_itemSpec.Color,
                    Size:sp_itemSpec.Size
                };
                temp.splice(index, 1, objectReturner);
                return temp;
            }
        })
        sp_itemStatusSet('Product was added to cart.');
        return objectReturner;
    }
    const hndl_directBuy = ()=>{
        let itemDeclaration = hndl_addToCart();
        if(itemDeclaration){
            sp_checkoutSet([{...itemDeclaration, Price:itemData.Price}]);
            navigation('/payment');
        }
    }

    useEffect(()=>{
        let timer;
        if (Boolean(sp_itemStatus)) {
            timer = setTimeout(() => {
                sp_itemStatusSet('');
            }, 2000);
        }
        else
        return () => clearTimeout(timer);
    }, [sp_itemStatus])

    return <>
    <Navbar />
    <main className={`bg-gradient-to-r from-sky-900 via-gray-900 to-indigo-900 w-full h-full flex justify-center py-10 px-2`}>
        <main className={`w-[80rem] bg-slate-100 drop-shadow-xl p-2 flex flex-wrap justify-start rounded-sm`}>
            <section className='lg:w-8/12 md:w-7/12 sm:w-6/12 w-full p-3 '>
                <div className="w-full aspect-[10/8] bg-slate-200 p-2">
                    <img className="relative w-full h-full object-center object-contain" src={itemData.Image}/>
                </div>
                <div className="flex justify-center text-slate-100 mt-3">
                    <button className="bg-indigo-700 w-6 h-7 text-center flex justify-center items-center rounded">
                        <label className='cursor-pointer'>1</label>
                    </button>
                </div>
            </section>
            <section className='lg:w-4/12 md:w-5/12 sm:w-6/12 w-full p-3 relative box-border'>
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
                        <div className='pl-10 flex flex-wrap gap-2'>
                            {sizePicker(itemData.Size)}
                        </div>
                    </div>
                    <div className='pb-2'>
                        <label className='tracking-wider'>Quantity</label>
                        <div className='pl-10 flex'>
                            <input className={`outline outline-1 focus:outline-indigo-700 outline-indigo-200 p-2 text-xs rounded-sm`} type="number" min="1" max={itemData.Quantity} value={sp_itemSpec.Quantity} onInput={quantityPicker} ref={rf_quantity}/>
                        </div>
                    </div>
                    <div className='pb-2'>
                        <label className='tracking-wider'>Price</label>
                        <div className='pl-10 text-sm text-slate-500'>
                            &#8369; {itemData.Price}
                        </div>
                    </div>
                </section>
                {/*4th Section*/}
                <section className='pt-5'>
                    <div className='flex gap-2'>
                        <button className='sm:w-72 w-full py-2 text-slate-100 bg-sky-500 hover:bg-sky-700 duration-500' onClick={hndl_directBuy}>Buy</button>
                        <button className='sm:w-72 w-full py-2 text-slate-100 bg-indigo-700 hover:bg-indigo-900 duration-200' onClick={hndl_addToCart}>Add Cart</button>
                    </div>
                </section>
                {/*5th Section*/}
                <section className='w-full flex justify-end items-end'> 
                    <small className={`tracking-wide text-indigo-700 ${Boolean(sp_itemStatus)?'flip-in-ver-left':''}`}>
                        {sp_itemStatus}
                    </small>
                </section>
            </section>
        </main>
    </main>
    <Footer />
    </>
}