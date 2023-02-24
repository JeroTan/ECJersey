import { createContext } from "react"
import App from '../App.jsx';

export const Gbl_itemSearch = createContext('');

export default ()=><>
    <Gbl_itemSearch .Provider value={''}>
        <App />
    </Gbl_itemSearch .Provider>
</>
