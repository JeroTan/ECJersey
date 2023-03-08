import { createContext } from "react"

export const dt_session = ()=>({
    Login: false,
    Data:{}
})

export const Gbl_session = createContext(dt_session());
