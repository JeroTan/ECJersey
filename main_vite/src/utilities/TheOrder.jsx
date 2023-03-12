import Routing from './Routing';
import CSSaddon from './CSSaddon';
import Provider from './Provider';

export default ()=>{
    return <>
        <main className='relative w-full h-full flex flex-col min-h-screen'>
        <Provider>
            <CSSaddon />
            <Routing />
        </Provider>
        </main>
        
    </>
}