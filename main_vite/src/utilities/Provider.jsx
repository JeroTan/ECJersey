import { createContext, useState } from "react";

/// pages
import { Gbl_itemSearch } from "../data/Search";
import { Gbl_items, dt_items } from "../data/Item";
import { Gbl_account, dt_account } from "../data/Account";
import { Gbl_session, dt_session } from "../data/Session";
import { Gbl_reminder, dt_reminder } from "../data/Reminder";
import { Gbl_cart, dt_cart } from "../data/Cart";
import { Gbl_currentPage } from "../data/CurrentPage";


export default (ElementTunnel)=>{
    const [ sp_search, sp_searchSet ] = useState('');
    const [ sp_items, sp_itemsSet ] = useState(dt_items());
    const [ sp_account, sp_accountSet ] = useState(dt_account());
    const [ sp_session, sp_sessionSet ] = useState(dt_session());
    const [ sp_reminder, sp_reminderSet] = useState(dt_reminder());
    const [ sp_cart, sp_cartSet ] = useState(dt_cart());
    const [ sp_currentPage, sp_currentPageSet ] = useState('home');

    return <>
        <Gbl_currentPage.Provider value={{sp_currentPage, sp_currentPageSet}}>
        <Gbl_items.Provider value={{sp_items, sp_itemsSet}}>
        <Gbl_itemSearch.Provider value={{sp_search, sp_searchSet}}>
        <Gbl_account.Provider value={{sp_account, sp_accountSet}}>
        <Gbl_session.Provider value={{sp_session, sp_sessionSet}}>
        <Gbl_reminder.Provider value={{sp_reminder, sp_reminderSet}}>
        <Gbl_cart.Provider value={{sp_cart, sp_cartSet}}>
        
        {ElementTunnel.children}
        
        </Gbl_cart.Provider>
        </Gbl_reminder.Provider>
        </Gbl_session.Provider>
        </Gbl_account.Provider>
        </Gbl_itemSearch.Provider>
        </Gbl_items.Provider>
        </Gbl_currentPage.Provider>
        
    </>
}