import React from 'react' 
import TextSlidingUpAnimation from './TextSlidingUpAnimation';
import TextSlidingLeftAnimation from './TextSlidingLeftAnimation';
import planImg from '../images/plan.jpg';
import constImg from '../images/construccion.jpg'
import salesImg from '../images/sales.jpg'
import '../stylesheets/SecondSection.css'

export default function SecondSection(){
        
        return <div className='secondSection'>
            <div className='secondSectionEntry'>
                <TextSlidingUpAnimation type='Planeacion'/> 
                <div className='entryImgHolder'>
                    <img src={planImg} alt='' />
                </div>
            </div>
            <div className='secondSectionEntry mirrored'>
                <TextSlidingUpAnimation type='Construccion'/> 
                <div className='entryImgHolder'>
                    <img src={constImg} alt='' />
                </div>
            </div>
            <div className='secondSectionEntry'>
                <TextSlidingUpAnimation type='Comercializacion'/> 
                <div className='entryImgHolder'>
                    <img src={salesImg} alt='' />
                </div>
            </div>
        </div>
    
    
}