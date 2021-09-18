import React, { useEffect } from 'react'
import placeholderImg from './aNiceSkyline.jpg'
import './TextImageAnimation1.css'

export default function TextImageAnimation1(){

    return <div id="app">
    <div className="title">
      <div className="title-inner">
        <div className="cafe">
          <div className="cafe-inner">HELLO</div>
        </div>
        <div className="mozart">
          <div className="mozart-inner">WORLD</div>
        </div>
      </div>
    </div>
  
    <div className="image">
      <img src={placeholderImg} alt='' />
    </div>
  </div>
  
  
}