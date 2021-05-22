import React from 'react'
import  { FaFacebook,FaInstagram,FaLinkedin,FaGithub} from 'react-icons/fa'

import './style.css'

export default function SocialConect(props) {
    return (
        <div className="socialConect" style={props.style}>
            <span  className=" mrl-10" style={{ background: "ffffff",color:" grey"}}>Follow Me :</span>
            <a className="socialLink " href="https://www.facebook.com/" target="_blank">
                <FaFacebook/>
            </a>
            
            <a className="socialLink mrl-10" href="https://www.linkedin.com/feed/"  target="_blank">
                <FaLinkedin />
            </a>
            <a className="socialLink mrl-10" href="https://www.instagram.com/"  target="_blank">
                <FaInstagram />
            </a>
            <a  className=" mrl-10"href="#">
                <FaGithub/>
            </a>
        </div>
    )
}
