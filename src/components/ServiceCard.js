import React, { useEffect, useState } from "react"; 
import PropTypes from 'prop-types';
import '../stylesheets/ServiceCard.css'
import {BsChevronRight} from 'react-icons/bs'
import phasesData from './phasesData.json'

function OptionsList(props){
    return props.optionsArr.map((entry,i)=>{
        return <li onMouseOver={()=>{props.changeBodyText(i)}}>
            <div className='normalLi'>
                <BsChevronRight className='chevronRight'/>
                {entry}
            </div>
            <div className='hoveredLi'>
                <BsChevronRight className='chevronRight'/>
                {entry}
            </div>
        </li>
    })
}
OptionsList.propTypes={
    changeBodyText:PropTypes.func,
    optionsArr:PropTypes.array
}

export default function ServiceCard(props){
    const [textBody,setTextBody]=useState("");
    function changeBodyText(i){
        var textBody=phasesData[props.type]["bodyTextArr"][i];
        setTextBody(textBody);
    }

    if (props.type==="Planeacion"){
        const optionsArr=phasesData.Planeacion.optionsArr;
        return <div className="slidingUpHolder">
        <div className="text-top">
            <div className='text-top-inner'>
                <span>PLANEACION</span>
            </div>
        </div>
        <hr className='borderDivLine'/>
        <div className="text-bottom">
            <div className='text-bottom-inner'>
                <div className='entryDescription'>
                {textBody}
                </div>
                <ul className="cardList">
                    <OptionsList optionsArr={optionsArr} changeBodyText={changeBodyText} />
                </ul>
            </div>
        </div>
    </div>
    }
    if (props.type==="Construccion"){
        const optionsArr=phasesData.Construccion.optionsArr;
        return <div className={"slidingUpHolder mirroredSlidingUpHolder"}>
        <div className="text-top">
            <div className='text-top-inner'>
                <span>CONSTRUCCION</span>
            </div>
        </div>
        <hr className='borderDivLine'/>
        <div className="text-bottom">
            <div className='text-bottom-inner'>
                {textBody}
            </div>
            <ul className="cardList">
                <OptionsList optionsArr={optionsArr} changeBodyText={changeBodyText} />
            </ul>
        </div>
    </div>
    }
    if (props.type==="Comercializacion"){
        return <div className="slidingUpHolder">
        <div className="text-top">
            <div className='text-top-inner reduced-font-size'>
                <span>COMERCIALIZACION</span>
            </div>
        </div>
        <hr className='borderDivLine'/>
        <div className="text-bottom">
            <div className='text-bottom-inner'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>
    </div>
    }
}