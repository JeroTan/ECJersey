import { useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
/// pages
import { Gbl_account } from '../data/Account';
/// assets
import logo from '../assets/ec_jersey.jpg';
/// utlities
import Icon from "../utilities/Icon"

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

    // useRef
    const rf_form = {
        v_firstname:useRef(''),
        v_lastname:useRef(''),
        v_email:useRef(''),
        v_password:useRef(''),
        v_confirmpassword:useRef('')
    }

    //logic
    const inputer = (id)=>{
        if(rf_form[id].current.value != 0 && rf_form[id].current.value != '' && rf_form[id].current.value != undefined){
            sp_errorMessageSet({...sp_account, [id]:''});
            sp_formSet({...sp_form, [id]:true});
        }
        else{
            sp_errorMessageSet({...sp_account, [id]:'Field is empty'});
            sp_formSet({...sp_form, [id]:false});
        }
    }
    const sanitizeEmail = ()=>{
        if( sp_account.length < 1) return false;

        let emailExist = sp_account.findIndex(item=>item.Email == rf_form.v_email.current.toString().toLowerCase());
        if( emailExist < 0){
            sp_formSet({...sp_form, v_email:false});
            sp_errorMessageSet({...sp_account, v_email:'Email is taken'});
        }
    }
    const sanitizePassword = (id)=>{
        let passwordValid = true;
        sp_errorMessageSet({...sp_account, [id]:''});
        let regex = new RegExp('(?=.*[a-z])');
        if( !regex.exec( rf_form[id].current.value ) ){
            sp_errorMessageSet((prev)=>({...sp_account, [id]:prev[id]+'1 lowercase '}));
            passwordValid = false;
        }
        regex = new RegExp('(?=.*[A-Z])');
        if( !regex.exec( rf_form[id].current.value )){
            sp_errorMessageSet((prev)=>({...sp_account, [id]:prev[id]+'1 uppercase '}));
            passwordValid = false;
        }
        regex = new RegExp('(?=.*\\d)');
        if( !regex.exec( rf_form[id].current.value )){
            sp_errorMessageSet((prev)=>({...sp_account, [id]:prev[id]+'1 number '}));
            passwordValid = false;
        }
        regex = new RegExp('(?=.*[^A-Za-z\\d])');
        if( !regex.exec( rf_form[id].current.value )){
            sp_errorMessageSet((prev)=>({...sp_account, [id]:prev[id]+'1 Special Character '}));
            passwordValid = false;
        }
        regex = new RegExp('[\\s\\S]{8}');
        if( !regex.exec( rf_form[id].current.value )){
            sp_errorMessageSet((prev)=>({...sp_account, [id]:prev[id]+'8 pass length '}));
            passwordValid = false;
        }
        if(id=='v_confirmpassword' && rf_form.v_password.current.value != '' && rf_form.v_confirmpassword.current.value != ''){
            if(rf_form.v_password.current.value == rf_form.v_confirmpassword.current.value){
                sp_errorMessageSet((prev)=>({...sp_account, v_confirmpassword:prev.v_confirmpassword+'Password do not match'}));
                passwordValid = false;
            }
        }

        if(passwordValid){
            sp_formSet({...sp_form, [id]:true});
        }
        else{
            console.log(sp_errorMessage.v_password);
            sp_formSet({...sp_form, [id]:false});
        }

    }

    return <>
    <main className={"bg-gradient-to-r from-indigo-200 via-gray-300 to-pink-200 w-screen h-screen flex items-center justify-center"}>
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
                    <input id="v_firstname" type="text" className="w-full pt-1 bg-transparent outline border-b border-slate-300 focus:border-indigo-400 outline-none" ref={rf_form.v_firstname} onInput={()=>{inputer("v_firstname")}}></input>
                    { sp_form.v_firstname == false ? <small className="text-red-700">{sp_errorMessage.v_firstname}</small> :'' }
                </div>
                <div className="w-6/12 pl-3">
                    <label htmlFor="v_lastname" className="tracking-widest text-xs text-slate-300 font-light">LASTNAME</label>
                    <input id="v_lastname" type="text" className="w-full pt-1 bg-transparent outline border-b border-slate-300 focus:border-indigo-400 outline-none" ref={rf_form.v_lastname} onInput={()=>{inputer("v_lastname")}}></input>
                    { sp_form.v_lastname == false ? <small className="text-red-700">{sp_errorMessage.v_lastname}</small> :'' }
                </div>
                <div className="w-full mt-10">
                    <label htmlFor="v_email" className="tracking-widest text-xs text-slate-300 font-light">EMAIL</label>
                    <input id="v_email" type="text" className="w-full pt-1 bg-transparent outline border-b border-slate-300 focus:border-indigo-400 outline-none" ref={rf_form.v_email}  onInput={()=>{inputer("v_email")}} onBlur={()=>{sanitizeEmail()}}></input>
                    { sp_form.v_email == false ? <small className="text-red-700">{sp_errorMessage.v_email}</small> :'' }

                </div>
                <div className="w-6/12 pr-3 mt-10">
                    <label htmlFor="v_password" className="tracking-widest text-xs text-slate-300 font-light">PASSWORD</label>
                    <input id="v_password" type="password" className="w-full pt-1 bg-transparent outline border-b border-slate-300 focus:border-indigo-400 outline-none" ref={rf_form.v_password} onInput={()=>{inputer("v_password"); sanitizePassword('v_password')}}></input>
                    { sp_form.v_password == false ? <small className="text-red-700">{sp_errorMessage.v_password}</small> :'' }
                </div>
                <div className="w-6/12 pl-3 mt-10">
                    <label htmlFor="v_confirmPassword" className="tracking-widest text-xs text-slate-300 font-light">CONFIRM PASSWORD</label>
                    <input id="v_confirmPassword" type="password" className="w-full pt-1 bg-transparent outline border-b border-slate-300 focus:border-indigo-400 outline-none" ref={rf_form.v_confirmpassword} onInput={()=>{inputer("v_confirmpassword"); sanitizePassword('v_confirmpassword')}}></input>
                    { sp_form.v_confirmpassword == false ? <small className="text-red-700">{sp_errorMessage.v_confirmpassword}</small> :'' }
                </div>
                {/*Button*/}
                <div className="w-full mt-16 flex justify-center">
                    <div className="w-72">
                        <button className="w-full h-12 rounded-full bg-indigo-700 box-border flex items-center justify-start hover:bg-gradient-to-r from-indigo-800 via-blue-700 to-sky-600 duration-500 ease-in">
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