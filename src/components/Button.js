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
<div className="container text-center align-center">
            <h1 className="mtb-10">Lastest Projects</h1>
            <a href="https://alhdiapp.herokuapp.com/" target="_blank">
                
                CRUD Node Js project</a>

        </div>
        
    )
}
