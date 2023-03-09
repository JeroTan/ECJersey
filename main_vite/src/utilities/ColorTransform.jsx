import '../index.css';

export const ColorTransform = (color="")=>{
    switch(color){
        case 'red':
            return 'red-500';
        break;
        case 'yellow':
            return 'yellow-500';
        break;
        case 'blue':
            return 'blue-500';
        break;
        case 'orange':
            return 'orange-500';
        break;
        case 'green':
            return 'emerald-500';
        break;
        case 'violet':
            return 'purple-500';
        break;
        case 'brown':
            return 'amber-800';
        break;
        case 'pink':
            return 'pink-500';
        break;
        case 'black':
            return 'gray-900';
        break;
        case 'white':
            return 'slate-50';
        break;
        case 'gray':
            return 'slate-400';
        break;
    }
}

//red, yellow, blue, orange, green, violet, brown, pink, black, white