
import "../style.css"
import me from "../../asests/me1.png"
import me2 from "../../asests/me5.jpg"
import Button from "../Button"
import { useHistory } from "react-router-dom"
import jsPdf from 'jspdf'

const Home = (props) => {
const history = useHistory()

const handelDownload=()=>{
    let doc = new jsPdf('landscape','px','a4','false')
    doc.addImage(me2,'PNG',64,20,400,400)
    doc.addPage()
    doc.setFont('Helvertica','bold')
    doc.text(60,60,"Name : ")
    doc.text(60,80,"Email : ")
    doc.text(60,100,"Phone : ")
    doc.setFont('Helvertica','Normal')
    doc.text(100,60,"Elhadi Ragabaat")
    doc.text(100,80,"alhadiragabaat@gmail.com")
    doc.text(100,100,"+972548726198")


    doc.save('CV.pdf')

}
    const handelHireClick=()=>{

       history.push('/contact')
    }

    return (
        <div className=" container" style={{marginTop:"70px"}}>
            <div className=" flexRow justify-sb align-center flexCol">
            <div data-aos="fade-right">
                <p className=" uppercase bold-500 textColor ls-1 mtb-10">
                    <span className="primaryColor">Hello,</span>  I'm Elhadi Ragabaat</p>
                <h1 className="textColor ls-1 mtb-10">Software Developer</h1>
                <p className="font-12 gray mtb-10">FullStack Developer using js.</p>

                <div className=' flexRow' style={{margin:"10px 0px"}}>

                <div>
                {/* <Button lable="Hire Me" onClick={handelHireClick}/> */}
                <button className=" hireMeBtn" onClick={handelHireClick}> Hire me</button>
                </div>
               <div className=" mrl-10">
               {/* <Button lable="Dowonload CV" inverse={true}/> */}
               <button className=" downloadCv" onClick={handelDownload}>Download CV </button>
               </div>
               
                </div>
               
               
            </div>

            <div  data-aos="fade-left">
                <div className="meRightImgContainer">
                <img src={me}alt="" className=" mtb-10"/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Home;