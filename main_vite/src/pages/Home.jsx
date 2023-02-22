import { useContext, useState } from "react";
///utilites
import Navbar from '../utilities/Navbar';
///data
import { Gbl_account } from '../data/Account.jsx';


export default ()=>{
    const data_account = useContext(Gbl_account);
    console.log(data_account.firstname);
    data_account.firstname = 'sdfsdf';
    console.log(data_account.firstname);
    return <>
        <Navbar currentPage="Home" />
    </>
} 