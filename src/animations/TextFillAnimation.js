import React from 'react'
import PropTypes from 'prop-types'
import './TextFillAnimation.css'

export default function TextFillAnimation(props){
    return <div className='textFillDiv' data-text={props.text}>{props.text}</div>
}

TextFillAnimation.propTypes={
    text:PropTypes.string
}