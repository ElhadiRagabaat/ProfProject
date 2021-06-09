import React from 'react'
import  { FaFacebook,FaInstagram,FaLinkedin,FaGithub} from 'react-icons/fa'

import './style.css'

export default function SocialConect(props) {
    return (
        <div className="socialConect" style={props.style}>
            <span  className=" mrl-10" style={{ background: "ffffff",color:" grey"}}>Follow Me :</span>
            <a className="socialLink " href="https://www.facebook.com/alhadi.ahmed.50" target="_blank">
                <FaFacebook/>
            </a>
            
            <a className="socialLink mrl-10" href="https://www.linkedin.com/in/elhadi-ragabaat-14831a194/"  target="_blank">
                <FaLinkedin />
            </a>
            <a className="socialLink mrl-10" href="https://www.instagram.com/"  target="_blank">
                <FaInstagram />
            </a>
            <a  className=" mrl-10"href="https://github.com/ElhadiRagabaat?tab=repositories">
                <FaGithub/>
            </a>
        </div>
    )
}
