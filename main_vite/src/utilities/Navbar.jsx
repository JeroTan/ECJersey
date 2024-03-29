import { useContext, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
/// utilities
import Icon from './Icon.jsx';
/// data
import { Gbl_itemSearch } from "../data/Search.jsx";
import { Gbl_currentPage } from "../data/CurrentPage.jsx";
import { Gbl_session } from "../data/Session.jsx";
import { Gbl_cart } from "../data/Cart.jsx";

/// assets
import logo from '../assets/ec_jersey.jpg';
import './Navbar.css'
import { pop_info } from "./Sweetalert.jsx";

// Logic to check what page is currently the user is
const vrt_css = (page)=>{
    let vrt = {
        links:{
            home:'myUnderline-hover',
            jersey:'myUnderline-hover',
            shoes:'myUnderline-hover',
            bottoms:'myUnderline-hover',
            accessories:'myUnderline-hover',
            none:''
        },
        bgs:{
            home:'hover:bg-zinc-700',
            jersey:'hover:bg-zinc-700',
            shoes:'hover:bg-zinc-700',
            bottoms:'hover:bg-zinc-700',
            accessories:'hover:bg-zinc-700',
            none:''
        }
    };
    vrt.links[page] = 'myUnderline';
    vrt.bgs[page] = 'bg-zinc-900';
    
    return vrt;
}

export default ()=>{
    // useState
    const [sp_dropDown, sp_dropDownSet] = useState(false);
    const [sp_openBurger, sp_openBurgerSet] = useState(false);
    const [sp_openAccountOption, sp_openAccountOptionSet] = useState(false);
    const [sp_cartTotal, sp_cartTotalSet] = useState(0);
    const [ cartAnimation, cartAnimationSet ] = useState(false);
    const [ lastCartTotal, lastCartTotalSet ] = useState(0);

    // useContext
    let { sp_search, sp_searchSet }  = useContext(Gbl_itemSearch);
    const {sp_session, sp_sessionSet} = useContext(Gbl_session);
    const { sp_currentPage, sp_currentPageSet } = useContext(Gbl_currentPage);
    const { sp_cart, sp_cartSet } = useContext(Gbl_cart);


    useEffect(()=>{
        if(lastCartTotal > 0){
            cartAnimationSet(true);
        }
        lastCartTotalSet(prev=>prev+1);
        let timer;
        if(cartAnimation){
            timer = setInterval(()=>{
                cartAnimationSet(false);
                clearInterval(timer);
            }, 500);
        }
        return ()=>clearInterval(timer);
    }, [sp_cart.length])

    // useNavigate
    const navigation = useNavigate();

    // useRef
    const rf_searchButton = useRef('');

    // Logic Ext
    const {links, bgs} = vrt_css(sp_currentPage);

    const ProfilePic = ({size=1.4, height=12, bg="bg-zinc-900"})=>{
        return <>
            <div className={`h-${height} aspect-square rounded-full overflow-hidden ${bg} flex items-center justify-center box-border border-solid border-[1px] border-slate-300`}>
                <Icon name="person" size={size} tailwindClass="fill-slate-200"/>
            </div>
        </>
    }

    const Link_navOne = ({name="Home", link="/home", effect=""})=>{
        return <>
            <div className={`relative h-full flex items-center px-5 ease-out duration-100 cursor-pointer ${effect}`} onClick={()=>hndl_navigateResetSearch(link)}>
                <Link className={`relative myUnderline-child`}>{name}</Link>
            </div>
        </>
    }

    const Link_navTwo = ({name="Home", link="/home", effect=""})=>{
        return <>
            <div className={`relative px-2 mx-2 my-1 cursor-pointer ${effect}`} onClick={()=>hndl_navigateResetSearch(link)}>
                <Link className={`relative myUnderline-child`}>{name}</Link>
            </div>
        </>
    }

    const Link_navThree = ({name="Home", link="/home", effect=""})=>{
        return <>
            <div className={`relative px-2 mx-2 my-2 cursor-pointer text-2xl ${effect}`} onClick={()=>hndl_navigateResetSearch(link)}>
                <Link className={`relative myUnderline-child`}>{name}</Link>
            </div>
        </>
    }

    // handler
    const hndl_searchButton = ()=>{
        sp_searchSet(rf_searchButton.current.value);
    }
    const hndl_navigateResetSearch = (link)=>{
        sp_searchSet('');
        navigation(link);
    }
    const hndl_logout = ()=>{
        if(sp_session.Login != false){
            sp_sessionSet({
                Login: false,
                Data:{}
            })
            sp_openAccountOptionSet(false);
            navigation('/home');
            pop_info('success', 'Account has been logged out');
        }
    }
    const hndl_openAccountOption = ()=>{
        
        if(sp_session.Login == true)
            sp_openAccountOptionSet(prev=>!prev);
    }

    //// Contents ////
    let rendering = <>
    <header className="fixed w-full h-20 flex items-center justify-between bg-zinc-800 box-border drop-shadow-md z-40 text-slate-200">
        {/* Left Side */}
        <div className="flex h-full">
            <div className="sm:mx-5 mx-3 flex items-center">
                <div className="sm:h-14 h-12 aspect-square rounded-full overflow-hidden bg-zinc-900 cursor-pointer" onClick={()=>navigation('/home')}>
                    <img className="relative w-full h-full object-cover object-center" src={logo} />
                </div>
            </div>
            <div className="xl:flex hidden h-full">
                <Link_navOne name="Home" link="/home" effect={`${links.home} ${bgs.home}`} />
                <Link_navOne name="Jersey" link="/jersey" effect={`${links.jersey} ${bgs.jersey}`} />
                <Link_navOne name="Shoes" link="/shoes" effect={`${links.shoes} ${bgs.shoes}`} />
                <Link_navOne name="Bottoms" link="/bottoms" effect={`${links.bottoms} ${bgs.bottoms}`} />
                <Link_navOne name="Accessories" link="/accessories" effect={`${links.accessories} ${bgs.accessories}`} />
            </div>
            <div className="xl:hidden md:flex hidden h-full relative">
                <div className="h-full flex items-center justify-center cursor-pointer px-5 hover:bg-zinc-900 ease-out duration-100" onClick={()=> sp_dropDownSet(!sp_dropDown)}>
                    <div>{sp_currentPage.charAt(0).toUpperCase() + sp_currentPage.slice(1)}</div>
                    <div><Icon name={sp_dropDown?'up':'down'} size="2" tailwindClass="fill-slate-200"/></div>
                </div>
                {sp_dropDown ? (
                    <div className="flex absolute bg-zinc-900 bottom-0 translate-y-full flex-col items-center py-2">
                        <Link_navTwo name="Home" link="/home" effect={`${links.home}`} />
                        <Link_navTwo name="Jersey" link="/jersey" effect={`${links.jersey}`} />
                        <Link_navTwo name="Shoes" link="/shoes" effect={`${links.shoes}`} />
                        <Link_navTwo name="Bottoms" link="/bottoms" effect={`${links.bottoms}`} />
                        <Link_navTwo name="Accessories" link="/accessories" effect={`${links.accessories}`} />
                    </div>
                    ):''
                }
                
            </div>
            <div className="h-full flex items-center sm:mx-3 mx-0">
                <div className="flex">
                    <input type="text" className="h-8 lg:w-96 md:w-64 sm:w-96 bg-zinc-900 focus:outline outline-2 text-slate-100 px-2 outline-indigo-700" ref={rf_searchButton} onKeyDown={(event)=>{event.key=='Enter' ? hndl_searchButton() : '' }}/>
                </div>
                <div className="flex">
                    <button className="h-8 w-12 bg-indigo-700 flex justify-center items-center" onClick={hndl_searchButton}>
                        <Icon name="search" size="1.4" tailwindClass="fill-slate-200"/>
                    </button>
                </div>
            </div>
        </div>
        {/* Right Side */}
        <div className="flex h-full justify-end">
            <div className="md:flex hidden h-full justify-end">
                <div className="h-full flex">
                    {sp_session.Login == true ?<>
                        <div className="h-full flex items-center justify-center px-1">
                            <label className="px-3">{`${sp_session.Data.Lastname}, ${sp_session.Data.Firstname}`}</label>
                        </div>
                        <div className="h-full flex items-center justify-center px-1 cursor-pointer" onClick={()=>{}}>
                            <div className={`relative after:absolute after:rounded-full after:w-4 after:h-4 after:content-[attr(cartvalue)] after:top-0 after:right-0 after:bg-indigo-700 after:text-xs after:text-center after:translate-y-[-25%] after:translate-x-[25%] ${cartAnimation ? 'jello-horizontal':'' }`} cartvalue={sp_cart.length} onClick={()=>{navigation('/cart')}}>
                                <Icon name="cart" size="2" tailwindClass="fill-slate-200"/>
                            </div>
                        </div>
                    </> : <>
                        <div className="h-full flex items-center justify-center px-3 cursor-pointer">
                            <Link to="/login">Login</Link>
                        </div>
                        <div className="h-full flex items-center justify-center px-3 cursor-pointer">
                            <Link to="/register">Register</Link>
                        </div>
                    
                    </>}
                </div>
                <div className={`h-full flex items-center mx-4 ${sp_session.Login == true ? 'cursor-pointer':''}`} onClick={()=>{hndl_openAccountOption()}}>
                    <ProfilePic />
                </div>
            </div>
            <div className="md:hidden flex items-center relative">
                <div className="p-2 mr-2 cursor-pointer" onClick={()=>{sp_openBurgerSet(true)}}>
                    <Icon name="bars" size="2" tailwindClass="fill-slate-200"/>
                </div>
            </div>
            {
                sp_openAccountOption == true ? <>
                <section className="md:block hidden absolute bottom-0 translate-y-full bg-zinc-900 p-5">
                    <div className="cursor-pointer hover:text-indigo-500 mb-2" onClick={()=>{ navigation('/profile') }}>
                        Profile
                    </div>
                    <div className="cursor-pointer hover:text-indigo-500" onClick={()=>{ hndl_logout() }}>
                        Logout
                    </div>
                </section>
                </> :
                ''
            }
        </div>
    </header>

    {/*Second Header When User clicks the button on small screen*/}
    {sp_openBurger ? (
        <header className={"md:hidden block fixed w-screen h-screen text-slate-200 z-50 tilt-in-right-2"}>
            <div className="w-screen h-screen bg-zinc-900 p-2">
                <div className="flex justify-end">
                    <div className="p-2 cursor-pointer" onClick={()=>{sp_openBurgerSet(false)}}>
                        <Icon name="close" size="3" tailwindClass="fill-slate-200"/>
                    </div>
                </div>
                <div className="h-20 flex justify-end items-center">
                    <div className="h-full flex text-lg mr-2">
                        { sp_session.Login == true ? <>
                        <div className="h-full flex items-center justify-center px-3">
                            <label>{`${sp_session.Data.Lastname}, ${sp_session.Data.Firstname}`}</label>
                        </div>
                        <div className="h-full flex items-center justify-center px-1 cursor-pointer" onClick={()=>{}}>
                            <div className="relative after:absolute after:rounded-full after:w-4 after:h-4 after:content-[attr(cartvalue)] after:top-0 after:right-0 after:bg-indigo-700 after:text-xs after:text-center after:translate-y-[-25%] after:translate-x-[25%]" cartvalue={sp_cart.length} onClick={()=>{navigation('/cart')}}>
                                <Icon name="cart" size="1.8" tailwindClass="fill-slate-200"/>
                            </div>
                        </div>
                        </>
                        : <>
                        <div className="h-full flex items-center justify-center px-3 cursor-pointer">
                            <Link to="/login">Login</Link>
                        </div>
                        <div className="h-full flex items-center justify-center px-3 cursor-pointer">
                            <Link to="/register">Register</Link>
                        </div>
                        </>
                        }
                    </div>
                    <ProfilePic size="1.8" height="16" bg="bg-zinc-900"/>
                </div>
                {
                    sp_session.Login == true ? <>
                    <section className="flex justify-end mb-3 gap-5">
                        <div className="cursor-pointer hover:text-indigo-500 tracking-wider text-slate-300" onClick={()=>{ navigation('/profile') }}>
                            PROFILE
                        </div>
                        <div className="cursor-pointer hover:text-indigo-500 tracking-wider text-slate-300" onClick={()=>{ hndl_logout() }}>
                            LOGOUT
                        </div>
                    </section>
                    </> :
                    ''
                }
                <div className="p-1 w-full box-border">
                    <div className="w-full bg-zinc-800 rounded-lg flex flex-col items-center py-5">
                        <Link_navThree name="Home" link="/home" effect={`${links.home}`} />
                        <Link_navThree name="Jersey" link="/jersey" effect={`${links.jersey}`} />
                        <Link_navThree name="Shoes" link="/shoes" effect={`${links.shoes}`} />
                        <Link_navThree name="Bottoms" link="/bottoms" effect={`${links.bottoms}`} />
                        <Link_navThree name="Accessories" link="/accessories" effect={`${links.accessories}`} />
                    </div>
                </div>
            </div>
        </header>
        ) : ''
    }
    
    <div className="block w-full bg-gray-200 h-20"></div>
    </>
    //// Contents ////
    return rendering;
}



/*
GAMIT kang useState sa hamburger kase need nya i-call yung 2nd header and dapat sa second header ay may close button na gagamit din ng useState

PERO PERO dapat may locking system, mag nag click yung hamburger gamit kang lock mechanism para di sya maulit in case mag double click
*/