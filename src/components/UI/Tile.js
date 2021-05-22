import React from 'react'

export default function Tile({title, mediumeTitle,desc}) {
    return (
        <div  data-aos="zoom-in-up" className="mtb-10" style={{boxShadow:"#6dba6d 0px 0px 10px 0px", padding:"10px",textAlign:"center", width:"200px"}}>
            <h1 className=" mtb-10 primaryColor font-12 bold-500 mtb-10 uppercase">{title}</h1>
            <p className=" textColor font-12 bold-600 mtb-10 uppercase">{mediumeTitle}</p>
            <p className=" grey font-12 mtb-10">{desc}</p>
        </div>
        
    )
}
