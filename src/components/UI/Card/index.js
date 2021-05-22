import React from 'react'
import "./style.css"

export default function Card({ className = null ,children,style, ...res}) {
    
    const _class = className ? ` card ${className}` : `card`

    return (
        <div className={_class} style={style}{...res}>
            {children}
            
        </div>
    )
}
