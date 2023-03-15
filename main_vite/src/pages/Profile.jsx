import { useState, useContext, useRef, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

/// utilities
import { ColorTransform } from '../utilities/ColorTransform';
import Icon from '../utilities/Icon';
import { runReminder } from '../utilities/ReminderRun';
import { pop_info, pop_process } from '../utilities/Sweetalert';

/// Global
import { Gbl_currentPage } from '../data/CurrentPage';
import { Gbl_reminder } from '../data/Reminder';
import { Gbl_items } from '../data/Item';
import { Gbl_cart } from '../data/Cart';
import { Gbl_session } from '../data/Session';
import { Gbl_checkout } from '../data/Checkout';
import { Gbl_account } from '../data/Account';
import { Gbl_delivery } from '../data/Delivery';

/// Pages
import Navbar from '../utilities/Navbar';
import Footer from '../utilities/Footer';

/// assets
import logo from '../assets/ec_jersey.jpg';
import './Page.css';

export default ()=>{
    // useContext
    const { sp_currentPage, sp_currentPageSet } = useContext(Gbl_currentPage);
    const { sp_reminder, sp_reminderSet } = useContext(Gbl_reminder);
    const { sp_items, sp_itemsSet } = useContext(Gbl_items);
    const { sp_cart, sp_cartSet } = useContext(Gbl_cart);
    const { sp_session, sp_sessionSet } = useContext(Gbl_session);
    const { sp_checkout, sp_checkoutSet } = useContext(Gbl_checkout);
    const { sp_account, sp_accountSet } = useContext(Gbl_account);
    const { sp_delivery, sp_deliverySet } = useContext(Gbl_delivery);
    

    // useState
    const [ sp_profileEdit, sp_profileEditSet ] = useState({
        Firstname: false,
        Lastname: false,
        Email: false,
        Password: false,
        Address: false,
    })
    const [ sp_oldProfile, sp_oldProfileSet ] = useState({
        Firstname: '',
        Lastname: '',
        Email: '',
        Password: '',
        Address: ''
    });
    const [ sp_option, sp_optionSet ] = useState('profile')

    // useEffect
    useEffect(() => {
        runReminder(sp_reminder, sp_reminderSet);
    }, []);


    // useNavigate
    const navigation = useNavigate();
    
    // Logic
    sp_currentPageSet('');

    // handler
    const openEdit = (type)=>{
        sp_profileEditSet( prev=>({...prev, [type]:true}) );
        sp_oldProfileSet(prev=>({
            ...prev,
            [type]:sp_session.Data[type]
        })
        )
    }
    const onEdit = (value, type)=>{
        sp_sessionSet(prev=>({...prev, ['Data']:{...prev.Data, [type]:value} }));
    }
    const applyEdit = (type)=>{
        sp_profileEditSet( prev=>({...prev, [type]:false}) );

        let tempAccounts = [...sp_account];
        let accountIndex = tempAccounts.findIndex(item=>item.Email == sp_session.Data.Email);
        tempAccounts[accountIndex][type] = sp_session.Data[type];
        sp_accountSet(tempAccounts);
    }
    const cancelEdit = (type)=>{
        sp_profileEditSet( prev=>({...prev, [type]:false}) );
        
        sp_sessionSet(prev=>({...prev, ['Data']:{...prev.Data, [type]:sp_oldProfile[type]} }));
    }

    // populate
    const ppl_profile = ()=>{
        return <>
        <div className='pb-4'>
            <h1 className='text-xl tracking-wide font-semibold'>ACCOUNT INFORMATION</h1>
        </div>

        <div className='flex items-center gap-x-2'>
            <label className='tracking-wide'>Firstname:</label>
            {
                sp_profileEdit.Firstname ?
                <>
                    <input type="text" className='ml-2 bg-slate-100 text-indigo-900 focus:outline-0 border-2 border-indigo-300 p-2' value={sp_session.Data.Firstname} onInput={({target})=>{onEdit(target.value, 'Firstname')}} />
                    <div className='cursor-pointer' onClick={()=>{applyEdit('Firstname')}}>
                        <Icon name="check" size={1.5} tailwindClass="fill-indigo-600"/>
                    </div>
                    <div className='cursor-pointer' onClick={()=>{cancelEdit('Firstname')}}>
                        <Icon name="close" size={1.5} tailwindClass="fill-indigo-300"/>
                    </div>
                </> :
                <>
                    <p className='text-indigo-900'>{sp_session.Data.Firstname}</p>
                    <div className='cursor-pointer' onClick={()=>{openEdit('Firstname')}}>
                        <Icon name="edit" size={1.1} tailwindClass="fill-indigo-300"/>
                    </div>
                </>
            }
        </div>
        
        <div className='flex items-center gap-x-2'>
            <label className='tracking-wide'>Lastname:</label>
            {
                sp_profileEdit.Lastname ?
                <>
                    <input type="text" className='ml-2 bg-slate-100 text-indigo-900 focus:outline-0 border-2 border-indigo-300 p-2' value={sp_session.Data.Lastname} onInput={({target})=>{onEdit(target.value, 'Lastname')}} />
                    <div className='cursor-pointer' onClick={()=>{applyEdit('Lastname')}}>
                        <Icon name="check" size={1.5} tailwindClass="fill-indigo-600"/>
                    </div>
                    <div className='cursor-pointer' onClick={()=>{cancelEdit('Lastname')}}>
                        <Icon name="close" size={1.5} tailwindClass="fill-indigo-300"/>
                    </div>
                </> :
                <>
                    <p className='text-indigo-900'>{sp_session.Data.Lastname}</p>
                    <div className='cursor-pointer' onClick={()=>{openEdit('Lastname')}}>
                        <Icon name="edit" size={1.1} tailwindClass="fill-indigo-300"/>
                    </div>
                </>
            }
        </div>

        <div className='flex items-center gap-x-2'>
            <label className='tracking-wide'>Email:</label>
            <p className='text-indigo-900'>{sp_session.Data.Email}</p>
        </div>

        <div className='flex items-center gap-x-2'>
            <label className='tracking-wide'>Password:</label>
            {
                sp_profileEdit.Password ?
                <>
                    <input type="password" className='ml-2 bg-slate-100 text-indigo-900 focus:outline-0 border-2 border-indigo-300 p-2' value={sp_session.Data.Password} onInput={({target})=>{onEdit(target.value, 'Password')}} />
                    <div className='cursor-pointer' onClick={()=>{applyEdit('Password')}}>
                        <Icon name="check" size={1.5} tailwindClass="fill-indigo-600"/>
                    </div>
                    <div className='cursor-pointer' onClick={()=>{cancelEdit('Password')}}>
                        <Icon name="close" size={1.5} tailwindClass="fill-indigo-300"/>
                    </div>
                </> :
                <>
                    <p className='text-indigo-900'>{'*'.repeat( sp_session.Data.Password.length ) }</p>
                    <div className='cursor-pointer' onClick={()=>{openEdit('Password')}}>
                        <Icon name="edit" size={1.1} tailwindClass="fill-indigo-300"/>
                    </div>
                </>
            }
        </div>
        </>
        
    }
    const ppl_addressInformation = ()=>{
        return <>
        <div className='pt-4 mb-2'>
            <h1 className='text-xl tracking-wide font-semibold'>ADDRESS INFORMATION</h1>
        </div>

        <div className='flex items-center gap-x-2'>
            <label className='tracking-wide'><Icon name="location" size={1.3} tailwindClass={'fill-indigo-500'} /></label>
            {
                sp_profileEdit.Address ?
                <>
                    <input type="text" className='w-full ml-2 bg-slate-100 text-indigo-900 focus:outline-0 border-2 border-indigo-300 p-2' value={sp_session.Data.Address} onInput={({target})=>{onEdit(target.value, 'Address')}} />
                    <div className='cursor-pointer' onClick={()=>{applyEdit('Address')}}>
                        <Icon name="check" size={1.5} tailwindClass="fill-indigo-600"/>
                    </div>
                    <div className='cursor-pointer' onClick={()=>{cancelEdit('Address')}}>
                        <Icon name="close" size={1.5} tailwindClass="fill-indigo-300"/>
                    </div>
                </> :
                <>
                    <p className='text-indigo-900'>{sp_session.Data.Address}</p>
                    <div className='cursor-pointer' onClick={()=>{openEdit('Address')}}>
                        <Icon name="edit" size={1.1} tailwindClass="fill-indigo-300"/>
                    </div>
                </>
            }
        </div>
        
        </>
    }
    const ppl_delivery = ()=>{
        let deliveryList;
        if(sp_delivery.length > 0){
            deliveryList = sp_delivery.map(item=>{
                let itemList = item.Items.map(item2=>{
                    let itemDetails = sp_items.find(item3=>item3.ID == item2.ID);
                    return <>
                        <div className='bg-indigo-50 drop-shadow flex justify-between my-2'>
                            <div className=''>
                                <div className='h-16 aspect-[10/8]'>
                                    <img className="relative w-full h-full object-center object-contain" src={itemDetails.Image}/>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div>
                                    <h2 className="font-semibold tracking-tight text-zinc-900 text-xl">{itemDetails.Name}</h2>
                                </div>
                                <div className='flex items-center gap-x-1'>
                                    <label className='text-xs'>Color: </label>
                                    <div className={`w-3 h-3 rounded bg-${ColorTransform(item2.Color)}`}></div>
                                    <label className='pl-1 text-xs'>Size: </label>
                                    <div>{item2.Size}</div>
                                </div>
                                <div className='flex items-center gap-x-1'>
                                    <label className='text-xs'>QTY: </label>
                                    <div className='text-sm'>{item2.Quantity}</div>
                                </div>
                                <div className='flex items-center gap-x-1'>
                                    <label className='text-xs'>Price: </label>
                                    <div className='text-sm'>&#8369;{item2.Price}</div>
                                </div>
                            </div>
                        </div>
                    </>
                })
                return <>
                    <div className='w-full p-2 mb-2 rounded bg-indigo-50 drop-shadow'>
                        <div className='flex pb-2 items-end'>
                            <h2 className='tracking-wide text-xl pr-1'>Order</h2>
                            <small className=''>#{item.DeliveryID}</small>
                        </div>
                        <div className='flex items-end'>
                            <label className='text-sm pr-1'>Total Price: </label>
                            <small>&#8369; {item.TotalPrice}</small>
                        </div>
                        <div className='flex items-end'>
                            <label className='text-sm pr-1'>Ship to: </label>
                            <small>{item.Address}</small>
                        </div>
                        <div className='flex items-end'>
                            <label className='text-sm pr-1'>Payment: </label>
                            <small>{item.Payment}</small>
                        </div>
                        {itemList}
                    </div>
                </>
            })
        }else{
            deliveryList = <>
                <div className='text-slate-400'>
                    Perfectly clear. Either you haven't placed an order or you already have it.
                </div>
            </>
        }
        
        return <>
            <div className='pb-4'>
                <h1 className='text-xl tracking-wide font-semibold'>SHIPPING</h1>
            </div>
            <div className='w-full'>
                {deliveryList}
            </div>
        </>
    }

    return <>
    <Navbar />
    <main className={`bg-gradient-to-r from-sky-900 via-gray-900 to-indigo-900 w-full h-full flex justify-center py-10 px-2 flex-1`}>
        <main className={`w-[80rem] bg-slate-300 drop-shadow-xl rounded-sm tilt-in-top-1`}>
            {/*header*/}
            <header className='relative h-48 bg-gradient-to-r from-sky-700 to-indigo-700 flex flex-col justify-end p-10 box-border overflow-hidden'>
                <div className='absolute top-0 right-0 translate-x-[20%] translate-y-[-40%] opacity-[.10]'>
                    <div className="h-[34rem] aspect-square rounded-full overflow-hidden">
                        <img className="relative w-full h-full object-cover object-center" src={logo} />
                    </div>
                </div>
                <div>
                    <h2 className='text-5xl text-slate-50 tracking-wide font-light'>{`${sp_session.Data.Firstname} ${sp_session.Data.Lastname}`}</h2>
                </div>
                <div>
                    <small className='text-slate-400'>
                        EC Jersey member
                    </small>
                </div>
            </header>
            {/*Main Content*/}
            <main className='flex md:flex-nowrap flex-wrap p-4 justify-between gap-x-5'>
                {/*Controls*/}
                <aside className='md:block hidden w-96'>
                    <div className={`w-full p-2 mb-1 rounded-sm font-semibold tracking-wider text-indigo-800 cursor-pointer ${sp_option == 'profile' ? 'bg-slate-100':'hover:bg-slate-200'}`} onClick={()=>{sp_optionSet('profile')}}>
                        Profile
                    </div>
                    <div className={`w-full p-2 mb-1 rounded-sm font-semibold tracking-wider text-indigo-800 cursor-pointer ${sp_option == 'shipping' ? 'bg-slate-100':'hover:bg-slate-200'}`}onClick={()=>{sp_optionSet('shipping')}}>
                        Shipping
                    </div>
                    <div className={`w-full p-2 mb-1 rounded-sm font-semibold tracking-wider text-indigo-800 cursor-pointer ${sp_option == 'history' ? 'bg-slate-100':'hover:bg-slate-200'}`} onClick={()=>{sp_optionSet('history')}}>
                        History
                    </div>
                </aside>
                <aside className='md:hidden block w-full mb-2'>
                    <select className={`w-full bg-slate-100 p-2 text-center font-bold tracking-wide text-2xl text-indigo-800`} onChange={({target})=>{
                        sp_optionSet(target.value);
                    }} value={sp_option}>
                        <option value="profile">Profile</option>
                        <option value="shipping">Shipping</option>
                        <option value="history">History</option>
                    </select>
                </aside>
                {/*View*/}
                <main className='w-full'>
                    {
                        sp_option == 'profile' ?<>
                        <div className='w-full bg-slate-100 p-5'>
                            {ppl_profile()}
                            {ppl_addressInformation()}
                        </div>
                        </> : ''
                    }
                    {
                        sp_option == 'shipping' ?<>
                        <div className='w-full bg-slate-100 p-5'>
                            {ppl_delivery()}
                        </div>
                        </> : ''
                    }
                    {
                        sp_option == 'history' ?<>
                        <div className='w-full bg-slate-100 p-5'>
                            <div className='pb-4'>
                                <h1 className='text-xl tracking-wide font-semibold'>HISTORY</h1>
                            </div>
                            <div className='text-slate-400'>
                                You have no history, which is kinda sus. JK
                            </div>
                        </div>
                        </> : ''
                    }
                    
                </main>
            </main>
        </main>
    </main>
    <Footer />
    </>
}