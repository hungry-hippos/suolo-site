import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import TextFillAnimation from "./TextFillAnimation";

export default function FirstSectionCarousel(){

    return<Carousel fade indicators={false} controls={false} pause={false} id='firstSectionCarousel'>
        <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={'./images/regular/city.jpg'} alt="First slide" />
            <Carousel.Caption className='carouselCaption'>
                <TextFillAnimation text='DESARROLLA' />
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={'./images/regular/crane.jpg'} alt="Second slide"/>

            <Carousel.Caption className='carouselCaption'>
                <TextFillAnimation text='CONSTRUYE' />
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
            <img className="d-block w-100" src={'./images/regular/sky.jpg'} alt="Third slide" />

            <Carousel.Caption className='carouselCaption'>
                <TextFillAnimation text='PERSIGUE' />
            </Carousel.Caption>
        </Carousel.Item>    
    </Carousel>

}