import { useState, useContext, useRef } from 'react';
import {useNavigate} from 'react-router-dom';

/// utilities
import { ColorTransform } from '../../utilities/ColorTransform';
import { ItemGetter } from '../../utilities/ItemGetter';
import Icon from '../../utilities/Icon';

/// pages
import { Gbl_itemControl } from './ItemCatalog';
import { Gbl_items } from '../../data/Item';
import { Gbl_itemSearch } from '../../data/Search';
import { Gbl_openFilter } from './ItemCatalog';

/// assets
import './ItemList.css';


export default ()=>{
    // useNavigate
    const rt_navigate = useNavigate();

    // useContext
    const [sp_itemControl, sp_itemControlSet] = useContext(Gbl_itemControl);
    const { sp_search, sp_searchSet } = useContext(Gbl_itemSearch);
    const { sp_items, sp_itemsSet } = useContext(Gbl_items);
    const [ sp_openFilter, sp_openFilterSet] = useContext(Gbl_openFilter);

    // useState
    const [sp_viewType, sp_viewTypeSet] = useState('window');

    // useRef
    const rf_searchButton = useRef('');

    const ItemContainer = ({title='', navigation='', sizes=[], colors=[], price=0, image=''})=>{
        let stopSize = false;
        let stopColor = false;

        return <>
        <div className="w-full aspect-[30/35] bg-slate-200 box-border drop-shadow-xl p-3 cursor-pointer scale-up-center" onClick={()=>{rt_navigate(navigation)}}>
            {/*Image*/}
            <div className="w-full aspect-[10/8] overflow-hidden">
                <div className="w-full h-full">
                    <img className="relative w-full h-full object-center object-contain" src={image}/>
                </div>
            </div>
            {/*Content*/}
            <div className="mt-3">
                <div>
                    <h4 className="font-semibold text-zinc-500 pb-2 sm:text-base text-sm">{title}</h4>
                </div>
                
                <div className="flex justify-between h-full relative pb-1">
                    <div className="h-full">
                        <p className="sm:text-base text-xs">
                            {
                                sizes.map( (item, index)=>{
                                    if(stopSize != false)
                                        return null
                                    else{
                                        if(index > 3){
                                            stopSize = true;
                                            return <span className={`sm:text-sm text-[7px] rounded-sm text-slate-400`}>more</span>
                                        }else
                                            return <>{item+' '}</>
                                    }
                                })
                            }
                        </p>
                        <div className="flex gap-1">
                            {
                                colors.map( (item, index)=>{
                                    if(stopColor != false)
                                        return null
                                    else{
                                        if(index > 3){
                                            stopColor = true;
                                            return <div className={`sm:text-sm text-[7px] rounded-sm text-slate-400`}>more</div>
                                        }
                                        else
                                            return <div className={`sm:w-4 sm:h-4 w-2 h-2 rounded-sm bg-${ColorTransform(item)}`}></div>
                                    }

                                } )
                            }
                        </div>
                    </div>

                    <div className="absolute bottom-0 right-0">
                        <label className="font-bold font-serif sm:text-sm text-xs text-indigo-700">&#8369; {price}</label>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    }
  
    let itemizer = ItemGetter([sp_search, sp_itemControl.category, sp_itemControl.price, sp_itemControl.team, sp_itemControl.size, sp_itemControl.color], sp_items)
   
    return <>
        <main className={`2xl:w-10/12 xl:w-9/12 md:w-9/12 w-full ${sp_openFilter?'hidden':''} bg-slate-300 text-zinc-800 box-border sm:p-10 p-5`}>
            <section className='w-full flex justify-between mb-10'>
                <div>
                    <button className={`p-2 px-3 ${sp_openFilter?'bg-indigo-700 text-slate-100':'bg-slate-200 text-zinc-800'} md:hidden flex flex-row items-center`} onClick={()=>{sp_openFilterSet(prev=>!prev)}}>
                        <Icon name="filter" size={1} tailwindClass={sp_openFilter?"fill-slate-100":"fill-zinc-800"} /><span>Filter</span>
                    </button>
                </div>
                <div className="flex flex-row gap-2">
                    {
                        sp_viewType == 'window' ? 
                        <button className={'p-2 px-3 bg-indigo-700 flex flex-row items-center'}><Icon name="window_view" size={1} tailwindClass="fill-slate-100" /></button> :
                        <button onClick={()=>{sp_viewTypeSet('window')}} className={'p-2 px-3 bg-slate-200 flex flex-row items-center'}><Icon name="window_view" size={1} tailwindClass="fill-zinc-800" /></button>
                    }
                    {
                        sp_viewType == 'list' ?
                        <button className={'p-2 px-3 bg-indigo-700 flex flex-row items-center'}><Icon name="list_view" size={1} tailwindClass="fill-slate-100" /></button> :
                        <button onClick={()=>{sp_viewTypeSet('list')}} className={'p-2 px-3 bg-slate-200 flex flex-row items-center'}><Icon name="list_view" size={1} tailwindClass="fill-zinc-800" /></button>
                    }
                </div>
            </section>
            <section className='w-full grid sm:gap-10 gap-5 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 auto-rows-max'>
                {
                    itemizer.length > 0 ?
                    itemizer.map(item=>{
                        return <ItemContainer key={item.ID} title={item.Name} navigation={`/item/${item.ID}`} sizes={item.Size} colors={item.Color} price={item.Price} image={item.Image}/>
                    }) :
                    ''
                }
            </section>
        </main>
    </>
}