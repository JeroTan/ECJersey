import { createContext } from "react"
import App from '../App.jsx';

/// Assets
import image_1 from "../assets/item/1_item.png"
import image_2 from "../assets/item/2_item.png"
import image_3 from "../assets/item/3_item.png"
import image_4 from "../assets/item/4_item.png"
import image_5 from "../assets/item/5_item.png"

export const dt_items = ()=>{
    return [
        {
            ID: 1,
            Name: "pangalan",
            Category: "jersey",
            Price: 300,
            Team: "Lakers",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['red', 'yellow', 'blue', 'orange', 'green', 'violet', 'brown', 'pink', 'black', 'white'],
            Image: image_1,
        },
        {
            ID: 2,
            Name: "pangalan Nyaaaa",
            Category: "bottoms",
            Price: 3000,
            Team: "Warriors",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['red', 'yellow', 'blue', 'orange', 'green', 'violet', 'brown', 'pink', 'black', 'white'],
            Image: image_2,
        },
        {
            ID: 3,
            Name: "error",
            Category: "bottoms",
            Price: 3050,
            Team: "Warriors",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['red', 'yellow', 'blue', 'orange', 'green', 'violet', 'brown', 'pink', 'black', 'white'],
            Image: image_3,
        },
        {
            ID: 4,
            Name: "error",
            Category: "bottoms",
            Price: 3350,
            Team: "Warriors",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['red', 'yellow', 'blue', 'orange', 'green', 'violet', 'brown', 'pink', 'black', 'white'],
            Image: image_4,
        },
        {
            ID: 5,
            Name: "kalokohan",
            Category: "bottoms",
            Price: 3650,
            Team: "Warriors",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['red', 'yellow', 'blue', 'orange', 'green', 'violet', 'brown', 'pink', 'black', 'white'],
            Image: image_5,
        },
    ]
}

export const Gbl_items = createContext(dt_items());