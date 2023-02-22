import { useContext, useState } from "react";
///utilites
import Navbar from '../utilities/Navbar';
///data
import { Gbl_account } from '../data/Account.jsx';


export default ()=>{
    const data_account = useContext(Gbl_account);

    return <>
        <Navbar currentPage="Jersey" />
    </>
} 