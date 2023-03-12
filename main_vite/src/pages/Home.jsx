import { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
/// utilites
import Navbar from '../utilities/Navbar';
import Footer from "../utilities/Footer";
/// data
import { Gbl_currentPage } from "../data/CurrentPage";
import { Gbl_reminder } from "../data/Reminder";
import { runReminder } from "../utilities/ReminderRun";
/// page
import Catalog from './itemPage/ItemCatalog';


export default ()=>{

    // useContext
    const { sp_currentPage, sp_currentPageSet } = useContext(Gbl_currentPage);
    const { sp_reminder, sp_reminderSet } = useContext(Gbl_reminder);

    // useEffect
    useEffect(() => {
        runReminder(sp_reminder, sp_reminderSet);
    }, []);

    sp_currentPageSet('home');

    return <>
        <Navbar />
        <Catalog />
        <Footer />
    </>
} 