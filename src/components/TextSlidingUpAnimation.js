import React, { useEffect } from "react"; 
import '../stylesheets/TextSlidingUpAnimation.css'

export default function TextSlidingUpAnimation(props){

    if (props.type==="Planeacion"){
        return <div className="slidingUpHolder">
        <div className="text-top">
            <div className='text-top-inner'>
                <span>PLANEACION</span>
            </div>
        </div>
        <hr className='borderDivLine'/>
        <div className="text-bottom">
            <div className='text-bottom-inner'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>
    </div>
    }
    if (props.type==="Construccion"){
        return <div className={"slidingUpHolder mirroredSlidingUpHolder"}>
        <div className="text-top">
            <div className='text-top-inner'>
                <span>CONSTRUCCION</span>
            </div>
        </div>
        <hr className='borderDivLine'/>
        <div className="text-bottom">
            <div className='text-bottom-inner'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>
    </div>
    }
    if (props.type==="Comercializacion"){
        return <div className="slidingUpHolder">
        <div className="text-top">
            <div className='text-top-inner'>
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