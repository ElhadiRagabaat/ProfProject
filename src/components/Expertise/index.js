import React from 'react'
import SmallHeading from '../UI/SmallHeading'
import MedumHeading from '../UI/MediumHeading'
import Card from '../UI/Card'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { colors } from '../../style'
import 'react-circular-progressbar/dist/styles.css';
import me from '../../asests/me13.png'
import './style.css'
import SocialConect from '../UI/SocialConect'

function Expertise({ text }) {
    const percentage = 70;
    return (
        <div className=" container" style={{marginTop:"10px", padding:"50px 0"}}>
            <div  data-aos="fade-right" className="rightImgMeContainer">
                <img src={me} alt="" />
                <SocialConect style={{ position:" absolute",bottom:"-40px"}}/>
            </div>
            <div >
                <SmallHeading text="Expertise" />
                <MedumHeading text="Special Skills" />
            </div>
            <Card  style={{ padding: "10px", width: "310px" ,margin:'80px auto',boxShadow:"#6dba6d 0px 0px 10px 0px",
        position:" relative", zeIndex:1}}
        data-aos="flip-up"
        >
                <div className=" flexRow align-center">

                    <div style={{ width: "80px", height: "80px" }}>
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                                textColor: colors.primaryColor,
                                pathColor: colors.primaryColor,
                                trailColor: "red"
                            })}
                        />
                    </div>
                    <h2 className=" textColor mrl-10">DEVELOPMENT</h2>

                </div>
                <p className=" grey mtb-10 font-12"> JavaScript is one of the greatest programming languages .</p>
            </Card>
            <div>
             
            
            </div>

        </div>
    )
}

export default Expertise
