import React, { useEffect, useState } from "react"; 
import PropTypes from 'prop-types';
import '../stylesheets/ServiceCard.css'
import {BsChevronRight} from 'react-icons/bs'
import phasesData from './phasesData.json'

export default function ServiceCard(props){

    const optionsArr=phasesData[props.type]["optionsArr"];
    return <div className={props.type==="Construccion"? "slidingUpHolder mirroredSlidingUpHolder":"slidingUpHolder"}>
        <div className="text-top">
            <div className='text-top-inner'>
                <span className={props.type==="Comercializacion" ? "reduced-font-size":""}>{props.type}</span>
            </div>
        </div>
        <hr className='borderDivLine'/>
        <div className="text-bottom">
            <div className='text-bottom-inner'>
                <div className='entryDescriptionBullets'>
                    {optionsArr.map((bullet)=>{
                        return <li key={bullet}><BsChevronRight className='chevronRight'/>{bullet}</li>
                    })}
                </div>
            </div>
        </div>
    </div>

}