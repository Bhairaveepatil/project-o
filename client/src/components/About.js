import React, {Fragment, useState} from 'react';
import '../css/About.css'
import Contact from './Contact';
import Signup from './Signup';


const About = () => {
    const [toggle, settoggle] = useState(1)
    const toggleState = (index) => {
        settoggle(index)
    }
  return (
    <>
    
        <section className="about" >
            <div className="row" >
                 <div className="column">
                    <div className="about-img" ></div>
                 </div>
                 <div className="column">
                    <div className="tabs">
                        <div className={toggle === 1 ? "single-tab active-tab" : "single-tab"}
                        onClick={()=> toggleState(1)}
                        >
                            <h2>About Us</h2>
                        </div>
                        <div className={toggle === 2 ? "single-tab active-tab" : "single-tab"}
                        onClick={()=> toggleState(2)}
                        >
                            <h2>Contact Us</h2>
                        </div>
                        <div className={toggle === 3 ? "single-tab active-tab" : "single-tab"}
                        onClick={()=> toggleState(3)}
                        >
                            <h2>Sign Up</h2>
                        </div>

                    </div>
                    <div className="tab-content">
                          {/* About Content */}
                          <div className={toggle === 1 ? "content active-content" : "content"}>
                            {/* <h2>About Us</h2> */}
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged.</p>

                            <h3>I am Full Stack developer </h3>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged.
                            </p>
                            </div>

                           {/* Contact us Content */}
                           <div className={toggle === 2 ? "content active-content" : "content"}>
                            <Contact/>
                          </div>

                          {/* SignUp Content */}
                          <div className={toggle === 3 ? "content active-content" : "content"}>
                            <Signup/>
                          </div>
                    </div>
                 </div>
            </div>
        </section>
    
    </>
  )
}

export default About