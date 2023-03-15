import Swal from "sweetalert2";
import './Sweetalert.css';

export const pop_info = (userIcon='warning', userTitle='')=>{
    let customClass = {
        
    }
    Swal.fire({
        //title: "It doesn't work",
        customClass: 'bg-zinc-700 text-slate-100',
        html: '<p class="font-sans">'+userTitle+'</p>',
        icon: userIcon,
        confirmButtonText: 'Okay',
        
    }).then((result)=>{
        if(false && result.isConfirmed){
            
        }else if(false && result.dismiss){
           
        }
    });
}

export const pop_process = (userIcon='info', userTitle='')=>{
    Swal.fire({
        //title: "It doesn't work",
        customClass: 'bg-zinc-700 text-slate-100',
        html: '<p class="font-sans">'+userTitle+'</p>',
        icon: userIcon,
        showConfirmButton: false,
        showCancelButton: false,
        allowOutsideClick: false,
        
    }).then((result)=>{
        if(false && result.isConfirmed){
            
        }else if(false && result.dismiss){
           
        }
    });
}

export const pop_close = ()=>{
    Swal.close();
}