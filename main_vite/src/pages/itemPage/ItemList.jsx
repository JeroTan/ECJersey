import { useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom';

/// utilities
import { ColorTransform } from '../../utilities/ColorTransform';
import Icon from '../../utilities/Icon';

/// pages
import { Gbl_itemControl } from './ItemCatalog';
import { Gbl_item } from '../../data/Item';

export default ()=>{
    // useNavigate
    const rt_navigate = useNavigate();

    // useContext
    const [sp_itemControl, sp_itemControlSet] = useContext(Gbl_itemControl);
    const d_item = useContext(Gbl_item);

    // useState
    const [sp_viewType, sp_viewTypeSet] = useState('window');
    console.log(d_item);

    const ItemContainer = ({title='', navigation='', sizes=[], colors=[]})=>{
        let stopSize = false;
        let stopColor = false;

        return <>
        <div className="w-full aspect-[30/35] bg-slate-200 box-border drop-shadow-xl p-3 cursor-pointer">
            {/*Image*/}
            <div className="w-full aspect-[10/8] overflow-hidden">
                <div className="w-full h-full">
                    <img className="relative w-full h-full object-center object-contain" src="https://cdn.shopify.com/s/files/1/0414/8917/0599/products/AA7099-742_A_2400x.png?v=1593132488"/>
                </div>
            </div>
            {/*Content*/}
            <div className="mt-3">
                <h4 className="font-bold text-indigo-500 pb-2">{title}</h4>
                <div className="flex justify-between h-full relative">
                    <div className="h-full">
                        <p>
                            {
                                sizes.map( (item, index)=>{
                                    if(stopSize != false)
                                        return null
                                    else{
                                        if(index > 4){
                                            stopSize = true;
                                            return <span className={`text-sm rounded-sm text-slate-400`}>more</span>
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
                                        if(index > 4){
                                            stopColor = true;
                                            return <div className={`text-sm rounded-sm text-slate-400`}>more</div>
                                        }
                                        else
                                            return <div class={`w-4 h-4 rounded-sm bg-${ColorTransform(item)}`}></div>
                                    }

                                } )
                            }
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0">
                        <label className="font-bold font-serif text-sm text-emerald-600">&#8369; 300</label>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    }

    return <>
        <main className="w-10/12 bg-slate-300 text-zinc-800 box-border p-10">
            <section className='w-full flex justify-between mb-10'>
                <div>
                    <button className={'p-2 px-3 bg-slate-200 flex flex-row items-center'}><Icon name="filter" size={1} tailwindClassName="fill-zinc-800" /><span>Filter</span></button>
                </div>
                <div className="flex flex-row gap-2">
                    {
                        sp_viewType == 'window' ? 
                        <button className={'p-2 px-3 bg-indigo-700 flex flex-row items-center'}><Icon name="window_view" size={1} tailwindClassName="fill-slate-100" /></button> :
                        <button onClick={()=>{sp_viewTypeSet('window')}} className={'p-2 px-3 bg-slate-200 flex flex-row items-center'}><Icon name="window_view" size={1} tailwindClassName="fill-zinc-800" /></button>
                    }
                    {
                        sp_viewType == 'list' ?
                        <button className={'p-2 px-3 bg-indigo-700 flex flex-row items-center'}><Icon name="list_view" size={1} tailwindClassName="fill-slate-100" /></button> :
                        <button onClick={()=>{sp_viewTypeSet('list')}} className={'p-2 px-3 bg-slate-200 flex flex-row items-center'}><Icon name="list_view" size={1} tailwindClassName="fill-zinc-800" /></button>
                    }
                </div>
            </section>
            <section className='w-full grid gap-10 grid-cols-5 auto-rows-max'>
                <ItemContainer title="Lakers no.3 | Electricity" navigation='item/1' sizes={['sm','lg','xl','2xl', '3xl', '4xl']} colors={['red', 'blue', 'yellow', 'green', 'brown', 'black', 'white']} />
            </section>
        </main>
    </>
}