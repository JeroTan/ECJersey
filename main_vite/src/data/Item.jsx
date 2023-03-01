import { createContext } from "react"
import App from '../App.jsx';

let data = [

]

export const Gbl_item = createContext(data);

export default ()=><>
    <Gbl_item.Provider value={data}>
        <App />
    </Gbl_item.Provider>
</>
