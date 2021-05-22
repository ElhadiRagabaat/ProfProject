import React from 'react'
import Slider from '../Slider'
import { sliderData } from '../Slider/SliderData'

import './galley.css'

function Gallery() {
    return (
        <div className="container align-center text-center" style={{marginTop:"50px"}}>
            <Slider slides={sliderData}/>
           
            
            
        </div>
    )
}

export default Gallery
