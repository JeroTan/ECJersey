import { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
/// utilites
import Navbar from '../utilities/Navbar';
import Foorter from "../utilities/Foorter";
/// data
import { Gbl_account } from '../data/Account.jsx';
import { Gbl_currentPage } from "../data/CurrentPage";
import { Gbl_reminder } from "../data/Reminder";
import { runReminder } from "../utilities/ReminderRun";
/// page
import Catalog from './itemPage/ItemCatalog';


export default ()=>{

    // useContext
    const data_account = useContext(Gbl_account);
    const data_currentPage = useContext(Gbl_currentPage);
    const { sp_reminder, sp_reminderSet } = useContext(Gbl_reminder);

    // useEffect
    useEffect(() => {
        runReminder(sp_reminder, sp_reminderSet);
    }, []);

    data_currentPage.currentPage = 'home';

    return <>
        <Navbar />
        <Catalog />
        <Foorter />
    </>
} 