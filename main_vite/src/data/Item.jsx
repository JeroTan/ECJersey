import { createContext } from "react"

/// Assets
import image_1 from "../assets/item/image_1.jpg"
import image_2 from "../assets/item/image_2.jpg"
import image_3 from "../assets/item/image_3.jpg"
import image_4 from "../assets/item/image_4.jpg"
import image_5 from "../assets/item/image_5.jpg"
import image_6 from "../assets/item/image_6.jpg"
import image_7 from "../assets/item/image_7.jpg"
import image_8 from "../assets/item/image_8.jpg"
import image_9 from "../assets/item/image_9.jpg"
import image_10 from "../assets/item/image_10.jpg"
import image_11 from "../assets/item/image_11.jpg"
import image_12 from "../assets/item/image_12.jpg"
import image_13 from "../assets/item/image_13.jpg"
import image_14 from "../assets/item/image_14.jpg"
import image_15 from "../assets/item/image_15.jpg"
import image_16 from "../assets/item/image_16.jpg"
import image_17 from "../assets/item/image_17.jpg"
import image_18 from "../assets/item/image_18.jpg"
import image_19 from "../assets/item/image_19.jpg"
import image_20 from "../assets/item/image_20.jpg"
import image_21 from "../assets/item/image_21.jpg"
import image_22 from "../assets/item/image_22.jpg"
import image_23 from "../assets/item/image_23.jpg"
import image_24 from "../assets/item/image_24.jpg"
import image_25 from "../assets/item/image_25.jpg"
import image_26 from "../assets/item/image_26.jpg"
import image_27 from "../assets/item/image_27.jpg"
import image_28 from "../assets/item/image_28.jpg"
import image_29 from "../assets/item/image_29.jpg"
import image_30 from "../assets/item/image_30.jpg"
import image_31 from "../assets/item/image_31.jpg"
import image_32 from "../assets/item/image_32.jpg"
import image_33 from "../assets/item/image_33.jpg"
import image_34 from "../assets/item/image_34.jpg"
import image_35 from "../assets/item/image_35.jpg"
import image_36 from "../assets/item/image_36.jpg"
import image_37 from "../assets/item/image_37.jpg"
import image_38 from "../assets/item/image_38.jpg"
import image_39 from "../assets/item/image_39.jpg"
import image_40 from "../assets/item/image_40.jpg"
import image_41 from "../assets/item/image_41.jpg"
import image_42 from "../assets/item/image_42.jpg"
import image_43 from "../assets/item/image_43.jpg"
import image_44 from "../assets/item/image_44.jpg"
import image_45 from "../assets/item/image_45.jpg"
import image_46 from "../assets/item/image_46.jpg"
import image_47 from "../assets/item/image_47.jpg"
import image_48 from "../assets/item/image_48.jpg"
import image_49 from "../assets/item/image_49.jpg"
import image_50 from "../assets/item/image_50.jpg"
import image_51 from "../assets/item/image_51.jpg"
import image_52 from "../assets/item/image_52.jpg"
import image_53 from "../assets/item/image_53.jpg"
import image_54 from "../assets/item/image_54.jpg"
import image_55 from "../assets/item/image_55.jpg"
import image_56 from "../assets/item/image_56.jpg"
import image_57 from "../assets/item/image_57.jpg"
import image_58 from "../assets/item/image_58.jpg"
import image_59 from "../assets/item/image_59.jpg"
import image_60 from "../assets/item/image_60.jpg"
import image_61 from "../assets/item/image_61.jpg"
import image_62 from "../assets/item/image_62.jpg"
import image_63 from "../assets/item/image_63.jpg"
import image_64 from "../assets/item/image_64.jpg"
import image_65 from "../assets/item/image_65.jpg"
import image_66 from "../assets/item/image_66.jpg"
import image_67 from "../assets/item/image_67.jpg"
import image_68 from "../assets/item/image_68.jpg"
import image_69 from "../assets/item/image_69.jpg"
import image_70 from "../assets/item/image_70.jpg"
import image_71 from "../assets/item/image_71.jpg"
import image_72 from "../assets/item/image_72.jpg"
import image_73 from "../assets/item/image_73.jpg"
import image_74 from "../assets/item/image_74.jpg"
import image_75 from "../assets/item/image_75.jpg"
import image_76 from "../assets/item/image_76.jpg"
import image_77 from "../assets/item/image_77.jpg"
import image_78 from "../assets/item/image_78.jpg"
import image_79 from "../assets/item/image_79.jpg"
import image_80 from "../assets/item/image_80.jpg"
import image_81 from "../assets/item/image_81.jpg"
import image_82 from "../assets/item/image_82.jpg"
import image_83 from "../assets/item/image_83.jpg"
import image_84 from "../assets/item/image_84.jpg"

const starmizer = ()=> (((Math.random() * 5)) / 5)*100;
const viewmizer = ()=> ((Math.random() * 100)+3).toFixed(0);
const quantimizer = ()=> ((Math.random()* 100)+99).toFixed(0);

export const dt_items = ()=>{
    return [
        {
            ID: 1,
            Name: "Bape Bulls",
            Category: "jersey",
            Price: 400,
            Team: "Bulls",
            Size: ['lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['red'],
            Image: image_1,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 2,
            Name: "Bape Lakers",
            Category: "jersey",
            Price: 400,
            Team: "Lakers",
            Size: ['xsm', 'sm', 'md', 'lg', 'xl', '2xl'],
            Color: ['yellow'],
            Image: image_2,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 3,
            Name: "Larry Bird",
            Category: "jersey",
            Price: 400,
            Team: "Celtics",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['green'],
            Image: image_3,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 4,
            Name: "Vince Carter",
            Category: "jersey",
            Price: 400,
            Team: "Raptors",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['violet'],
            Image: image_4,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 5,
            Name: "Vince Carter",
            Category: "jersey",
            Price: 400,
            Team: "Raptors",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['white'],
            Image: image_5,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 6,
            Name: "Stephen Curry",
            Category: "jersey",
            Price: 400,
            Team: "Warriors",
            Size: ['2xsm', 'xsm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['blue'],
            Image: image_6,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 7,
            Name: "Stephen Curry",
            Category: "jersey",
            Price: 400,
            Team: "Warriors",
            Size: ['2xsm', 'xsm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['gray'],
            Image: image_7,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 8,
            Name: "Stephen Curry",
            Category: "jersey",
            Price: 400,
            Team: "Warriors",
            Size: ['2xsm', 'xsm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['black'],
            Image: image_8,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 9,
            Name: "Stephen Curry",
            Category: "jersey",
            Price: 400,
            Team: "Warriors",
            Size: ['2xsm', 'xsm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['white'],
            Image: image_9,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 10,
            Name: "Luka Doncic",
            Category: "jersey",
            Price: 470,
            Team: "Mavericks",
            Size: ['2xsm', 'xsm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['blue'],
            Image: image_10,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 11,
            Name: "Derrick Rose",
            Category: "jersey",
            Price: 400,
            Team: "Bulls",
            Size: ['xsm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['black'],
            Image: image_11,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 12,
            Name: "Derrick Rose",
            Category: "jersey",
            Price: 390,
            Team: "Bulls",
            Size: ['xsm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['red'],
            Image: image_12,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 13,
            Name: "Derrick Rose",
            Category: "jersey",
            Price: 500,
            Team: "Mavericks",
            Size: ['xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['white'],
            Image: image_13,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 14,
            Name: "Tim Duncan",
            Category: "jersey",
            Price: 400,
            Team: "Spurs",
            Size: ['xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['black'],
            Image: image_14,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 15,
            Name: "Tim Duncan",
            Category: "jersey",
            Price: 400,
            Team: "Spurs",
            Size: ['xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['white'],
            Image: image_15,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 16,
            Name: "Kevin Durant",
            Category: "jersey",
            Price: 480,
            Team: "Nets",
            Size: ['xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['blue'],
            Image: image_16,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 17,
            Name: "Kevin Durant",
            Category: "jersey",
            Price: 400,
            Team: "Sonics",
            Size: ['xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['green'],
            Image: image_17,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 18,
            Name: "Kevin Durant",
            Category: "jersey",
            Price: 400,
            Team: "Sonics",
            Size: ['xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['white'],
            Image: image_18,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 19,
            Name: "Anthony Edwards",
            Category: "jersey",
            Price: 490,
            Team: "Wolves",
            Size: ['xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['blue'],
            Image: image_19,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 20,
            Name: "Giannis Antetokounmpo",
            Category: "jersey",
            Price: 400,
            Team: "Bucks",
            Size: ['xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['white'],
            Image: image_20,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 21,
            Name: "Giannis Antetokounmpo",
            Category: "jersey",
            Price: 490,
            Team: "Bucks",
            Size: ['xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['blue'],
            Image: image_21,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 22,
            Name: "Giannis Antetokounmpo",
            Category: "jersey",
            Price: 400,
            Team: "Bucks",
            Size: ['xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['violet'],
            Image: image_22,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 23,
            Name: "Manu Ginobili",
            Category: "jersey",
            Price: 400,
            Team: "Spurs",
            Size: ['xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['black'],
            Image: image_23,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 24,
            Name: "Penny Hardaway Sr.",
            Category: "jersey",
            Price: 400,
            Team: "Magic",
            Size: ['xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['black'],
            Image: image_24,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 25,
            Name: "Penny Hardaway Sr.",
            Category: "jersey",
            Price: 470,
            Team: "Magic",
            Size: ['xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['blue'],
            Image: image_25,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 26,
            Name: "James Harden",
            Category: "jersey",
            Price: 470,
            Team: "Sixers",
            Size: ['xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            Color: ['blue'],
            Image: image_26,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 27,
            Name: "Tyler Herro",
            Category: "jersey",
            Price: 400,
            Team: "Heat",
            Size: ['xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            Color: ['black'],
            Image: image_27,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 28,
            Name: "Grant Hill",
            Category: "jersey",
            Price: 400,
            Team: "Pistons",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            Color: ['blue green'],
            Image: image_28,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 29,
            Name: "Allen Iverson",
            Category: "jersey",
            Price: 510,
            Team: "Sixers",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            Color: ['blue'],
            Image: image_29,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 30,
            Name: "Allen Iverson",
            Category: "jersey",
            Price: 400,
            Team: "Sixers",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            Color: ['black'],
            Image: image_30,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 31,
            Name: "Allen Iverson",
            Category: "jersey",
            Price: 400,
            Team: "Sixers",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            Color: ['white'],
            Image: image_31,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 32,
            Name: "Jalen Green",
            Category: "jersey",
            Price: 400,
            Team: "Rockets",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            Color: ['blue'],
            Image: image_32,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 33,
            Name: "Michael Jordan",
            Category: "jersey",
            Price: 400,
            Team: "Bulls",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            Color: ['black'],
            Image: image_33,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 34,
            Name: "Michael Jordan",
            Category: "jersey",
            Price: 400,
            Team: "Bulls",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            Color: ['black'],
            Image: image_34,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 35,
            Name: "Michael Jordan",
            Category: "jersey",
            Price: 500,
            Team: "Bulls",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            Color: ['gold'],
            Image: image_35,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 36,
            Name: "Michael Jordan",
            Category: "jersey",
            Price: 400,
            Team: "North Carolina",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            Color: ['blue'],
            Image: image_36,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 37,
            Name: "Michael Jordan",
            Category: "jersey",
            Price: 600,
            Team: "Bulls",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            Color: ['red'],
            Image: image_37,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 38,
            Name: "Michael Jordan",
            Category: "jersey",
            Price: 400,
            Team: "Tune Squad",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            Color: ['white'],
            Image: image_38,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 39,
            Name: "Michael Jordan",
            Category: "jersey",
            Price: 400,
            Team: "Bulls",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            Color: ['white'],
            Image: image_39,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 40,
            Name: "Shawn Kemp",
            Category: "jersey",
            Price: 400,
            Team: "Sonics",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            Color: ['green'],
            Image: image_40,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 41,
            Name: "Kobe Bryant",
            Category: "jersey",
            Price: 600,
            Team: "Lakers",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            Color: ['yellow'],
            Image: image_41,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 42,
            Name: "Kobe Bryant",
            Category: "jersey",
            Price: 400,
            Team: "Lakers",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            Color: ['black'],
            Image: image_42,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 43,
            Name: "Kobe Bryant",
            Category: "jersey",
            Price: 450,
            Team: "Lakers",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            Color: ['yellow'],
            Image: image_43,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 44,
            Name: "Kobe Bryant",
            Category: "jersey",
            Price: 600,
            Team: "Lower Merion",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            Color: ['red'],
            Image: image_44,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 45,
            Name: "Kobe Bryant",
            Category: "jersey",
            Price: 600,
            Team: "Lower Merion",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl'],
            Color: ['white'],
            Image: image_45,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 46,
            Name: "Kobe Bryant",
            Category: "jersey",
            Price: 480,
            Team: "Lakers",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl'],
            Color: ['yellow'],
            Image: image_46,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 47,
            Name: "Kobe Bryant",
            Category: "jersey",
            Price: 410,
            Team: "Lakers",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl'],
            Color: ['violet'],
            Image: image_47,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 48,
            Name: "Kyrie Irving",
            Category: "jersey",
            Price: 400,
            Team: "Nets",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl'],
            Color: ['blue'],
            Image: image_48,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 49,
            Name: "LaMelo Ball",
            Category: "jersey",
            Price: 440,
            Team: "Hornets",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl'],
            Color: ['blue'],
            Image: image_49,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 50,
            Name: "LaMelo Ball",
            Category: "jersey",
            Price: 480,
            Team: "Hornets",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl'],
            Color: ['blue'],
            Image: image_50,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 51,
            Name: "LeBron James",
            Category: "jersey",
            Price: 400,
            Team: "Lakers",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl'],
            Color: ['white'],
            Image: image_51,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 52,
            Name: "LeBron James",
            Category: "jersey",
            Price: 400,
            Team: "Lakers",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl'],
            Color: ['black'],
            Image: image_52,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 53,
            Name: "LeBron James",
            Category: "jersey",
            Price: 470,
            Team: "Lakers",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl'],
            Color: ['yellow'],
            Image: image_53,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 54,
            Name: "LeBron James",
            Category: "jersey",
            Price: 460,
            Team: "Cavaliers",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl'],
            Color: ['blue'],
            Image: image_54,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 55,
            Name: "LeBron James",
            Category: "jersey",
            Price: 440,
            Team: "Cavaliers",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl'],
            Color: ['red'],
            Image: image_55,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 56,
            Name: "Kawhi Leonard",
            Category: "jersey",
            Price: 400,
            Team: "Clippers",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl'],
            Color: ['black'],
            Image: image_56,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 57,
            Name: "Kawhi Leonard",
            Category: "jersey",
            Price: 400,
            Team: "Raptors",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl'],
            Color: ['white'],
            Image: image_57,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 58,
            Name: "Damian Lillard",
            Category: "jersey",
            Price: 400,
            Team: "Trail Blazers",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl'],
            Color: ['black'],
            Image: image_58,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 59,
            Name: "Magic Johnson",
            Category: "jersey",
            Price: 400,
            Team: "Lakers",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl'],
            Color: ['yellow'],
            Image: image_59,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 60,
            Name: "Ja Morant",
            Category: "jersey",
            Price: 440,
            Team: "Grizzlies",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl'],
            Color: ['blue'],
            Image: image_60,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 61,
            Name: "Ja Morant",
            Category: "jersey",
            Price: 410,
            Team: "Grizzlies",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['red'],
            Image: image_61,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 62,
            Name: "Ja Morant",
            Category: "jersey",
            Price: 420,
            Team: "Grizzlies",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['blue green'],
            Image: image_62,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 63,
            Name: "Ja Morant",
            Category: "jersey",
            Price: 400,
            Team: "Grizzlies",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['white'],
            Image: image_63,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 64,
            Name: "Ja Morant",
            Category: "jersey",
            Price: 440,
            Team: "Murray State",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['blue'],
            Image: image_64,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 65,
            Name: "Ja Morant",
            Category: "jersey",
            Price: 400,
            Team: "Murray State",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['white'],
            Image: image_65,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 66,
            Name: "Ja Morant",
            Category: "jersey",
            Price: 400,
            Team: "Grizzlies",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['gold'],
            Image: image_66,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 67,
            Name: "Ja Morant",
            Category: "jersey",
            Price: 420,
            Team: "Grizzlies",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['blue'],
            Image: image_67,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 68,
            Name: "Ja Morant",
            Category: "jersey",
            Price: 400,
            Team: "Grizzlies",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['white'],
            Image: image_68,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 69,
            Name: "Scottie Pippen",
            Category: "jersey",
            Price: 400,
            Team: "Bulls",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['black'],
            Image: image_69,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 70,
            Name: "Scottie Pippen",
            Category: "jersey",
            Price: 420,
            Team: "Bulls",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['red'],
            Image: image_70,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 71,
            Name: "Scottie Pippen",
            Category: "jersey",
            Price: 400,
            Team: "Bulls",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['white'],
            Image: image_71,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 72,
            Name: "Jordan Poole",
            Category: "jersey",
            Price: 400,
            Team: "Warriors",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['black'],
            Image: image_72,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 73,
            Name: "Jordan Poole",
            Category: "jersey",
            Price: 450,
            Team: "Warriors",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['blue'],
            Image: image_73,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 74,
            Name: "Reggie Miller",
            Category: "jersey",
            Price: 490,
            Team: "Pacers",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['blue'],
            Image: image_74,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 75,
            Name: "Dennis Rodman",
            Category: "jersey",
            Price: 400,
            Team: "Bulls",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['black'],
            Image: image_75,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 76,
            Name: "Dennis Rodman",
            Category: "jersey",
            Price: 450,
            Team: "Lakers",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['yellow'],
            Image: image_76,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 77,
            Name: "Dennis Rodman",
            Category: "jersey",
            Price: 430,
            Team: "Bulls",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['red'],
            Image: image_77,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 78,
            Name: "Dennis Rodman",
            Category: "jersey",
            Price: 450,
            Team: "Bulls",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['white'],
            Image: image_78,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 79,
            Name: "Jason Tatum",
            Category: "jersey",
            Price: 400,
            Team: "Celtics",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['green'],
            Image: image_79,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 80,
            Name: "Jason Tatum",
            Category: "jersey",
            Price: 400,
            Team: "Celtics",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['black'],
            Image: image_80,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 81,
            Name: "Klay Thompson",
            Category: "jersey",
            Price: 400,
            Team: "Warriors",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['black'],
            Image: image_81,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 82,
            Name: "Klay Thompson",
            Category: "jersey",
            Price: 460,
            Team: "Warriors",
            Size: ['md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['blue'],
            Image: image_82,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 83,
            Name: "Trae Young",
            Category: "jersey",
            Price: 400,
            Team: "Hawks",
            Size: ['2xsm', 'xsm', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
            Color: ['yellow'],
            Image: image_83,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
        {
            ID: 84,
            Name: "Durant",
            Category: "jersey",
            Price: 2499,
            Team: "Nets",
            Size: ['xl'],
            Color: ['black'],
            Image: image_84,
            Rating: starmizer(),
            Views: viewmizer(),
            Quantity: quantimizer()
        },
    
    
    ]
}

export const Gbl_items = createContext(dt_items());