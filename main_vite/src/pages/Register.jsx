import { useState, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
/// pages
import { Gbl_account } from '../data/Account';
import { Gbl_session } from '../data/Session';
import { Gbl_reminder } from '../data/Reminder';
/// assets
import logo from '../assets/ec_jersey.jpg';
/// utlities
import Icon from "../utilities/Icon"
import { pop_info } from '../utilities/Sweetalert';

export default ()=>{

    // useState
    const [ sp_form, sp_formSet ] = useState({
        v_firstname:true,
        v_lastname:true,
        v_email:true,
        v_password:true,
        v_confirmpassword:true
    });
    const [sp_errorMessage, sp_errorMessageSet] = useState({
        v_firstname:'',
        v_lastname:'',
        v_email:'',
        v_password:'',
        v_confirmpassword:''
    })

    // useContext
    const { sp_account, sp_accountSet } = useContext(Gbl_account);
    const { sp_session, sp_sessionSet } = useContext(Gbl_session);
    const { sp_reminder, sp_reminderSet } = useContext(Gbl_reminder);

    // useRef
    const rf_form = {
        v_firstname:useRef(''),
        v_lastname:useRef(''),
        v_email:useRef(''),
        v_password:useRef(''),
        v_confirmpassword:useRef('')
    }

    // useNavigate
    const nagivation = useNavigate();

    //logic
    const sanitizer = (id)=>{
        if(rf_form[id].current.value != 0 && rf_form[id].current.value != '' && rf_form[id].current.value != undefined){
            sp_errorMessageSet(prev=>({...prev, [id]:''}));
            sp_formSet({...sp_form, [id]:true});
        }
        else{
            sp_errorMessageSet(prev=>({...prev, [id]:'Field is empty'}));
            sp_formSet({...sp_form, [id]:false});
        }
    }
    const sanitizeEmail = ()=>{
        if( sp_account.length < 1) return false;

        let emailExist = sp_account.findIndex(item=>item.Email == rf_form.v_email.current.toString().toLowerCase());
        if( emailExist > -1){
            sp_formSet({...sp_form, v_email:false});
            sp_errorMessageSet(prv=>({...prv, v_email:'Email is taken'}));
        }
    }
    const sanitizePassword = (id)=>{
        let passwordValid = true;
        sp_errorMessageSet({...sp_errorMessage, [id]:''});
        let regex = new RegExp('(?=.*[a-z])');
        if( !regex.exec( rf_form[id].current.value ) ){
            sp_errorMessageSet((prev)=>({...prev, [id]:prev[id]+'1 lowercase '}));
            passwordValid = false;
        }
        regex = new RegExp('(?=.*[A-Z])');
        if( !regex.exec( rf_form[id].current.value )){
            sp_errorMessageSet((prev)=>({...prev, [id]:prev[id]+'1 uppercase '}));
            passwordValid = false;
        }
        regex = new RegExp('(?=.*\\d)');
        if( !regex.exec( rf_form[id].current.value )){
            sp_errorMessageSet((prev)=>({...prev, [id]:prev[id]+'1 number '}));
            passwordValid = false;
        }
        regex = new RegExp('(?=.*[^A-Za-z\\d])');
        if( !regex.exec( rf_form[id].current.value )){
            sp_errorMessageSet((prev)=>({...prev, [id]:prev[id]+'1 Special Character '}));
            passwordValid = false;
        }
        regex = new RegExp('[\\s\\S]{8}');
        if( !regex.exec( rf_form[id].current.value )){
            sp_errorMessageSet((prev)=>({...prev, [id]:prev[id]+'8 pass length '}));
            passwordValid = false;
        }

        if(id =='v_confirmpassword' && rf_form.v_password.current.value != '' && rf_form.v_confirmpassword.current.value != ''){
            if(rf_form.v_password.current.value != rf_form.v_confirmpassword.current.value){
                sp_errorMessageSet((prev)=>({...prev, v_confirmpassword:'Password do not match'}));
                passwordValid = false;
            }
        }

        if(passwordValid)
            sp_formSet({...sp_form, [id]:true});
        else
            sp_formSet({...sp_form, [id]:false});
        
        if(rf_form[id].current.value == 0 || rf_form[id].current.value == '' || rf_form[id].current.value == undefined)
            sp_errorMessageSet(prev=>({...prev, [id]:'Field is Empty'}));

    }
    const hndl_register = ()=>{
        if( Object.keys(sp_form).every(key=>sp_form[key]== true) && Object.keys(rf_form).every(key=>rf_form[key].current.value != '' && rf_form[key].current.value != undefined) ){
            let data = {
                Login: true,
                Firstname: rf_form.v_firstname.current.value,
                Lastname: rf_form.v_lastname.current.value,
                Email: rf_form.v_email.current.value.toString().toLowerCase(),
                Password: rf_form.v_password.current.value,
                Profile: '',
                Address: '',
            }
            sp_accountSet(prev=>[
                ...prev,
                data
            ]
            )
            sp_sessionSet(prev=>({
                Login: true,
                Data:data,
            })
            );
            sp_reminderSet(prev=>[
                ...prev,
                {
                    Counter: 1,
                    Data: ()=>{pop_info('success', 'Successfully logged in')}
                }
            ]
            );
            nagivation('/home');
        }else{
            pop_info('warning', 'Please double check the information you have provided. Thank you');
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
                <h4 className="text-left text-3xl tracking-wide"><strong>Hello</strong>, fill up the form to register today</h4>
            </div>
            {/*Form*/}
            <section className="flex flex-wrap mt-10">
                <div className="w-6/12 pr-3">
                    <label htmlFor="v_firstname" className="tracking-widest text-xs text-slate-300 font-light">FIRSTNAME</label>
                    <input id="v_firstname" type="text" className="w-full pt-1 bg-transparent outline border-b border-slate-300 focus:border-indigo-400 outline-none" ref={rf_form.v_firstname} onInput={()=>{sanitizer("v_firstname")}}></input>
                    { sp_form.v_firstname == false ? <small className="text-red-700">{sp_errorMessage.v_firstname}</small> :'' }
                </div>
                <div className="w-6/12 pl-3">
                    <label htmlFor="v_lastname" className="tracking-widest text-xs text-slate-300 font-light">LASTNAME</label>
                    <input id="v_lastname" type="text" className="w-full pt-1 bg-transparent outline border-b border-slate-300 focus:border-indigo-400 outline-none" ref={rf_form.v_lastname} onInput={()=>{sanitizer("v_lastname")}}></input>
                    { sp_form.v_lastname == false ? <small className="text-red-700">{sp_errorMessage.v_lastname}</small> :'' }
                </div>
                <div className="w-full mt-10">
                    <label htmlFor="v_email" className="tracking-widest text-xs text-slate-300 font-light">EMAIL</label>
                    <input id="v_email" type="text" className="w-full pt-1 bg-transparent outline border-b border-slate-300 focus:border-indigo-400 outline-none" ref={rf_form.v_email}  onInput={()=>{sanitizer("v_email")}} onBlur={()=>{sanitizeEmail()}}></input>
                    { sp_form.v_email == false ? <small className="text-red-700">{sp_errorMessage.v_email}</small> :'' }

                </div>
                <div className="w-6/12 pr-3 mt-10">
                    <label htmlFor="v_password" className="tracking-widest text-xs text-slate-300 font-light">PASSWORD</label>
                    <input id="v_password" type="password" className="w-full pt-1 bg-transparent outline border-b border-slate-300 focus:border-indigo-400 outline-none" ref={rf_form.v_password} onInput={()=>{sanitizer("v_password"); sanitizePassword('v_password')}}></input>
                    { sp_form.v_password == false ? <small className="text-red-700">{sp_errorMessage.v_password}</small> :'' }
                </div>
                <div className="w-6/12 pl-3 mt-10">
                    <label htmlFor="v_confirmPassword" className="tracking-widest text-xs text-slate-300 font-light">CONFIRM PASSWORD</label>
                    <input id="v_confirmPassword" type="password" className="w-full pt-1 bg-transparent outline border-b border-slate-300 focus:border-indigo-400 outline-none" ref={rf_form.v_confirmpassword} onInput={()=>{sanitizer("v_confirmpassword"); sanitizePassword('v_confirmpassword')}}></input>
                    { sp_form.v_confirmpassword == false ? <small className="text-red-700">{sp_errorMessage.v_confirmpassword}</small> :'' }
                </div>
                {/*Button*/}
                <div className="w-full mt-16 flex justify-center">
                    <div className="w-72">
                        <button className="w-full h-12 rounded-full bg-indigo-700 box-border flex items-center justify-start hover:bg-gradient-to-r from-indigo-800 via-blue-700 to-sky-600 duration-500 ease-in" onClick={()=>hndl_register()}>
                            <div className='h-full p-2'>
                                <div className="relative h-full aspect-square overflow-hidden rounded-full brightness-150 contrast-50">
                                    <img className="relative w-full h-full object-cover object-center" src={logo} />
                                </div>
                            </div>
                            <label className="absolute translate-x-1/2 right-1/2 font-light text-lg tracking-wide cursor-pointer">Sign me up</label>
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