import React from 'react'
import me from '../../asests/logo5.png'
import './style.css'
import { Link} from "react-router-dom"

export default function Header() {
    return (
        <div className="container " style={{width:"90%"}}>
            <div className="flexRow justify-sb align-center flexCol" >

                <div className='logoImge flexRow'>
            
                    <img src={me} alt=""  style={{marginRight:"-50px"}}/>
                <span className=" font-30 bold-700 " style={{fontFamily:"initial",color:"goldenrod"}}>ELHADi</span>
                   
                
                </div>
                
                <div  className="headerMenus font-25 bold-700" >
                    <div>
                    <nav >
                        <Link to="/">Home</Link>
                        < Link to="/gallery">Gallery</Link>
                        < Link to="/contact">Contact</Link>
                    </nav>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

