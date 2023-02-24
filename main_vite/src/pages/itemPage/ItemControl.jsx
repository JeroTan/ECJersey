import { useContext, useState } from "react"
/// page
import { Gbl_itemControl } from "./ItemCatalog";
import { Gbl_currentPage } from "../../data/CurrentPage";
import { ItemCategory } from "./ItemCategory"
/// utilites
import Icon from '../../utilities/Icon';

//if( dt_itemCat.hasOwnProperty("") )  GONNA USE LATER

export default ()=>{
    let { dt_itemCat } = useContext(Gbl_itemControl);
    let { currentPage } = useContext(Gbl_currentPage);

    // useState
    let [sp_catCheckbox, sp_catCheckboxSet] = useState({
        all: currentPage == 'home' || currentPage == 'none',
        jersey: currentPage == 'jersey',
        shoes: currentPage == 'shoes',
        bottoms: currentPage == 'bottoms',
        accessories: currentPage == 'accessories'
    });

    //-- I use this to initiate Ui of the control by dividing them per filter
    let controlUI = {};

    const hndl_catCheckbox = (event) => {
        const { id, checked } = event.target;
        sp_catCheckboxSet((prevsp_catCheckbox) => ({ ...prevsp_catCheckbox, [id]: checked }));
    };

    controlUI.category = <>
        <h4>Category</h4>
        <div className="flex flex-col">
            <div>
                <input className="mr-2" type="checkbox" id="all" name="all" value="all" checked={sp_catCheckbox.all} onChange={hndl_catCheckbox}/>
                <label htmlFor="all">All</label>
            </div>
            <div>
                <input className="mr-2" type="checkbox" id="jersey" name="jersey" value="jersey" checked={sp_catCheckbox.jersey} onChange={hndl_catCheckbox}/>
                <label htmlFor="jersey">Jersey</label>
            </div>
            <div>
                <input className="mr-2" type="checkbox" id="shoes" name="shoes" value="shoes" checked={sp_catCheckbox.shoes} onChange={hndl_catCheckbox}/>
                <label htmlFor="shoes">Shoes</label>
            </div>
            <div>
                <input className="mr-2" type="checkbox" id="bottoms" name="bottoms" value="bottoms" checked={sp_catCheckbox.bottoms} onChange={hndl_catCheckbox}/>
                <label htmlFor="bottoms">Bottom</label>
            </div>
            <div>
                <input className="mr-2" type="checkbox" id="accessories" name="accessories" value="accessories" checked={sp_catCheckbox.accessories} onChange={hndl_catCheckbox}/>
                <label htmlFor="accessories">Accessories</label>
            </div>
        </div>
    </>

    return <>
        <aside className="h-full w-2/12 bg-zinc-900/[0.95] text-slate-200 flex flex-col p-3">
            <div className="flex w-full justify-between">
                <h4 className="font-bold">Filter</h4>
                <div className="flex cursor-pointer">
                    <h4 className="text-indigo-500">Collapse</h4>
                    <Icon name="first_page" size="1.6" tailwindClass="fill-indigo-500" />
                </div>
            </div>
            {Object.keys(controlUI).map( (item)=> 
                <div key={item}>
                    {controlUI[item]}
                </div>
            )}
            
        </aside>
    </>
}