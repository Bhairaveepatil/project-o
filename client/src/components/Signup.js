import React, { useState } from 'react'
import '../css/Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const history = useNavigate()
    const [inputs, setinputs] = useState({
        name: "",
        email: "",
        password: "",
    })
    const handlechange = (e) => {
        setinputs(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const sendRequest = async () => {
        const res = await axios.post("http://localhost:5000/api/signup", {
            name: inputs.name,
            email: inputs.email,
            password: inputs.password,

        }).catch(err => console.log(err))
        const data = await res.data
        return data
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(inputs)
        sendRequest().then(() => history("/login"))
    }

    return (
        <section className="contact-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="wrapper">
                            <div className="row no-gutters">
                                <div className="col-md-12">
                                    <div className="contact-wrap w-100 p-lg-5 p-7">
                                        <form
                                            id="contactForm"
                                            className="contactForm"
                                        onSubmit={handleSubmit}
                                        >
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input

                                                            type="text"
                                                            className="form-control"
                                                            name="name"
                                                            placeholder="Enter Name"
                                                            onChange={handlechange}
                                                            value={inputs.name}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            name="email"
                                                            placeholder="Enter Email"
                                                            onChange={handlechange}
                                                            value={inputs.email}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            name="password"
                                                            placeholder="Enter Password"
                                                            onChange={handlechange}
                                                            value={inputs.password}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="form-group"  >
                                                        <button type='submit' className="col-md-12 btn btn-primary"
                                                    
                                                        >
                                                            Sign Up
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
    )
}

export default Signup