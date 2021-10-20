import React from 'react' 
import ServiceCard from './ServiceCard';
import planImg from '../images/plan.jpg';
import constImg from '../images/construccion.jpg'
import salesImg from '../images/sales.jpg'
import '../stylesheets/SecondSection.css'

export default function SecondSection(){
        
        return <div className='secondSection'>
            <div className='secondSectionEntry entryWithBackgroundSquare'>
                <ServiceCard type='Planeacion'/>
                <div className='whiteBackgroundSquare topWhiteSquare'></div> 
                <div className='entryImgHolder'>
                    <img src={planImg} alt='' />
                </div>
            </div>
            <div className='secondSectionEntry mirrored'>
                <ServiceCard type='Construccion'/> 
                <div className='entryImgHolder'>
                    <img src={constImg} alt='' />
                </div>
            </div>
            <div className='secondSectionEntry entryWithBackgroundSquare'>
                <ServiceCard type='Comercializacion'/> 
                <div className='whiteBackgroundSquare'></div> 
                <div className='entryImgHolder'>
                    <img src={salesImg} alt='' />
                </div>
            </div>
        </div>
    
    
}