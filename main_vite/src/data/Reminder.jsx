import { createContext } from "react"

export const dt_reminder = ()=>{
    return [
    ]
}
/*Format
[
    {
        Counter:0,
        Data:
    },
    {

    }
]
*/

export const Gbl_reminder = createContext(dt_reminder());
