import { createContext } from "react"
import App from '../App.jsx';
let data = { currentPage:'home' } /// This is really important rooted back to C++ pointers and you can use it to change the data all you want.


export const Gbl_currentPage = createContext(data);

export default ()=><>
    <Gbl_currentPage.Provider value={data}>
        <App />
    </Gbl_currentPage.Provider>
</>
