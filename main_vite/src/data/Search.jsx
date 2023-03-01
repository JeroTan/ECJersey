import { createContext, useState } from "react"
import App from '../App.jsx';
import ItemList from "../pages/itemPage/ItemList.jsx";
import Navbar from "../utilities/Navbar.jsx";

export const Gbl_itemSearch = createContext([]);

export default ()=>{
    const [sp_search, sp_searchSet] = useState({});
    return <>
        <Gbl_itemSearch.Provider value={[sp_search, sp_searchSet]}>
            <ItemList />
            <Navbar />
            <App />
        </Gbl_itemSearch.Provider>
    </>
}
