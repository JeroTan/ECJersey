import { useContext, useState } from "react"
/// page
import { Gbl_itemControl } from "./ItemCatalog";
import { Gbl_currentPage } from "../../data/CurrentPage";
import { ItemCategory } from "./ItemCategory"
import { Gbl_teamLogo } from "../../data/Team";
import'./itemControl.css';
/// utilites
import Icon from '../../utilities/Icon';

//if( dt_itemCat.hasOwnProperty("") )  GONNA USE LATER

export default ()=>{
    // useContext
    let [sp_itemControl, sp_itemControlSet] = useContext(Gbl_itemControl);
    let { currentPage } = useContext(Gbl_currentPage);
    let { logo } = useContext(Gbl_teamLogo);
    
    // useState
    let [sp_catCheckbox, sp_catCheckboxSet] = useState({
        allCategory: currentPage == 'home' || currentPage == 'none',
        jersey: currentPage == 'jersey',
        shoes: currentPage == 'shoes',
        bottoms: currentPage == 'bottoms',
        accessories: currentPage == 'accessories'
    });
    let [sp_priceSort, sp_priceSortSet] = useState('MinToMax');
    let [sp_priceRange, sp_priceRangeSet] = useState({
        min: '',
        max: ''
    }); 
    let [sp_teamCheckbox, sp_teamCheckboxSet] = useState({
        allTeam: true,
        hawks: false,
        celtics: false,
        nets: false,
        hornets: false,
        bulls: false,
        cavaliers: false,
        mavericks: false,
        nuggets: false,
        pistons: false,
        warriors: false,
        rockets: false,
        pacers: false,
        clippers: false,
        lakers: false,
        grizzlies: false,
        heat: false,
        bucks: false,
        timberwolves: false,
        pelicans: false,
        knicks: false,
        thunder: false,
        magic: false,
        x76ers: false,
        suns: false,
        trailblazers: false,
        kings: false,
        spurs: false,
        raptors: false,
        jazz: false,
        wizards: false,
        custom: false,
    })
    let [sp_sizesCheckbox, sp_sizesCheckboxSet] = useState({
        allSizes: true,
        x2sm: false,
        xsm: false,
        sm: false,
        md: false,
        lg: false,
        xl: false,
        x2l: false,
        x3l: false,
        x4l: false
    })
    let [sp_colorsCheckbox, sp_colorsCheckboxSet] = useState({
        allColors: true,
        red: false,
        yellow: false,
        blue: false,
        orange: false,
        greem: false,
        violet: false,
        brown: false,
        pink: false,
        black: false,
        white: false
    })

    //-- I use this to initiate Ui of the control by dividing them per filter
    let controlUI = {};
    //-- I created a function box for check box so it became reusable
    const checkBox = (containerClass='', ids = '', stater='', onChange_callback='', alt_name=false)=>{
        return <div className={containerClass+' flex flex-row'}>
            <input className="mr-2 appearance-none w-3 h-3 rounded bg-indigo-200 checked:bg-sky-500 indeterminate:bg-indigo-200" type="checkbox" id={ids} name={ids} value={ids} checked={stater[ids]} onChange={onChange_callback}/>
            <label className="flex flex-row text-sm" htmlFor={ids}>{alt_name == false ? (ids.charAt(0).toUpperCase() + ids.slice(1)) : alt_name}</label>
        </div>
    };
    const imageInline = (source)=>{
        return <>
        <div className="mr-2 h-5 aspect-square rounded-full overflow-hidden bg-zinc-900">
            <img className="relative w-full h-full object-cover object-center" src={source}/>
        </div>   
        </>
    }
    const colorInline = (color)=>{
        return <>
            <div className={`w-4 h-4 rounded-sm bg-${color}`}></div> 
        </>
    }

    //-- --//
    const hndl_catCheckbox = (event) => {
        const { id, checked } = event.target;
        if(id == 'allCategory' && checked == true){
            let temp = {};
            Object.keys(sp_catCheckbox).map( (keys)=> {
                temp[keys] = false;
            })
            temp.allCategory = true;
            sp_catCheckboxSet(temp);
        }
        else{
            sp_catCheckboxSet((prevsp_catCheckbox) => ({ ...prevsp_catCheckbox, [id]: checked, allCategory:false }));
        }
            
    };
    controlUI.category = <>
        <h4 className="font-bold text-indigo-100">Category</h4>
        <div className="flex flex-col ml-2">
            {checkBox('', 'allCategory', sp_catCheckbox, hndl_catCheckbox, 'All')}
            {checkBox('', 'jersey', sp_catCheckbox, hndl_catCheckbox)}
            {checkBox('', 'shoes', sp_catCheckbox, hndl_catCheckbox)}
            {checkBox('', 'bottoms', sp_catCheckbox, hndl_catCheckbox)}
            {checkBox('', 'accessories', sp_catCheckbox, hndl_catCheckbox)}
        </div>
    </>

    //-- --//
    const hndl_priceSort = (event)=>{
        sp_priceSortSet(event.target.value);
    }
    const hndl_priceRange = (event)=>{
        let {id, value} = event.target;
        if(id == 'min' && value != '' && sp_priceRange.max != '')
            value = value > sp_priceRange.max ? sp_priceRange.max : value;
        else if(id == 'max' && value != '' && sp_priceRange.min != '')
            value = value < sp_priceRange.min ? sp_priceRange.min : value;
        
        sp_priceRangeSet({...sp_priceRange, [id]:value != '' || value != false ? value : false})
    }
    controlUI.price = <>
        <h4 className="font-bold text-indigo-100">Price</h4>
        <div className="flex flex-col ml-2">
            <div className="text-sm">
                <label className="mr-1" htmlFor="priceSort">Price Sort: </label>
                <select className="bg-zinc-900" name="priceSort" id="priceSort" onChange={hndl_priceSort}>
                    <option value="MinToMax">Min to Max</option>
                    <option value="MaxToMin">Max to Min</option>
                </select>   
            </div>
            <div className="flex flex-col text-sm">
                <label className="pb-1">Price Range: </label>
                <div className="flex flex-row justify-between">
                    <div>
                        <input id="min" type="number" className="w-full bg-zinc-900 p-1" min="0" placeholder="Min" onInput={hndl_priceRange} value={sp_priceRange.min}/>
                    </div>
                    <div className="px-2">-</div>
                    <div>
                        <input id="max" type="number" className="w-full bg-zinc-900 p-1" min="1" placeholder="Max" onInput={hndl_priceRange} value={sp_priceRange.max}/>
                    </div>
                </div>
            </div>
        </div>
    </>

    //-- --//
    const hndl_teamCheckbox = (event)=>{
        const { id, checked } = event.target;
        if(id=='allTeam' && checked == true){
            let temp = {};
            Object.keys(sp_teamCheckbox).map( (keys)=> {
                temp[keys] = false;
            })
            temp.allTeam = true;
            sp_teamCheckboxSet(temp);
        }
        else{
            sp_teamCheckboxSet((prevsp_teamCheckbox) => ({ ...prevsp_teamCheckbox, [id]: checked , allTeam:false}));
        }
    }
    controlUI.teams = <>
        <h4 className="font-bold text-indigo-100">Teams</h4>
        <div className="ml-2 flex flex-wrap">
            {checkBox('w-6/12 pb-2', 'allTeam', sp_teamCheckbox, hndl_teamCheckbox, 'All')}
            {checkBox('w-6/12 pb-2', 'hawks', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.hawks)} Hawks</> )}
            {checkBox('w-6/12 pb-2', 'celtics', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.celtics)} Celtics</> )}
            {checkBox('w-6/12 pb-2', 'nets', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.nets)} Nets</> )}
            {checkBox('w-6/12 pb-2', 'hornets', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.hornets)} Hornets</> )}
            {checkBox('w-6/12 pb-2', 'bulls', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.bulls)} Bulls</> )}

            {checkBox('w-6/12 pb-2', 'cavaliers', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.cavaliers)} Cavaliers</> )}
            {checkBox('w-6/12 pb-2', 'mavericks', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.mavericks)} Mavericks</> )}
            {checkBox('w-6/12 pb-2', 'nuggets', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.nuggets)} Nuggets</> )}
            {checkBox('w-6/12 pb-2', 'pistons', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.pistons)} Pistons</> )}
            {checkBox('w-6/12 pb-2', 'warriors', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.warriors)} Warriors</> )}

            {checkBox('w-6/12 pb-2', 'rockets', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.rockets)} Rockets</> )}
            {checkBox('w-6/12 pb-2', 'pacers', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.pacers)} Pacers</> )}
            {checkBox('w-6/12 pb-2', 'clippers', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.clippers)} Clippers</> )}
            {checkBox('w-6/12 pb-2', 'lakers', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.lakers)} Bulls</> )}
            {checkBox('w-6/12 pb-2', 'grizzlies', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.grizzlies)} Grizzlies</> )}

            {checkBox('w-6/12 pb-2', 'heat', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.heat)} Heat</> )}
            {checkBox('w-6/12 pb-2', 'bucks', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.bucks)} Bucks</> )}
            {checkBox('w-6/12 pb-2', 'timberwolves', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.timbrwolves)} Timberwolves</> )}
            {checkBox('w-6/12 pb-2', 'pelicans', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.pelicans)} Pelicans</> )}
            {checkBox('w-6/12 pb-2', 'knicks', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.knicks)} Knicks</> )}

            {checkBox('w-6/12 pb-2', 'thunder', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.thunder)} Thunder</> )}
            {checkBox('w-6/12 pb-2', 'magic', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.magic)} Magic</> )}
            {checkBox('w-6/12 pb-2', 'x76ers', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.x76ers)} 76ers</> )}
            {checkBox('w-6/12 pb-2', 'suns', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.suns)} suns</> )}
            {checkBox('w-6/12 pb-2', 'trailblazers', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.trailblazers)} Trail Blazers</> )}

            {checkBox('w-6/12 pb-2', 'kings', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.kings)} Kings</> )}
            {checkBox('w-6/12 pb-2', 'spurs', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.spurs)} Spurs</> )}
            {checkBox('w-6/12 pb-2', 'raptors', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.raptors)} Raptors</> )}
            {checkBox('w-6/12 pb-2', 'jazz', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.jazz)}Jazz</> )}
            {checkBox('w-6/12 pb-2', 'wizards', sp_teamCheckbox, hndl_teamCheckbox, <>{imageInline(logo.wizards)} Wizards</> )}
            {checkBox('w-6/12 pb-2', 'custom', sp_teamCheckbox, hndl_teamCheckbox )}
        </div>
    </>

    //-- --//
    const hndl_sizesCheckbox = (event)=>{
        const { id, checked } = event.target;
        if(id=='allSizes' && checked == true){
            let temp = {};
            Object.keys(sp_sizesCheckbox).map( (keys)=> {
                temp[keys] = false;
            })
            temp.allSizes = true;
            sp_sizesCheckboxSet(temp);
        }
        else{
            sp_sizesCheckboxSet((prevsp_sizesCheckbox) => ({ ...prevsp_sizesCheckbox, [id]: checked , allSizes:false}));
        }
    }
    controlUI.sizes = <>
        <h4 className="font-bold text-indigo-100">Sizes</h4>
        <div className="ml-2 flex flex-wrap">
            {checkBox('w-4/12 pb-1', 'allSizes', sp_sizesCheckbox, hndl_sizesCheckbox, 'all')}
            {checkBox('w-4/12 pb-1', 'x2sm', sp_sizesCheckbox, hndl_sizesCheckbox, '2xsm')}
            {checkBox('w-4/12 pb-1', 'xsm', sp_sizesCheckbox, hndl_sizesCheckbox, 'xsm')}
            {checkBox('w-4/12 pb-1', 'sm', sp_sizesCheckbox, hndl_sizesCheckbox, 'sm')}
            {checkBox('w-4/12 pb-1', 'md', sp_sizesCheckbox, hndl_sizesCheckbox, 'md')}
            {checkBox('w-4/12 pb-1', 'lg', sp_sizesCheckbox, hndl_sizesCheckbox, 'lg')}
            {checkBox('w-4/12 pb-1', 'xl', sp_sizesCheckbox, hndl_sizesCheckbox, 'xl')}
            {checkBox('w-4/12 pb-1', 'x2l', sp_sizesCheckbox, hndl_sizesCheckbox, '2xl')}
            {checkBox('w-4/12 pb-1', 'x3l', sp_sizesCheckbox, hndl_sizesCheckbox, '3xl')}
            {checkBox('w-4/12 pb-1', 'x4l', sp_sizesCheckbox, hndl_sizesCheckbox, '4xl')}
            
        </div>
    </>

    //-- --//
    const hndl_colorsCheckbox = (event)=>{
        const { id, checked } = event.target;
        if(id=='allColors' && checked == true){
            let temp = {};
            Object.keys(sp_colorsCheckbox).map( (keys)=> {
                temp[keys] = false;
            })
            temp.allColors = true;
            sp_colorsCheckboxSet(temp);
        }
        else{
            sp_colorsCheckboxSet((prevsp_colorsCheckbox) => ({ ...prevsp_colorsCheckbox, [id]: checked , allColors:false}));
        }
    }
    controlUI.colors = <>
        <h4 className="font-bold text-indigo-100">Colors</h4>
        <div className="ml-2 flex flex-wrap">
            {checkBox('w-4/12 pb-1', 'allColors', sp_colorsCheckbox, hndl_colorsCheckbox, 'all')}
            {checkBox('w-4/12 pb-1', 'red', sp_colorsCheckbox, hndl_colorsCheckbox, colorInline('red-500'))}
            {checkBox('w-4/12 pb-1', 'yellow', sp_colorsCheckbox, hndl_colorsCheckbox, colorInline('yellow-500'))}
            {checkBox('w-4/12 pb-1', 'blue', sp_colorsCheckbox, hndl_colorsCheckbox, colorInline('blue-500'))}
            {checkBox('w-4/12 pb-1', 'orange', sp_colorsCheckbox, hndl_colorsCheckbox, colorInline('orange-500'))}
            {checkBox('w-4/12 pb-1', 'green', sp_colorsCheckbox, hndl_colorsCheckbox, colorInline('emerald-500'))}
            {checkBox('w-4/12 pb-1', 'violet', sp_colorsCheckbox, hndl_colorsCheckbox, colorInline('purple-500'))}
            {checkBox('w-4/12 pb-1', 'brown', sp_colorsCheckbox, hndl_colorsCheckbox, colorInline('amber-800'))}
            {checkBox('w-4/12 pb-1', 'pink', sp_colorsCheckbox, hndl_colorsCheckbox, colorInline('pink-500'))}
            {checkBox('w-4/12 pb-1', 'black', sp_colorsCheckbox, hndl_colorsCheckbox, colorInline('gray-500'))}
            {checkBox('w-4/12 pb-1', 'white', sp_colorsCheckbox, hndl_colorsCheckbox, colorInline('slate-100'))}
        </div>
    </>

    return <>
        <aside className="h-full w-2/12 bg-zinc-900/[0.95] text-slate-200 flex flex-col p-3">
            <div className="flex w-full justify-between mb-2">
                <h4 className="text-xl tracking-wider font-bold">Filter</h4>
                <div className="flex cursor-pointer hidden">
                    <h4 className="text-indigo-700">Collapse</h4>
                    <Icon name="first_page" size="1.6" tailwindClassName="fill-indigo-700" />
                </div>
            </div>
            {/*-- I created this area so that the controlUI will release all Components here */}
            {Object.keys(controlUI).map( (item)=> 
                <div key={item} className="mb-2">
                    {controlUI[item]}
                </div>
            )}
            
        </aside>
    </>
}