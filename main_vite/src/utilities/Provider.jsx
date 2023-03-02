import { createContext, useState } from "react";

/// pages
import { Gbl_itemSearch } from "../data/Search";
import { Gbl_items } from "../data/Item";
import { dt_items } from "../data/Item";


export default (ElementTunnel)=>{
    const [ sp_search, sp_searchSet ] = useState('');
    const [ sp_items, sp_itemsSet ] = useState(dt_items);

    return <>
        <Gbl_items.Provider value={{sp_items, sp_itemsSet}}>
        <Gbl_itemSearch.Provider value={{sp_search, sp_searchSet}}>
            {ElementTunnel.children}
        </Gbl_itemSearch.Provider>
        </Gbl_items.Provider>
        
    </>
}