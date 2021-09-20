import React, { useEffect } from "react"; 
import '../stylesheets/TextSlidingUpAnimation.css'

export default function TextSlidingUpAnimation(){

    return <div className="animated-title">
        <div className="text-top">
            <div className='text-top-inner'>
                <span>LET US</span>
                <span>MAKE YOU</span>
            </div>
        </div>
        <hr className='borderDivLine'/>
        <div className="text-bottom">
            <div className='text-bottom-inner'>RICH</div>
        </div>
    </div>
}