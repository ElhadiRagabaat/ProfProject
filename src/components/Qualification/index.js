import React from 'react'
import SmallHeading from '../UI/SmallHeading'
import MedumHeading from '../UI/MediumHeading'
import Tile from "../UI/Tile"
import Button from '../Button'
import me from "../../asests/qu.png"
import './style.css'
import Card from '../UI/Card'

export default function Qualification() {
    return (
        <div className=" container" style={{ padding: "50px 0" }}>

            <div style={{ marginBottom: "10px" }}>
                <SmallHeading text="Education" />
                <MedumHeading text="Qualification" />
            </div>

            <div className=" flexRow align-center justify-sb flexCol mediaQuery" style={{ padding: "30px" }}>
                <div data-aos="fade-up-right" >
                    <img src={me} alt="" style={{ objectFit: "cover" }} />
                </div>

                <div>

                    <Tile
                        title="HackerU"
                        mediumeTitle="Applications ."
                        desc="  Development IOS & Android  app"
                    />
                    <Tile
                        title="ARDC"
                        mediumeTitle="presentense ."
                        desc=" fullstack Course "
                    />
                    <Tile
                        title="SIC"
                        mediumeTitle="CP basic ."
                        desc=" Computer Skills"
                    />

                </div>

            </div>
            <Card data-aos="fade-up" className=" m-auto" style={{ padding: "30px", marginTop: "100px" }}>
                <p className=" text-center font-12 mtb-10">Have  any project in mind <span className=" primaryColor">Say Hello At</span></p>
                <p className="text-center font-25 mtb-10" >+972548726198</p>
                <p className="text-center font-25 mtb-10  bold-500 fo">alhadiragabaat@gmail.com</p>

                <p className="text-center font-14 mtb-10  bold-300 fo align-center gray" 
                style={{marginTop:"50px"}}
                > Copyright &copy; Elhadi  2021</p>
            </Card>
        </div>


    )
}
