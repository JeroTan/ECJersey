import { createContext } from "react"
import App from '../App.jsx';

import lg_hawks from'../assets/team/1_Hawks.png';
import lg_celtics from'../assets/team/2_Celtics.png';
import lg_nets from'../assets/team/3_Nets.png';
import lg_hornets from'../assets/team/4_Hornets.png';
import lg_bulls from'../assets/team/5_Bulls.png';

import lg_cavaliers from'../assets/team/6_Cavaliers.png';
import lg_mavericks from'../assets/team/7_Mavericks.png';
import lg_nuggets from'../assets/team/8_Nuggets.png';
import lg_pistons from'../assets/team/9_Pistons.png';
import lg_warriors from'../assets/team/10_Warriors.png';

import lg_rockets from'../assets/team/11_Rockets.png';
import lg_pacers from'../assets/team/12_Pacers.png';
import lg_clippers from'../assets/team/13_Clippers.png';
import lg_lakers from'../assets/team/14_Lakers.png';
import lg_grizzlies from'../assets/team/15_Grizzlies.png';

import lg_heat from'../assets/team/16_Heat.png';
import lg_bucks from'../assets/team/17_Bucks.png';
import lg_timbrwolves from'../assets/team/18_Timberwolves.png';
import lg_pelicans from'../assets/team/19_Pelicans.png';
import lg_knicks from'../assets/team/20_Knicks.png';

import lg_thunder from'../assets/team/21_Thunder.png';
import lg_magic from'../assets/team/22_Magic.png';
import lg_76ers from'../assets/team/23_76ers.png';
import lg_suns from'../assets/team/24_Suns.png';
import lg_trailblazers from'../assets/team/25_Trail_Blazers.png';

import lg_kings from'../assets/team/26_Kings.png';
import lg_spurs from'../assets/team/27_Spurs.png';
import lg_raptors from'../assets/team/28_Raptors.png';
import lg_jazz from'../assets/team/29_Jazz.png';
import lg_wizards from'../assets/team/30_Wizards.png';

let data = {
    logo:{
        hawks:lg_hawks,
        celtics:lg_celtics,
        nets:lg_nets,
        hornets:lg_hornets,
        bulls:lg_bulls,
        cavaliers:lg_cavaliers,
        mavericks:lg_mavericks,
        nuggets:lg_nuggets,
        pistons:lg_pistons,
        warriors:lg_warriors,
        rockets:lg_rockets,
        pacers:lg_pacers,
        clippers:lg_clippers,
        lakers:lg_lakers,
        grizzlies:lg_grizzlies,
        heat:lg_heat,
        bucks:lg_bucks,
        timbrwolves:lg_timbrwolves,
        pelicans:lg_pelicans,
        knicks:lg_knicks,
        thunder:lg_thunder,
        magic:lg_magic,
        x76ers:lg_76ers,
        suns:lg_suns,
        trailblazers:lg_trailblazers,
        kings:lg_kings,
        spurs:lg_spurs,
        raptors:lg_raptors,
        jazz:lg_jazz,
        wizards:lg_wizards
    }
}


export const Gbl_teamLogo = createContext(data);

export default ()=><>
    <Gbl_teamLogo.Provider value={data}>
        <App />
    </Gbl_teamLogo.Provider>
</>
