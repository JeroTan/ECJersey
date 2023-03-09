import { useContext, useState, useEffect } from "react";
///utilites
import Navbar from '../utilities/Navbar';
///data
import { Gbl_account } from '../data/Account.jsx';
import { Gbl_currentPage } from "../data/CurrentPage";
import { Gbl_reminder } from "../data/Reminder";
import { runReminder } from "../utilities/ReminderRun";


export default ()=>{
    // useContext
    const { sp_currentPage, sp_currentPageSet } = useContext(Gbl_currentPage);
    const { sp_reminder, sp_reminderSet } = useContext(Gbl_reminder);

    // useEffect
    useEffect(() => {
        runReminder(sp_reminder, sp_reminderSet);
    }, []);

    sp_currentPageSet('jersey')
    return <>
        <Navbar />
    </>
} 