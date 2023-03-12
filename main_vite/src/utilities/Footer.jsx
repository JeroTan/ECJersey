/// Imports Here
import Icon from './Icon.jsx';
/// Assets Here
import img_genessys_logo from '../assets/images/genesys_logo.png';

export default ()=>{

    //// Contents ////
    let rendering = <>

    <footer className="relative py-16 flex items-center justify-center bg-zinc-800 box-border z-40 text-slate-100 shrink-0">

        <div className="w-[62rem] flex flex-wrap mx-10">

            <section  className="md:w-8/12 w-full flex flex-wrap mb-5">
                <div className="lg:w-3/12 md:w-4/12 w-full flex md:justify-start justify-center box-border mb-2">
                    <div className="w-36">
                        <div className="w-full aspect-square">
                            <img className="relative w-full h-full object-cover object-center" src={img_genessys_logo} />
                        </div>
                    </div>
                </div>
                <div className="lg:w-9/12 md:w-8/12 w-full box-border md:px-3 px-0">
                    <h4 className="text-2xl pb-2 text-indigo-500 tracking-wide">About GENESYS</h4>
                    <p className="text-sm break-normal font-extralight font-serif">
                        This project was made by the team GENESYS. They are a group of researchers, developers and designers, who have a great interest in the digital revolution of leading technology systems, bringing efficient design and creativity to its crafts.
                    </p>
                    <a className="text-sm break-normal font-extralight underline underline-offset-2 decoration-1" href="https://www.facebook.com/profile.php?id=100087153815957&mibextid=ZbWKwL" target={'_blank'}>Learn more</a>
                </div>
            </section>

            <section className="md:w-4/12 w-full mb-12 md:pl-5">
                <div className="w-full">
                    <h4 className="font-light pb-2">Follow our page</h4>
                </div>
                <div className="flex flex-wrap gap-5">
                    <div className="cursor-pointer" onClick={()=>window.open('https://www.facebook.com/profile.php?id=100087153815957&mibextid=ZbWKwL', '_blank')}>
                        <Icon name='facebook' size='1.5' tailwindClass='fill-white'/>
                    </div>
                    <div className="cursor-pointer" onClick={()=>window.open('https://www.instagram.com', '_blank')}>
                    <Icon name='instagram' size='1.5' tailwindClass='fill-white'/>
                    </div>
                    <div className="cursor-pointer" onClick={()=>window.open('https://www.youtube.com/@genesys_designs', '_blank')}>
                        <Icon name='youtube' size='1.5' tailwindClass='fill-white'/>
                    </div>
                    <div className="cursor-pointer" onClick={()=>window.open('https://www.twitter.com', '_blank')}>
                        <Icon name='twitter' size='1.5' tailwindClass='fill-white'/>
                    </div>
                </div>
            </section>

            <section className="w-full">
                <small className="text-sm font-thin">&copy; 2023 by GENESYS. Made with React and Vite.</small>
            </section>

        </div>

    </footer>
    </>
    //// Contents ////
    return rendering;
}