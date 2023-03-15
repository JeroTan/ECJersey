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
        <main className={`bg-gradient-to-r from-sky-900 via-gray-900 to-indigo-900 w-full h-full flex justify-center py-10 px-2 flex-1`}>
            <main className={`w-[80rem] bg-slate-300 drop-shadow-xl rounded-sm md:p-10 sm:p-8 p-5 tilt-in-top-1`}>
                <h1 className="tracking-tight font-bold text-3xl text-indigo-900 pb-5">Privacy and Policy Statement</h1>
                <p className="pb-5">
                At our website, we are committed to protecting your privacy and security. We collect personal information such as your name, address, and payment details only to fulfill your order and provide you with the best possible service. We will never share your personal information with third parties unless required by law.
                </p>
                <p className="pb-5">
                We use cookies to improve your browsing experience and personalize content and advertising. By using our website, you consent to our use of cookies. You can adjust your cookie settings at any time in your browser settings.
                </p>
                <p className="pb-5">
                We take your privacy seriously and want you to feel safe and secure while shopping with us. Here at Jersey Heaven, we are committed to protecting your personal information and ensuring that your online experience is enjoyable and hassle-free.
                </p>
                <p className="pb-5">
                We promise to never give you up, never let you down, never run around and desert you. We will never make you cry, never say goodbye, never tell a lie, and hurt you.
                </p>
                <p className="pb-5">
                We never gonna give them your data, never gonna let them know, Never gonna wait around and tell them we don't want to, Never gonna make you worry, Never gonna sell them back, Never gonna tell a scam and deceive you.
                </p>
                <p className="pb-5">
                Thank you for choosing Jersey Heaven as your go-to source for all your jersey needs. We appreciate your business and look forward to serving you again in the future.
                </p>
            </main>
        </main>
        <Footer />
    </>
} 