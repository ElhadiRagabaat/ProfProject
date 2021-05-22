import React from 'react'
import SmallHeading from '../UI/SmallHeading'
import MedumHeading from '../UI/MediumHeading'
import Card from '../UI/Card'
import Skills from '../UI/Skills'
import {colors} from '../../style'
import './style.css'





function Specializing(props) {
    const skills = [
        {
            skillName:'HTML/CSS',
            desc:' experience in HTML/CSS',
            valu:70,
            textColor:colors.primaryColor,
            pathColor:"#e1701a"
        },
        {
            skillName:'Java',
            desc:' experience in Java',
            valu:60,
            textColor:colors.primaryColor,
            pathColor:"#f9f871"
        },
        {
            skillName:'JavaScript',
            desc:' experience in JavaScript',
            valu:60,
            textColor:colors.primaryColor,
            pathColor:"#f21170"
        },
        {
            skillName:'React Js',
            desc:' experience in Raecat Js',
            valu:80,
            textColor:colors.primaryColor,
            pathColor:"#00af91"
        },
        {
            skillName:'Swift',
            desc:' experience in Swift',
            valu:50,
            textColor:colors.primaryColor,
            pathColor:"#845ec2"
        },
        {
            skillName:'Wordpress',
            desc:' experience in Wordpress',
            valu:55,
            textColor:colors.primaryColor,
            pathColor:"#233e8b"
        },
        {
            skillName:'Bootstrap',
            desc:' experience in Bootstrap',
            valu:70,
            textColor:colors.primaryColor,
            pathColor:"#845ec2"
        },
        {
            skillName:'Python',
            desc:' experience in Bootstrap',
            valu:40,
            textColor:colors.primaryColor,
            pathColor:"#845ec2"
        },
        {
            skillName:'Node Js',
            desc:' experience in Node js',
            valu:60,
            textColor:colors.primaryColor,
            pathColor:"#21094e"
        },
    ]
    return (
        <div className="container ">
            <Card style={{ padding: "50px" }}>
                <SmallHeading text="What I do" />
                <MedumHeading text="Specializing in"/>
                <div data-aos="fade-up" className=" flexRow wrap justify-sb  align-center" style={{padding:'30px'}}>

                    {
                        skills.map((skill,index)=> <Skills 
                        key={index}
                        skillName={skill.skillName}
                        desc ={skill.desc}
                        value={skill.valu}
                        textColor={colors.primaryColor}
                        pathColor={skill.pathColor}
                        
                        />)
                    }
                   
                </div>
            </Card>


        </div>
    )
}

export default Specializing
