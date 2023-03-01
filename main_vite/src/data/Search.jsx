import { createContext } from "react"
import App from '../App.jsx';

export const Gbl_itemSearch = createContext({gbl_search:''});

export default ()=><>
    <Gbl_itemSearch .Provider value={{gbl_search:''}}>
        <App />
    </Gbl_itemSearch .Provider>
</>
