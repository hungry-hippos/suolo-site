import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import TextFillAnimation from "./TextFillAnimation"
import skyline from '../images/skyline.jpg'
import workers from '../images/workers.jpg'
import buildings from '../images/buildings.jpg'

export default function FirstSectionCarousel(){

    return <div>
        <Carousel fade indicators={false} controls={false}>
            <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={skyline} alt="First slide" />
                <Carousel.Caption className='carouselCaption'>
                    <TextFillAnimation text='DESARROLLA' />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={workers} alt="Second slide"/>

                <Carousel.Caption className='carouselCaption'>
                    <TextFillAnimation text='CONSTRUYE' />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={buildings} alt="Third slide" />

                <Carousel.Caption className='carouselCaption'>
                    <TextFillAnimation text='PERSIGUE' />
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
}