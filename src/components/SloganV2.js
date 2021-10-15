import React from "react";
import SuoloLogoTowers from '../images/suoloLogoClear.png'
import SuoloLogo from './SuoloLogoSVG'
import '../stylesheets/SloganV2.css' 

export default function SloganV2(){
    return <div className='sloganHolder'>
        <div className='imageHolder'>
            <SuoloLogo />
        </div>
        
        <div className='sloganText'>
            <div className='sloganTextPadding'>
                <span className='topSloganLine'>UN SUOLO GRUPO</span>
                <span className='midSloganLine'>UN SUOLO OBJETIVO</span>
                <span className='btmSloganLine'>TUS SUENOS</span>
            </div>
        </div>
    </div>
}