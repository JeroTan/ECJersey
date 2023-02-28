import {useNavigate} from 'react-router-dom';

/// utilities
import { ColorTransform } from '../../utilities/ColorTransform';

export default ()=>{
    // - 
    const rt_navigate = useNavigate();

    const ItemContainer = ({title='', navigation='', sizes=[], colors=[]})=>{
        let stopSize = false;
        let stopColor = false;

        return <>
        <div className="w-full aspect-[30/35] bg-slate-200 box-border drop-shadow-xl p-3 cursor-pointer">
            {/*Image*/}
            <div className="w-full aspect-[10/8] overflow-hidden">
                <div class="w-full h-full">
                    <img className="relative w-full h-full object-center object-contain" src="https://cdn.shopify.com/s/files/1/0414/8917/0599/products/AA7099-742_A_2400x.png?v=1593132488"/>
                </div>
            </div>
            {/*Content*/}
            <div class="mt-3">
                <h4 class="font-bold text-indigo-500 pb-2">{title}</h4>
                <div class="flex justify-between h-full relative">
                    <div class="h-full">
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
                        <div class="flex gap-1">
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
                    <div class="absolute bottom-0 right-0">
                        <label className="font-bold font-serif text-sm text-emerald-600">&#8369; 300</label>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    }

    return <>
        <main className="w-10/12 bg-slate-300 text-zinc-800 grid gap-10 grid-cols-5 auto-rows-max box-border p-10">
            <ItemContainer title="Lakers no.3 | Electricity" navigation='item/1' sizes={['sm','lg','xl','2xl', '3xl', '4xl']} colors={['red', 'blue', 'yellow', 'green', 'brown', 'black', 'white']} />
        </main>
    </>
}