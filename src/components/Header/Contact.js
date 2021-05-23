import emailjs from 'emailjs-com';
import './style1.css'

import { GrContact, GrPhone, GrLocation } from "react-icons/gr";
import SocialConect from '../UI/SocialConect';





export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    e.preventDefault();

    emailjs.sendForm('service_uw71gr6', 'template_hia9did', e.target,
      'user_3AigEd3qhol072q1vSSn4')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <>
      <div className=" container align-center text-center flexCol" style={{ marginTop: "100px" }}>
        <h1>Contact Me</h1>
        <p className=" mtb-10"> Lorem ipsum, dolor ccusantium officia rerum fugiat odit.</p>
      </div>
      <div className=" container" style={{ marginTop: "50px" }}>
        <div className="contact-container">
          <div className="contact-info">
            <h4 className='mtb-10 text-center'>Contact Information</h4>
            <p className="mtb-10">Fill up the form then click send</p>
            <div className="icon-text mtb-10">
              <GrPhone className="fa mrl-10" />
              <span>+972548726198</span>
            </div>
            <div className="icon-text mtb-10">
              <GrContact className="fa mrl-10 mtb-10" />
              <span>alhadiragabaat@gmail.com</span>
            </div>
            <div className="icon-text mtb-10">
              <GrLocation className="fa mrl-10" />
              <span> Israel Rishon Lezion  </span>
            </div>
            <div className="social-media">
              <div className="icon-circle">
                <SocialConect className=" icon fa" />
              </div>
            </div>
          </div>
          <form className="container" onSubmit={sendEmail}>
            <div className="col">
              {/* <div className="form-group">
                <label > Name</label>
                <input type="text" placeholder="Name" name="name"/>

              </div> */}
              <div className="form-group">
                <label  > Subject</label>
                <input type="text" name="subject"/>

              </div>
              <div className="form-group mtb-10">
                <label > Email</label>
                <input type="email" name="email"/>

              </div>
              <div className="form-group mtb-10">
                <label className=" mtb-10"> Message</label>
                <textarea name="message" clo  rows="5"></textarea>
                <button type="submit" value="Send" className=" hireMeBtn"style={{width:"70%",marginLeft:"60px",
                padding:"16px",fontSize:"15px",marginTop:"20px"
              }} >Send</button>
              </div>
             
            </div>


          </form>
        </div>
      </div>

    </>
  );
}
