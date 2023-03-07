import { createContext, useState } from "react";

/// pages
import { Gbl_itemSearch } from "../data/Search";
import { Gbl_items } from "../data/Item";
import { dt_account, Gbl_account } from "../data/Account";
import { dt_items } from "../data/Item";


export default (ElementTunnel)=>{
    const [ sp_search, sp_searchSet ] = useState('');
    const [ sp_items, sp_itemsSet ] = useState(dt_items());
    const [ sp_account, sp_accountSet ] = useState(dt_account());

    return <>
        <Gbl_items.Provider value={{sp_items, sp_itemsSet}}>
        <Gbl_itemSearch.Provider value={{sp_search, sp_searchSet}}>
        <Gbl_account.Provider value={{sp_account, sp_accountSet}}>
            {ElementTunnel.children}
        </Gbl_account.Provider>
        </Gbl_itemSearch.Provider>
        </Gbl_items.Provider>
        
    </>
}