import React from 'react'
import { Link } from 'react-router-dom'

const View = () => {
  return (
    <React.Fragment>
       <section className="view p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-bold">View Contact</p>
              <p className="fst-italic">Here is the detail information of the user</p>
            </div>
          </div>
        </div>
        
       </section>
       <section className="view-card mt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
                <img className="user-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9pIsCYx9Z9wPHyN-qDcqJMUALTYV0phaxw&usqp=CAU" alt="" />
            </div>
            <div className="col-md-8">
            <ul className="list-group">
                            <li className="list-group-item list-group-item-action my-1">
                                Name : <span className="fw-bold"> Yashvi</span>
                            </li>
                            <li className="list-group-item list-group-item-action my-1">
                                Email : <span className="fw-bold"> Yashvi@gmail.com</span>
                            </li>
                            <li className="list-group-item list-group-item-action my-1">
                                Phone Number : <span className="fw-bold"> 9898987070</span>
                            </li>
                            <li className="list-group-item list-group-item-action my-1">
                                Gender : <span className="fw-bold"> Female</span>
                            </li>
                            <li className="list-group-item list-group-item-action my-1">
                                Hobbies : <span className="fw-bold"> Travelling, Photography</span>
                            </li>
                            <li className="list-group-item list-group-item-action my-1">
                                Highest Qualification : <span className="fw-bold">MBA</span>
                            </li>
                          </ul>
            </div>
            <div className="row">
              <div className="col">
                <Link to={'/userlist'} className="btn btn-warning">Back</Link>
              </div>
            </div>
          </div>
        </div>

       </section>
    </React.Fragment>
  )
}

export default View