import Routing from './Routing';
import CSSaddon from './CSSaddon';
import Provider from './Provider';

export default ()=>{
    return <>
        <Provider>
            <CSSaddon />
            <Routing />
        </Provider>
    </>
}