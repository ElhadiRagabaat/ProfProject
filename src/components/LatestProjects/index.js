import React from 'react'
import Card from '../UI/Card'
import SmallHeading from '../UI/SmallHeading'
import MediumHeading from '../UI/MediumHeading'
// import Button from '../Button'
import me from "../../asests/project.png"
import './style.css'
import { useHistory } from 'react-router-dom'

export default function LatestProjects(props) {
    
   const history = useHistory()

    const handelLastProjects = ()=>{

        history.push('/tile')

    }
    return (
        <div  data-aos="zoom-in-up" className=" container" style={{marginTop:"20px",marginBottom:"5px"}}>
            <Card className=" flexRow align-center justify-sb flexCol"> 
                <div className="projectPf" >
                <SmallHeading text=" Protfolios"/>
                <MediumHeading text=" Lasts Projects" style={{ textTransform:" uppercase"}}/>
                <div className=" mtb-10 flexRow" style={{justifyContent:"center"}}>
                {/* <Button lable="Protfolios"/> */}
                <button className="hireMeBtn" onClick={handelLastProjects}>Protfolios</button>
                </div>
               
                </div>
                <div className="projectImgContainer">
                    <img src={me} alt="" style={{width:"400px",height:"350px"}}/>
                </div>
            </Card>
            
        </div>
    )
}
