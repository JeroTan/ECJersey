import { useContext, useState } from "react";
/// utilites
import Navbar from '../utilities/Navbar';
/// data
import { Gbl_account } from '../data/Account.jsx';
import { Gbl_currentPage } from "../data/CurrentPage";
/// page
import Catalog from './itemPage/ItemCatalog';


export default ()=>{
    const data_account = useContext(Gbl_account);
    const data_currentPage = useContext(Gbl_currentPage);
    data_currentPage.currentPage = 'home';

    return <>
        <Navbar />
        <Catalog />
    </>
} 