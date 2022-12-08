import React from 'react'
import '../css/Signup.css'
import Header from './Header'

const Login = () => {
    const handleLogin = () =>{

    }
    const handleemail = () => {

    }
    const handlepassword = () => {

    }



    return (
        <>
        <div>
         <Header/>
        </div>
       <section className="contact-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 p-10">
                        <div className="wrapper">
                            <div className="row no-gutters">
                                <div className="col-md-8">
                                    <div className="contact-wrap w-100 p-lg-5 p-10">
                                        <form
                                            id="contactForm"
                                            className="contactForm"
                                            onSubmit={handleLogin}
                                        >
                                            <div className="row">
                                                
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            name="email"
                                                            placeholder="Enter Email"
                                                            onChange={handleemail}
                                                            // value={email}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="password"
                                                            placeholder="Enter Password"
                                                            onChange={handlepassword}
                                                            // value={password}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <button className="col-md-12 btn btn-primary" 
                                                         >
                                                            Login
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    

    )
}

export default Login