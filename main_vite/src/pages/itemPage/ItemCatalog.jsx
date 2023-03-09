import { useState, createContext, useContext } from "react"
/// pages
import Pg_itemControl from "./ItemControl";
import { Gbl_currentPage } from "../../data/CurrentPage";
import Pg_itemList from "./ItemList"

export const Gbl_itemControl = createContext({});
export const Gbl_openFilter = createContext(false);


export default ()=>{
    // useContext
    const { currentPage } = useContext(Gbl_currentPage);

    // useState
    const [ sp_itemControl, sp_itemControlSet ] = useState({});
    const [ sp_openFilter, sp_openFilterSet ] = useState(false);
    // get the details of what item description should be pass in itemControl i.e. All, Jersey Shoes, Bottoms, Accessories

    return <>
        <div className="flex flex-wrap h-full w-full">
            <Gbl_itemControl.Provider value={[sp_itemControl, sp_itemControlSet]}>
            <Gbl_openFilter.Provider value={[ sp_openFilter, sp_openFilterSet ]}>
                <Pg_itemControl />
                <Pg_itemList />
            </Gbl_openFilter.Provider> 
            </Gbl_itemControl.Provider>
            
        </div>
    
    </>
}