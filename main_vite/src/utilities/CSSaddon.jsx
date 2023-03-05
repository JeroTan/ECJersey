
export default ()=>{
    let cssers = [
        'hidden',
        'bg-red-500',
        'bg-yellow-500',
        'bg-blue-500',
        'bg-orange-500',
        'bg-emerald-500',
        'bg-amber-800',
        'bg-pink-500',
        'bg-gray-500',
        'bg-slate-100',
        'bg-slate-300',
        'text-slate-100',
        'fill-slate-100'
    ]

    return <>
        <div className={cssers.map(item=>item+' ')}></div>
    </>
}