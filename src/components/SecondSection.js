import React from 'react' 
import TextSlidingUpAnimation from './TextSlidingUpAnimation';
import TextSlidingLeftAnimation from './TextSlidingLeftAnimation';
import placeholderImg from '../animations/aNiceSkyline.jpg';
import '../stylesheets/SecondSection.css'

export default function SecondSection(){
        
        return <div id='secondSection'>
            <img id='backgroundImage' src={placeholderImg} alt='' />
            <div id='secondSecLeftH'>
                <TextSlidingUpAnimation /> 
            </div>
            <div id='secondSecRightH'>
                <TextSlidingLeftAnimation />
            </div>

        </div>
    
    
}