import { useState, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
/// pages
import { Gbl_account } from '../data/Account';
import { Gbl_reminder } from '../data/Reminder';
import { Gbl_session } from '../data/Session';
/// assets
import logo from '../assets/ec_jersey.jpg';
/// utlities
import Icon from "../utilities/Icon"
import { pop_info } from '../utilities/Sweetalert';


export default ()=>{
    // useState
    const [ sp_form, sp_formSet ] = useState({
        v_email:true,
        v_password:true,
    });
    const [sp_errorMessage, sp_errorMessageSet] = useState({
        v_email:'',
        v_password:'',
    })

    // useContext
    const { sp_account, sp_accountSet } = useContext(Gbl_account);
    const { sp_session, sp_sessionSet } = useContext(Gbl_session)
    const { sp_reminder, sp_reminderSet } = useContext(Gbl_reminder);

    // useRef
    const rf_form = {
        v_email:useRef(''),
        v_password:useRef(''),
    }

    // useNavigate
    const navigation = useNavigate();

    // handler/logic
    const sanitizer = (id) =>{
        if(rf_form[id].current.value != 0 && rf_form[id].current.value != '' && rf_form[id].current.value != undefined){
            sp_errorMessageSet(prev=>({...prev, [id]:''}));
            sp_formSet({...sp_form, [id]:true});
        }
        else{
            sp_errorMessageSet(prev=>({...prev, [id]:'Field is empty'}));
            sp_formSet({...sp_form, [id]:false});
        }
    }
    const hndl_login = ()=>{
        if( Object.keys(sp_form).every(key=>sp_form[key] == true) && Object.keys(sp_form).every(key=>rf_form[key].current.value != '' && rf_form[key].current.value != undefined) ){
            if( sp_account.length < 1){
                pop_info('error', 'Login credentials do not match');
                return false;
            } 

            let accountMatch = sp_account.findIndex(item=>item.Email == rf_form.v_email.current.value && item.Password == rf_form.v_password.current.value);
            if(accountMatch > -1){
                sp_reminderSet(prev=>[
                    ...prev,
                    {   Counter: 1, Data: ()=>{pop_info('success', 'Successfully logged in')} }
                ]);
                sp_sessionSet({
                    Login: true,
                    Data:{...sp_account[accountMatch]}
                })
                navigation('/home');
            }else
                pop_info('error', 'Login credentials do not match');
            
        }else{
            pop_info('warning', 'Login information is invalid. Please double check your inputs. Thank you');
        }
    }

    return <>
    <main className={"bg-gradient-to-r from-sky-200 via-gray-300 to-indigo-200 w-screen h-screen flex items-center justify-center"}>
        <main className={"w-[30em] bg-zinc-800 drop-shadow-xl rounded-md text-slate-100 p-10"}>
            <div className='w-full'>
                <Link to="/home" className="flex items-end text-xs font-light fill-slate-300 hover:fill-indigo-300 hover:text-indigo-300">
                    <Icon name="home" size={"1.4"} tailwindClass={" "}/>HOME
                </Link>
            </div>
            {/*Register Title */}
            <div className="mt-5 box-border">
                <h4 className="text-left text-3xl tracking-wide"><strong>Welcome</strong>, login with your credentials.</h4>
            </div>
            {/*Form*/}
            <section className="flex flex-wrap">

                <div className="w-full mt-10">
                    <label htmlFor="v_email" className="tracking-widest text-xs text-slate-300 font-light">EMAIL</label>
                    <input id="v_email" type="text" className="w-full pt-1 bg-transparent outline border-b border-slate-300 focus:border-indigo-400 outline-none" ref={rf_form.v_email}  onInput={()=>{sanitizer("v_email")}}></input>
                    { sp_form.v_email == false ? <small className="text-red-700">{sp_errorMessage.v_email}</small> :'' }
                </div>
                <div className="w-full mt-10">
                    <label htmlFor="v_password" className="tracking-widest text-xs text-slate-300 font-light">PASSWORD</label>
                    <input id="v_password" type="password" className="w-full pt-1 bg-transparent outline border-b border-slate-300 focus:border-indigo-400 outline-none" ref={rf_form.v_password}  onInput={()=>{sanitizer("v_password")}}></input>
                    { sp_form.v_password == false ? <small className="text-red-700">{sp_errorMessage.v_password}</small> :'' }
                </div>

                {/*Button*/}
                <div className="w-full mt-16 flex justify-center">
                    <div className="w-72">
                        <button className="w-full h-12 rounded-full bg-indigo-700 box-border flex items-center justify-start hover:bg-gradient-to-r from-indigo-800 via-blue-700 to-sky-600 duration-500 ease-in" onClick={()=>hndl_login()}>
                            <div className='h-full p-2'>
                                <div className="relative h-full aspect-square overflow-hidden rounded-full brightness-150 contrast-50">
                                    <img className="relative w-full h-full object-cover object-center" src={logo} />
                                </div>
                            </div>
                            <label className="absolute translate-x-1/2 right-1/2 font-light text-lg tracking-wide cursor-pointer">Log in</label>
                        </button>
                    </div>
                </div>

                {/*Quote*/}
                <div className='w-full mt-2'>
                    <small className='block text-center italic text-slate-500 font-serif'>"Beyond the boundary"</small>
                </div>

            </section>
        </main>
    </main>
    </>
}