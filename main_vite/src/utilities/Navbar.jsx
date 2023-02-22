import { useState } from "react";
import { Link } from "react-router-dom";
/// utilities
import Icon from './Icon.jsx';
/// assets
import logo from '../assets/ec_jersey.jpg';

const vrt_pageHighlight = (page)=>{
    let vrt = {
        links:{
            home:'hover:underline underline-offset-4 decoration-2 decoration-sky-400',
            learn:'hover:underline underline-offset-4 decoration-2 decoration-sky-400',
            discover:'hover:underline underline-offset-4 decoration-2 decoration-sky-400',
            about:'hover:underline underline-offset-4 decoration-2 decoration-sky-400'
        }
    };
    switch(page){
        case 'home':
            vrt.links.home = 'underline underline-offset-4 decoration-2 decoration-teal-400';
        break;
        case 'learn':
            vrt.links.learn = 'underline underline-offset-4 decoration-2 decoration-teal-400';
        break;
        case 'discover':
            vrt.links.discover = 'underline underline-offset-4 decoration-2 decoration-teal-400';
        break;
        case 'about':
            vrt.links.about = 'underline underline-offset-4 decoration-2 decoration-teal-400';
        break;
    }

    return vrt;
}

export default ({currentPage})=>{
    //// Logic Ext ////
    //const {links} = vrt_pageHighlight(currentPage);
    console.log(currentPage);

    //// Contents ////
    let rendering = <>
    <header class="fixed w-full h-20 flex items-center justify-between bg-zinc-800 box-border drop-shadow-md z-40 text-slate-200">
        <div class="flex h-full">
            <div class="mx-5 flex items-center">
                <div class="h-14 aspect-square rounded-full overflow-hidden bg-zinc-900">
                    <img class="relative w-full h-full object-cover object-center" src={logo} />
                </div>
            </div>
            <div class="h-full flex">
                <div class="h-full flex items-center justify-center px-5 hover:bg-zinc-900 ease-out duration-100 cursor-pointer">
                    <Link to={"/home"}>Home</Link>
                </div>
                <div class="h-full flex items-center justify-center px-5 hover:bg-zinc-900 ease-out duration-100 cursor-pointer">
                    <a>Jersey</a>
                </div>
                <div class="h-full flex items-center justify-center px-5 hover:bg-zinc-900 ease-out duration-100 cursor-pointer">
                    <a>Shoes</a>
                </div>
                <div class="h-full flex items-center justify-center px-5 hover:bg-zinc-900 ease-out duration-100 cursor-pointer">
                    <a>Bottoms</a>
                </div>
                <div class="h-full flex items-center justify-center px-5 hover:bg-zinc-900 ease-out duration-100 cursor-pointer">
                    <a>Accessories</a>
                </div>
            </div>
            <div class="h-full flex items-center">
                <div class="flex">
                    <input type="text" class="h-8 w-96 focus:outline outline-2 text-zinc-800 px-2 outline-indigo-700" />
                </div>
                <div class="flex">
                    <button class="h-8 w-12 bg-indigo-700 flex justify-center items-center">
                        <Icon name="search" size="1.4" tailwindClass="fill-slate-200"/>
                    </button>
                </div>
                
            </div>
        </div>
        <div class="flex h-full justify-end">
            <div class="h-full flex">
                <div class="h-full flex items-center justify-center px-3 cursor-pointer">
                    <a>Login</a>
                </div>
                <div class="h-full flex items-center justify-center px-3 cursor-pointer">
                    <a>Register</a>
                </div>
            </div>
            <div class="h-full flex items-center mx-4">
                <div class="h-12 aspect-square rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center box-border border-solid border-2 border-slate-300">
                    <Icon name="person" size="1.4" tailwindClass="fill-slate-200"/>
                </div>
            </div>
        </div>
    </header>
    
    <div class="block w-full bg-gray-200 h-20"></div>
    </>
    //// Contents ////
    return rendering;
}