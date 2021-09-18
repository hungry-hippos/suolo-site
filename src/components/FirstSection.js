import React, { useEffect } from 'react'
import FirstSectionCarousel from './FirstSectionCarousel'
import '../stylesheets/FirstSection.css'

export default function FirstSection(){
    useEffect(()=>{
        console.log('LOADED')
    })
    return <div id="app">
    <div className="title">
      <div className="title-inner">
        <div className="cafe">
          <div className="cafe-inner">SOMOS</div>
        </div>
        <div className="mozart">
          <div className="mozart-inner">SUOLO</div>
        </div>
      </div>
    </div>
  
    <div className="carouselHolder">
      <FirstSectionCarousel />
    </div>
  </div>
  
  
}