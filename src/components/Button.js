import React from 'react'
import {colors} from "../style"

export default function Button(props) {
    return (
    // <a href="#" style={{
    //     boxSizing:'border-box',
    //     padding:'10px 20px',
    //     background: props.inverse? ' transparent': colors.primaryColor,
    //     color: props.inverse ? colors.primaryColor:"#fff",
    //     display:" inline-block",
    //     borderRadius:'20px',
    //     boxShadow: props.inverse ? 'none' :"#6dba6d 0px 0px 10px 0px",
    //     border:'1px solid',
    //     borderColor: props.inverse ?colors.primaryColor:'transparent',
    //     fontSize:12,
    //     letterSpacing:'1px'

    // }}>{props.lable}</a>
<div className="container text-center align-center mtb-10">
            <h1 className="mtb-10" style={{marginTop:"70px"}}>Lasts Projects</h1>
            <a href="https://alhdiapp.herokuapp.com/" target="_blank" style={{borderBottom:"2px solid grey"}}>
                
                <span className="mrl-10  primaryColor mtb-10"> CRUD</span> Node Js project</a>
<div className="mtb-10">
                <a href="https://photografic.netlify.app/" target="_blank" style={{borderBottom:"2px solid grey"}}>
                
                <span className="mrl-10  primaryColor mtb-10">photografic. </span> Firebase</a>
                </div>
        </div>
        
    )
}
