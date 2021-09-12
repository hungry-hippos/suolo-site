import React, { useEffect } from 'react'
import '../stylesheets/SuoloAnimationWelcome.css'

export default function SuoloAnimationWelcome(){
    useEffect(()=>{
        console.log('LOADED')
    })
    return <div id="app">
    <div className="title">
      <div className="title-inner">
        <div className="cafe">
          <div className="cafe-inner">Keyframé</div>
        </div>
        <div className="mozart">
          <div className="mozart-inner">Artistes</div>
        </div>
      </div>
    </div>
  
    <div className="image">
      <img src='https://images.unsplash.com/photo-1616362355051-6a9f8c434fff?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzE0MTYzNQ&ixlib=rb-1.2.1&q=80&w=800&h=600' alt='' />
    </div>
  </div>
  
  
}