import React from "react"
import { useEffect,useState } from "react"
import Carousel from 'react-bootstrap/Carousel'
import skyline from '../images/skyline.jpg'
import workers from '../images/workers.jpg'
import buildings from '../images/buildings.jpg'

export default function SuoloCarousel(){

    return <div id='firstSection'>
        <Carousel id='parent'>
            <Carousel.Item id='parent' >
                <img
                className="d-block w-100"
                src={skyline}
                alt="First slide"
                />
                <Carousel.Caption className='carouselCaption' id='child'>
                    <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={workers}
                alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={buildings}
                alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
}