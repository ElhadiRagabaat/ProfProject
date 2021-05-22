import React from 'react'
import { sliderData } from './SliderData'
import { useState } from 'react'
import './style.css'
import { MdHighlightOff } from "react-icons/md";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaDivide } from 'react-icons/fa'

export default function Slider({ slides }) {
    const [model,setModel] = useState(false)
    const [tempImgScr,setTempImgScr] = useState('')
    
    const getImg =(image)=>{

        setTempImgScr(image)
        setModel(true)
    }
    // const [current, setCurrent] = useState(0)
    // const length = slides.length
    // const nextLine = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1)
    // }
    // const prevLine = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1)
    // }
    // if (!Array.isArray(slides) || slides.length <= 0) {
    //     return null
    // }
    return (
        <>
       <div className={model ? "model  open" : "model"}>
           <img src={tempImgScr} alt=""/>
           <MdHighlightOff onClick={() => setModel(false)}/>

       </div>
        <div className=' container'>
            <h2 className=" font-20 bold-700 mtb-10" >Image Gallery</h2>
            <div className="gallery">
                {sliderData.map((item, index) => {
                    return (
                        <div className="pics" key={index} onClick={() => getImg(item.image)}>

                            <img src={item.image} alt="" style={{ width:"100%",margin:"8px"}}/>
                        </div>
                    )

                })}

            </div>
            {/* < section className="slider">

                <FaArrowAltCircleLeft className="left-arrow" onClick={prevLine} />
                <FaArrowAltCircleRight className="right-arrow" onClick={nextLine} />
                {sliderData.map((slide, index) => {

                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}
                        >
                            {index === current && (<img src={slide.image} alt="image" className="image" />)}

                        </div>
                    )


                })}
            </section> */}
        </div>

        </>
    )

}
